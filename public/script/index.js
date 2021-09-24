// Config
import config from "./config.js";

// Templates
import htmlTooltip from "./templates/tooltip.js";

// Helpers
import addCss from "./helpers/add-css.js";
import getTarget from "./helpers/get-target.js";
import addTippy from "./helpers/add-tippy.js";
import checkElements from "./helpers/check-elements.js";

// Events
import { mouseOver, mouseOut } from "./events/hover.js";

// Globals
const button = document.createElement("button");
const dot = document.createElement("div");
const overlay = document.createElement("div");
const body = document.body;
const html = document.documentElement;
let allElements = document.querySelector("*");

let commentMode = false;
let editMode = false;

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
	const targetEl = getTarget(e);

	addComment(targetEl);
}

const handleCommentMode = () => {
	window.addEventListener("click", handleComment);

	allElements.addEventListener("mouseover", mouseOver, false);
	allElements.addEventListener("mouseout", mouseOut, false);

	html.classList.add("gthr-prevent-clicks");

	body.insertBefore(overlay, body.firstChild);

	// const interactiveEls = [...document.querySelectorAll("button:not(.gthr-btn), a")];
	// interactiveEls.forEach(el => {
	// 	el.addEventListener("click", (e) => {
	// 		e.preventDefault();
	// 	})
	// });
}

const cleanupCommentMode = () => {
	window.removeEventListener("click", handleComment);

	const highlightedEl = document.querySelector(".gthr-highlight");

	if (highlightedEl) {
		highlightedEl.classList.remove("gthr-highlight");
	}

	allElements.removeEventListener("mouseover", mouseOver, false);
	allElements.removeEventListener("mouseout", mouseOut, false);

	overlay.remove();

	setTimeout(() => {
		html.classList.remove("gthr-prevent-clicks");

		// const interactiveEls = [...document.querySelectorAll("button:not(.gthr-btn), a")];
		// interactiveEls.forEach(el => {
		// 	el.removeEventListener("click", (e) => {
		// 		e.preventDefault();
		// 	})
		// });
	});
}

// Events
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
	// initialisation stuff here
	console.log('App initialized');

	addTippy();
	addCss(`${config.SCRIPT_URL}/main.css`);

	const scriptElement = document.querySelector(`script[src^='${config.SCRIPT_URL}']`);
	const id = scriptElement.src.split("?id=")[1];
	console.log(id);

	await getComments();

	updateButton();
	button.classList.add("gthr-btn");
	overlay.classList.add("gthr-overlay");
	renderElements();
}

init();
