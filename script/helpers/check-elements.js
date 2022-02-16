export const checkElements = (el) => {
	return el.classList.contains("gthr-btn")
		|| el.classList.contains("gthr-overlay");
}

export const checkHighlightedElement = () => {
	const highlightedElement = document.querySelector(".gthr-highlight");

	if (highlightedElement) {
		highlightedElement.classList.remove("gthr-highlight");
	}
}
