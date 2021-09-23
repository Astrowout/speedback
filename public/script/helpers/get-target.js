const getTarget = (e) => {
	let targetEl = e.target;

	if (targetEl.tagName === "IMG" || targetEl.tagName === "svg" || targetEl.tagName === "path") {
		targetEl = targetEl.closest("div, span, section, main, body, aside, header, footer, nav, a");
	}

	return targetEl;
}

export default getTarget;
