// Config
import config from "./config.js";

// Templates
import htmlTooltip from "./templates/tooltip.js";

// Helpers
import addCss from "./helpers/add-css.js";
import addTippy from "./helpers/add-tippy.js";
import throttle from "./helpers/throttle.js";

// Events
import mouseMove from "./events/hover.js";
import click from "./events/click.js";

// Globals
const button = document.createElement("button");
button.classList.add("gthr-btn");

const overlay = document.createElement("div");
overlay.classList.add("gthr-overlay");

const dot = document.createElement("span");
const body = document.body;

let id = null;

const throttledEvent = throttle((e) => mouseMove(e), 100);

let commentMode = false;

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

	if (e.target.value) {
		placeholder.style.visibility = "hidden";
	} else {
		placeholder.style.visibility = "visible";
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
		onMount(instance) {
			console.log(instance);
			const input = document.querySelector(".gthr-tooltip__input");
			const cancelBtn = document.querySelector(".gthr-tooltip__action--secondary");

			input.addEventListener("input", handleInput);
			cancelBtn.addEventListener("click", handleClose);
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
	dot.classList.add("gthr-dot");

	dot.textContent = "2";

	if (!el.style.position) {
		el.style.position = "relative";
	}

	el.appendChild(dot);

	renderInput(dot);
}

const handleCommentMode = () => {
	body.addEventListener("click", (e) => click(e, addComment));
	body.addEventListener("mousemove", throttledEvent, false);

	body.appendChild(overlay);
}

const cleanupCommentMode = () => {
	body.addEventListener("click", (e) => click(e, addComment));

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

	if (commentMode) {
		setTimeout(handleCommentMode);
	} else {
		cleanupCommentMode();
	}
}

const getComments = async () => {
	// await fetch
	console.log(id);
}

const init = () => {

	window.addEventListener("load", async() => {
		const scriptElement = document.querySelector(`script[src^='${config.SCRIPT_URL}']`);
		id = scriptElement.src.split("?id=")[1];

		await getComments();

		addTippy();
		addCss(`${config.SCRIPT_URL}/main.css`);

		updateButton();
		renderElements();
	});
}

init();
