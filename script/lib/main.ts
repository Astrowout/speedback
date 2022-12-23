import "./main.css";
import throttle from "lodash/throttle";
import App from './App.vue';
import { createApp } from "petite-vue";

// Config
import config from "./config";

// Templates
import inputTemplate from "./templates/input";
import commentTemplate from "./templates/comment";

// Helpers
import { checkHighlightedElement } from "./helpers/check-elements";
import generateSelector from "./helpers/generate-selector";
import getViewport from "./helpers/get-viewport";
import addCss from "./helpers/add-css";

// Events
import mouseMove from "./events/hover";
import click from "./events/click";

// Globals
const button = document.createElement("button");
button.classList.add(
	"spd-fixed",
	"spd-bottom-8",
	"spd-left-1/2",
	"-spd-translate-x-1/2",
	"spd-z-[99999999]",
	"spd-flex",
	"spd-items-center",
	"spd-py-3",
	"spd-px-6",
	"spd-rounded-full",
	"spd-text-neutral-400",
	"spd-shadow-md",
	"spd-border",
	"spd-border-neutral-500",
	"spd-text-white",
	"spd-bg-black",
);

const throttledEvent = throttle((e) => mouseMove(e), 100);

let feedbackMode = false;
let id: string | null = null;
let comments: any[] = [];

const updateButton = () => {
	button.innerHTML = `
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="spd-mr-2 spd-w-5 spd-h-5" stroke-width="1.5" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
		</svg><span class="spd-text-sm">Comment</span>
	`;
}

const renderElements = () => {
	// console.log("render el");
	document.body.appendChild(button);

	button.addEventListener("click", toggleFeedbackMode);
}

const handleInput = (e: InputEvent) => {
	const placeholder = document.querySelector(".gthr-tooltip__placeholder");

	if (e.target.innerText) {
		placeholder.style.visibility = "hidden";
	} else {
		placeholder.style.visibility = "visible";
	}
}

const handlePostComment = async (e, el) => {
	e.target.disabled = true;

	const input = document.querySelector(".gthr-tooltip__input");

	const data = {
		metainfo: {
			...Bowser.parse(window.navigator.userAgent),
			viewport: getViewport(),
		},
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
		handleCloseInput(dot);
		await getComments();
	}
}

const handleResolveComment = async ({ comment, el }) => {
	el._tippy.setContent(commentTemplate({
		text: comment.text,
		resolved: comment.resolved,
		metadata: comment.metaInfo,
		createdAt: comment.createdAt,
		loading: true,
	}));

	const data = {
		id: comment.id,
	}

	const res = await fetch(`${config.BASE_URL}/api/comments/resolve`, {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data),
	});

	const updatedComment = await res.json();

	el._tippy.setContent(commentTemplate({
		text: updatedComment.text,
		resolved: updatedComment.resolved,
		metadata: updatedComment.metaInfo,
		createdAt: updatedComment.createdAt,
	}));

	el._tippy.hide();
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
		appendTo: () => document.body,
		placement: 'bottom',
		ignoreAttributes: true,
		interactive: true,
	});
}

const addComment = (el) => {
	const dot = document.createElement("span");
	dot.classList.add("gthr-dot", "gthr-dot--input");
	dot.textContent = comments.length + 1;

	// Append dot to selected element
	el.appendChild(dot);

	// Add tooltip to dot
	const postFn = (e) => {
		console.log(e, el);
		// handlePostComment(e, el);
	}

	const cancelFn = () => handleCloseInput(dot);

	const inputFn = (e) => handleInput(e);

	if (dot._tippy) {
		dot._tippy.show();
	} else {
		tippy(dot, {
			content: inputTemplate,
			showOnCreate: true,
			onShown() {
				const postBtn = document.getElementById("gthr-action-post");
				const cancelBtn = document.getElementById("gthr-action-cancel");
				const inputEl = document.getElementById("gthr-action-input");

				postBtn.addEventListener("click", postFn);
				cancelBtn.addEventListener("click", cancelFn);
				inputEl.addEventListener("input", inputFn);

				handleTooltipActive();
			},
			onHide() {
				const postBtn = document.getElementById("gthr-action-post");
				const cancelBtn = document.getElementById("gthr-action-cancel");
				const inputEl = document.getElementById("gthr-action-input");

				postBtn.removeEventListener("click", postFn);
				cancelBtn.removeEventListener("click", cancelFn);
				inputEl.removeEventListener("input", inputFn);
			},
			onHidden() {
				dot.remove();
				setTimeout(cleanupCommentMode, 200);
			}
		});
	}
}

