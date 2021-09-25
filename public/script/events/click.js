import checkElements from "../helpers/check-elements.js";
import getAllElementsFromPoint from "../helpers/get-elements-from-point.js";
import { getTarget } from "../helpers/get-target.js";

const click = (e, cb) => {
	e.preventDefault();

	const hoveredElements = getAllElementsFromPoint(e.clientX, e.clientY);
	const hoveredElement = hoveredElements[hoveredElements.length - 2];

	const targetEl = getTarget(hoveredElement);

	if (checkElements(targetEl)) {
		return;
	}

	cb(targetEl);
}

export default click;

