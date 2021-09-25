export const getTarget = (target) => {
	let targetEl = target;

	if (targetEl.tagName === "IMG" || targetEl.tagName === "svg" || targetEl.tagName === "path") {
		targetEl = targetEl.closest("div, span, section, main, body, aside, header, footer, nav, a");
	}

	return targetEl;
}

export const getTargetFromEvent = (e) => {
	let targetEl = e.target;

	if (targetEl.tagName === "IMG" || targetEl.tagName === "svg" || targetEl.tagName === "path") {
		targetEl = targetEl.closest("div, span, section, main, body, aside, header, footer, nav, a");
	}

	return targetEl;
}
