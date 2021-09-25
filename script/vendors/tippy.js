import addCss from "../helpers/add-css.js";

const addTippy = () => {
	const popperScript = document.createElement('script');
	const tippyScript = document.createElement('script');

	popperScript.src = "https://unpkg.com/@popperjs/core@2";
	tippyScript.src = "https://unpkg.com/tippy.js@6";

	document.body.appendChild(popperScript);
	document.body.appendChild(tippyScript);

	addCss("https://unpkg.com/tippy.js@6/animations/scale-subtle.css");
}

export default addTippy;
