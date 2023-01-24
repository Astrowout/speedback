export function clickOutside(
	node: HTMLElement,
	handler: () => void,
  ): { destroy: () => void } {
	const onClick = (event: MouseEvent) => {
		const ignoreClickable = node.hasAttribute("data-ignore-clickable");
		const clickableNodes = document.querySelectorAll("[data-clickable]");
		const clickableNodeClicked = clickableNodes.length && Array.from(clickableNodes).some((node) => node.contains(event.target as HTMLElement));

		if (!ignoreClickable && clickableNodeClicked) {
			return;
		}
	
		if (node && !node.contains(event.target as HTMLElement) && !event.defaultPrevented) {
			handler();
		}
	};
  
	document.addEventListener("click", onClick, true);
  
	return {
		destroy() {
			document.removeEventListener("click", onClick, true);
		},
	};
}
