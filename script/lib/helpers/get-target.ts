export const getTarget = (target: Element) => {
	let targetEl: Element | null = target;

	if (targetEl.tagName === "IMG" || targetEl.tagName === "svg" || targetEl.tagName === "path") {
		targetEl = targetEl.closest("div, span, section, main, body, aside, header, footer, nav, a");
	}

	return targetEl;
}

export const getTargetFromEvent = (e: MouseEvent) => {
	let targetEl: any = e.target;

	if (targetEl && (targetEl.tagName === "IMG" || targetEl.tagName === "svg" || targetEl.tagName === "path")) {
		targetEl = targetEl.closest("div, span, section, main, body, aside, header, footer, nav, a");
	}

	return targetEl;
}
