const checkElements = (el) => {
	return el.classList.contains("gthr-dot")
		|| el.classList.contains("gthr-btn")
		|| el.classList.contains("gthr-overlay")
		|| el.classList.contains("tippy-box");
}

export default checkElements;
