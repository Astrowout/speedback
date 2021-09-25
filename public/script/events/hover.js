import checkElements from "../helpers/check-elements.js";
import { getTarget } from "../helpers/get-target.js";

export const mouseMove = (e) => {
	const hoveredElements = allElementsFromPoint(e.clientX, e.clientY);
	const hoveredElement = hoveredElements[hoveredElements.length - 2];

	const targetEl = getTarget(hoveredElement);

	console.log(targetEl);

	if (checkElements(targetEl)) {
		return;
	}

	const highlightedElement = document.querySelector(".gthr-highlight");

	if (highlightedElement) {
		highlightedElement.classList.remove("gthr-highlight");
	}

	targetEl.classList.add("gthr-highlight");
}

export const mouseEnter = (e) => {
	console.log(e);
}

const allElementsFromPoint = (x, y) => {
    var element, elements = [];
    var old_visibility = [];
    while (true) {
        element = document.elementFromPoint(x, y);
        if (!element || element === document.documentElement) {
            break;
        }
        elements.push(element);
        old_visibility.push(element.style.visibility);
        element.style.visibility = 'hidden'; // Temporarily hide the element (without changing the layout)
    }
    for (var k = 0; k < elements.length; k++) {
        elements[k].style.visibility = old_visibility[k];
    }
    elements.reverse();
    return elements;
}
