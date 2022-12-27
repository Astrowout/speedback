import "./main.css";
import App from "./App.svelte";
import addCss from "./helpers/add-css";

let app = null;

const loadElement = () => {
	const svelteEl = document.createElement("div");
	svelteEl.setAttribute("id", "speedback-app");

	document.body.appendChild(svelteEl);

	console.log(svelteEl);
};

const initApp = () => {
	app = new App({
		target: document.getElementById("speedback-app"),
	});

	console.log(app);
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
