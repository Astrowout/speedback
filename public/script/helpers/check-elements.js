const checkElement = (el) => {
	return el.classList.contains("gthr-dot")
		|| el.classList.contains("gthr-btn")
		|| el.classList.contains("gthr-topbar")
		|| el.classList.contains("tippy-box");
}

export default checkElement;
