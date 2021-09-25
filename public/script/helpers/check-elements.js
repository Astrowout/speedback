export const checkElements = (el) => {
	return el.classList.contains("gthr-dot")
		|| el.classList.contains("gthr-btn")
		|| el.classList.contains("gthr-overlay")
		|| el.classList.contains("tippy-box");
}

export const checkHighlightedElement = () => {
	const highlightedElement = document.querySelector(".gthr-highlight");

	if (highlightedElement) {
		highlightedElement.classList.remove("gthr-highlight");
	}
}
