// Config
import config from "./config.js";

// Templates
import htmlTooltip from "./templates/tooltip.js";

// Helpers
import addCss from "./helpers/add-css.js";
import { getTargetFromEvent } from "./helpers/get-target.js";
import addTippy from "./helpers/add-tippy.js";
import checkElements from "./helpers/check-elements.js";
import throttle from "./helpers/throttle.js";

// Events
import { mouseMove } from "./events/hover.js";

// Globals
const button = document.createElement("button");
button.classList.add("gthr-btn");

const overlay = document.createElement("div");
overlay.classList.add("gthr-overlay");

const dot = document.createElement("span");
const body = document.body;

const throttledEvent = throttle((e) => mouseMove(e), 200);

let commentMode = false;

const updateButton = () => {
	if (commentMode) {
		button.textContent = "Close feedback";
		button.classList.add("gthr-btn--comment-mode");
	} else {
		button.textContent = "Give feedback";
		button.classList.remove("gthr-btn--comment-mode");
	}
}

const renderElements = () => {
	body.insertBefore(button, body.firstChild);

	button.addEventListener("click", toggleCommentMode);
}

const handleInput = (e) => {
	const placeholder = document.querySelector(".gthr-tooltip__placeholder");

	const value = e.target.value;

	if (value) {
		placeholder.style.display = "block";
	} else {
		placeholder.style.display = "none";
	}
}

const handleClose = () => {
	tippy.hideAll();
}

const renderInput = (el) => {
	tippy(el, {
        content: htmlTooltip,
		trigger: 'click',
		allowHTML: true,
		animation: 'scale-subtle',
		arrow: false,
		duration: 100,
		offset: [0, 20],
		placement: 'auto-start',
		theme: "light-border",
		hideOnClick: 'toggle',
		hideOnClick: true,
		interactive: true,
		showOnCreate: true,
		onHidden() {
			handleCommentMode();
		},
		onShow() {
			cleanupCommentMode();
		},
		onMount() {
			const input = document.querySelector(".gthr-tooltip__input");
			const cancelBtn = document.querySelector(".gthr-tooltip__action--secondary");

			input.addEventListener("input", handleInput);
			cancelBtn.addEventListener("click", handleClose);
		}
    });
}

const addComment = (el) => {
	if (checkElements(el)) {
		return;
	}

	dot.classList.add("gthr-dot");

	dot.textContent = "2";

	if (!el.style.position) {
		el.style.position = "relative";
	}

	el.appendChild(dot);

	renderInput(dot);
}

const handleComment = (e) => {
	e.preventDefault();
	const targetEl = getTargetFromEvent(e);

	addComment(targetEl);
}

const handleCommentMode = () => {
	window.addEventListener("click", handleComment);

	body.addEventListener("mousemove", throttledEvent, false);

	body.appendChild(overlay);
}

const cleanupCommentMode = () => {
	window.removeEventListener("click", handleComment);

	const highlightedElement = document.querySelector(".gthr-highlight");

	if (highlightedElement) {
		highlightedElement.classList.remove("gthr-highlight");
	}

	body.removeEventListener("mousemove", throttledEvent, false);

	overlay.remove();
}

const toggleCommentMode = () => {
	commentMode = !commentMode;

	updateButton();
	renderElements();

	if (commentMode) {
		setTimeout(handleCommentMode);
	} else {
		cleanupCommentMode();
	}
}

const getComments = async () => {
	// await fetch
}

const init = async () => {
	await getComments();

	window.addEventListener("load", () => {
		addTippy();
		addCss(`${config.SCRIPT_URL}/main.css`);

		const scriptElement = document.querySelector(`script[src^='${config.SCRIPT_URL}']`);
		const id = scriptElement.src.split("?id=")[1];
		console.log(id);

		updateButton();
		renderElements();
	});
}

init();
