import { checkElements, checkHighlightedElement } from "../helpers/check-elements";
import getAllElementsFromPoint from "../helpers/get-elements-from-point";
import { getTarget } from "../helpers/get-target";

const mouseMove = (e: MouseEvent) => {
	const hoveredElements = getAllElementsFromPoint(e.clientX, e.clientY);
	const hoveredElement = hoveredElements[hoveredElements.length - 2];

	const targetEl = getTarget(hoveredElement) as HTMLElement;

	if (checkElements(targetEl)) {
		checkHighlightedElement();

		return;
	}

	checkHighlightedElement();

	targetEl.classList.add("gthr-highlight");
}

export default mouseMove;
