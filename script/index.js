// Config
import config from "./config.js";

// Templates
import inputTemplate from "./templates/input.js";
import commentTemplate from "./templates/comment.js";

// Helpers
import addCss from "./helpers/add-css.js";
import { checkHighlightedElement } from "./helpers/check-elements.js";
import generateSelector from "./helpers/generate-selector.js";
import throttle from "./helpers/throttle.js";

// Vendors
import tippy from "./vendors/tippy.js";
import Bowser from "./vendors/bowser.js";

// Events
import mouseMove from "./events/hover.js";
import click from "./events/click.js";

// Globals
const button = document.createElement("button");
button.classList.add("gthr-btn");

const overlay = document.createElement("div");
overlay.classList.add("gthr-overlay");

const dot = document.createElement("span");
dot.classList.add("gthr-dot", "gthr-dot--input");

const body = document.body;

const throttledEvent = throttle((e) => mouseMove(e), 100);

let commentMode = false;
let id = null;
let tippyInstance = null;
let comments = [];

const updateButton = () => {
	if (commentMode) {
		button.innerHTML = `
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
			Close feedback
		`;
	} else {
		button.innerHTML = `
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
			</svg>
			Give feedback
		`;
	}
}

const renderElements = () => {
	body.insertBefore(button, body.firstChild);

	button.addEventListener("click", toggleCommentMode);
}

const handleInput = (e) => {
	const placeholder = document.querySelector(".gthr-tooltip__placeholder");

	if (e.target.innerText) {
		placeholder.style.visibility = "hidden";
	} else {
		placeholder.style.visibility = "visible";
	}
}

const destroyTippy = () => {
	tippyInstance.destroy();
	tippyInstance = null;
}

const handlePostComment = async (e, el) => {
	e.target.disabled = true;

	const input = document.querySelector(".gthr-tooltip__input");

	const data = {
		metainfo: Bowser.parse(window.navigator.userAgent),
		text: input.innerText,
		pathname: window.location.pathname,
		elementSelector: generateSelector(el),
		projectId: id,
	}

	const res = await fetch(`${config.BASE_URL}/api/comments/post`, {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	const comment = await res.json();

	if (comment.id) {
		const dot = el.querySelector(".gthr-dot");
		dot.remove();
		await getComments();
	}
}

const handleResolveComment = async ({ comment, el }) => {
	const data = {
		id: comment.id,
		value: !comment.resolved
	};

	const res = await fetch(`${config.BASE_URL}/api/comments/resolve`, {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data),
	});
	const newComment = await res.json();

	el._tippy.setContent(commentTemplate({
		text: comment.text,
		resolved: newComment.resolved,
	}));
}

const handleCloseInput = (el) => {
	el._tippy.hide();
}

const initTippy = () => {
	tippy.setDefaultProps({
		trigger: 'click',
		allowHTML: true,
		animation: 'scale-subtle',
		arrow: false,
		duration: 100,
		maxWidth: 320,
		placement: 'bottom-end',
		interactive: true,
		ignoreAttributes: true,
		inlinePositioning: true,
		popperOptions: {
			strategy: 'fixed'
		},
	});
}

const addComment = (el) => {
	dot.textContent = comments.length + 1;

	if (!el.style.position) {
		el.style.position = "relative";
	}

	el.appendChild(dot);

	const postFn = (e) => handlePostComment(e, el);

	const cancelFn = () => handleCloseInput(dot);

	const inputFn = (e) => handleInput(e);

	if (dot._tippy) {
		dot._tippy.show();
	} else {
		tippy(dot, {
			content: inputTemplate,
			showOnCreate: true,
			onShown() {
				disableCommentMode();

				const postBtn = document.getElementById("gthr-action-post");
				const cancelBtn = document.getElementById("gthr-action-cancel");
				const inputEl = document.getElementById("gthr-action-input");

				postBtn.addEventListener("click", postFn);
				cancelBtn.addEventListener("click", cancelFn);
				inputEl.addEventListener("input", inputFn);
			},
			onHide() {
				const postBtn = document.getElementById("gthr-action-post");
				const cancelBtn = document.getElementById("gthr-action-cancel");
				const inputEl = document.getElementById("gthr-action-input");

				postBtn.removeEventListener("click", postFn);
				cancelBtn.removeEventListener("click", cancelFn);
				inputEl.removeEventListener("input", inputFn);
			},
		});
	}
}

const handleAddComment = (e) => {
	click(e, addComment);
}

const handleCommentMode = () => {
	body.addEventListener("click", handleAddComment);
	body.addEventListener("mousemove", throttledEvent, false);

	body.appendChild(overlay);
}

const cleanupCommentMode = () => {
	body.removeEventListener("click", handleAddComment);
	body.removeEventListener("mousemove", throttledEvent, false);

	checkHighlightedElement();

	overlay.remove();
}

const disableCommentMode = () => {
	commentMode = false;

	updateButton();

	cleanupCommentMode();
}

const toggleCommentMode = (e) => {
	e.stopPropagation();

	commentMode = !commentMode;

	updateButton();

	if (commentMode) {
		setTimeout(handleCommentMode);
	} else {
		cleanupCommentMode();
	}
}

const placeComments = () => {
	for (let i = 0; i < comments.length; i++) {
		const comment = comments[i];

		const el = document.querySelector(comment.elementSelector);

		if (!el) {
			continue;
		}

		const dot = document.createElement("span");
		dot.classList.add("gthr-dot");

		dot.textContent = i + 1;

		if (!el.style.position) {
			el.style.position = "relative";
		}

		el.appendChild(dot);

		const resolveFn = () => handleResolveComment({
			comment,
			el: dot
		});

		tippy(dot, {
			content: commentTemplate({
				text: comment.text,
				resolved: comment.resolved,
				metadata: comment.metadata
			}),
			onShown() {
				const resolveBtn = document.getElementById("gthr-action-resolve");

				resolveBtn.addEventListener("click", resolveFn);
			},
			onHide() {
				const resolveBtn = document.getElementById("gthr-action-resolve");

				resolveBtn.removeEventListener("click", resolveFn);
			},
		});
	}
}

const getComments = async () => {
	const res = await fetch(`${config.BASE_URL}/api/comments?projectId=${id}&pathname=${window.location.pathname}`);
	comments = await res.json();

	initTippy();
	placeComments();
}

const init = async () => {
	addCss(`${config.BASE_URL}/script/main.css`);

	const scriptElement = document.querySelector(`script[src^='${config.BASE_URL}/script']`);
	id = scriptElement.src.split("?id=")[1];

	await getComments();

	updateButton();
	renderElements();
}

init();
