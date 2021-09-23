import checkElements from "../helpers/check-elements.js";
import getTarget from "../helpers/get-target.js";

export const mouseOver = (e) => {
	const targetEl = getTarget(e);

	if (checkElements(targetEl)) {
		return;
	}

	targetEl.classList.add("gthr-highlight");
}

export const mouseOut = (e) => {
	const targetEl = getTarget(e);

	if (checkElements(targetEl)) {
		return;
	}

	targetEl.classList.remove("gthr-highlight");
}