const handleAddComment = (e) => {
	click(e, addComment);
}

const handleFeedbackMode = () => {
	document.body.addEventListener("click", handleAddComment);
	document.body.addEventListener("mousemove", throttledEvent, false);
}

const cleanupFeedbackMode = () => {
	document.body.removeEventListener("click", handleAddComment);
	document.body.removeEventListener("mousemove", throttledEvent, false);

	removeComments();
	checkHighlightedElement();
}

const handleTooltipActive = () => {
	document.body.removeEventListener("click", handleAddComment);
	document.body.removeEventListener("mousemove", throttledEvent, false);
}

const handleTooltipInactive = () => {
	document.body.addEventListener("click", handleAddComment);
	document.body.addEventListener("mousemove", throttledEvent, false);
}

const toggleFeedbackMode = async (e) => {
	e.stopPropagation();

	feedbackMode = !feedbackMode;

	updateButton();

	if (feedbackMode) {
		await getComments();
		setTimeout(handleFeedbackMode, 200);
	} else {
		cleanupFeedbackMode();
	}
}

const placeComments = () => {
	for (let i = 0; i < comments.length; i++) {
		const comment = comments[i];

		// Check if element of comment can be found
		const el = document.querySelector(comment.elementSelector);

		if (!el) {
			continue;
		}

		// Create dot element
		const dot = document.createElement("span");
		dot.classList.add("gthr-dot");
		dot.textContent = i + 1;

		// Place comment dot on selected element in the top center position
		dot.style.top = `${el.offsetTop}px`;
		dot.style.left = `${el.offsetLeft + el.offsetWidth / 2}px`;
		document.body.appendChild(dot);

		// Attach comment tooltip to the dot
		const resolveFn = () => handleResolveComment({
			comment,
			el: dot
		});

		tippy(dot, {
			content: commentTemplate({
				text: comment.text,
				resolved: comment.resolved,
				metadata: comment.metaInfo,
				createdAt: comment.createdAt,
			}),
			onShown() {
				const resolveBtn = document.getElementById("gthr-action-resolve");

				resolveBtn.addEventListener("click", resolveFn);
			},
			onShow() {
				handleTooltipActive();
			},
			onHidden() {
				setTimeout(handleTooltipInactive, 200);
			}
		});
	}
}

const getComments = async () => {
	const res = await fetch(`${config.BASE_URL}/api/comments?projectId=${id}&pathname=${window.location.pathname}`);
	comments = await res.json();

	placeComments();
}

const removeComments = () => {
	const commentEls = document.querySelectorAll(".gthr-dot");

	commentEls.forEach(el => {
		el.remove();
	});
}

const initEvents = () => {
	let url = location.href;

	document.body.addEventListener('click', () => {
		requestAnimationFrame(async () => {
			url = location.href;
			if (url !== location.href){
				await getComments();
			}
		});
	}, true);
}

const init = async () => {
	createApp().mount();
	// initTippy();
	addCss("/style.css");
	updateButton();
	renderElements();
}

init();
// <script>

// <div v-scope>
//   <p>{{ count }}</p>
//   <p>{{ plusOne }}</p>
//   <button @click="increment">increment</button>
// </div>

createApp(App).mount('#app');

