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
const topbar = document.createElement("div");
const button = document.createElement("button");
const dot = document.createElement("div");
const body = document.body;
const html = document.documentElement;
let allElements = document.querySelector("*");

let commentMode = false;
let editMode = false;

// Content
const updateContent = () => {
	if (commentMode) {
		topbar.textContent = "Add comments by clicking on elements and say what we can do better.";
		button.textContent = "View website";
	} else {
		topbar.textContent = "Add comments to give feedback about the website.";
		button.textContent = "Add comment";
	}
}

const renderElements = () => {
	topbar.appendChild(button);
	body.insertBefore(topbar, body.firstChild);

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

const updateTopbarStyling = () => {
	if (commentMode) {
		topbar.style.backgroundColor = "#ffd9c7";
	} else {
		topbar.style.backgroundColor = "#ffdd80";
	}
}

// Events
const toggleCommentMode = () => {
	commentMode = !commentMode;

	updateContent();
	updateTopbarStyling();
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

	await getComments();

	updateContent();
	topbar.classList.add("gthr-topbar");
	button.classList.add("gthr-btn");
	renderElements();
}

init();