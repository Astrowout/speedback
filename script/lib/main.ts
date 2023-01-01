import "./main.css";
import App from "./App.svelte";
import addCss from "./helpers/add-css";

const loadElement = () => {
	const svelteEl = document.createElement("div");
	svelteEl.setAttribute("id", "speedback-app");

	document.body.appendChild(svelteEl);
};

const initApp = () => {
	new App({
		target: document.getElementById("speedback-app"),
	});
};

const init = async () => {
	loadElement();
	initApp();
	addCss("/style.css");
	// initTippy();
	// updateButton();
	// renderElements();
};

init();
