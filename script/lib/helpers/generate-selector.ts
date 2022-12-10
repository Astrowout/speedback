
const getIndex = (node: Element) => {
	let i = 1;
	let tagName: string = node.tagName;

	while (node.previousSibling) {
	  node = node.previousSibling as Element;
	  if (
		node.nodeType === 1 &&
		tagName.toLowerCase() == node.tagName.toLowerCase()
	  ) {
		i++;
	  }
	}
	return i;
}

const generateSelector = (context: any) => {
	let index, pathSelector;

	if (context == "null") throw "not an dom reference";
	// call getIndex function
	index = getIndex(context);

	while (context.tagName) {
		// selector path
		pathSelector = context.localName + (pathSelector ? ">" + pathSelector : "");
		context = context.parentNode;
	}
	// selector path for nth of type
	pathSelector = pathSelector + `:nth-of-type(${index})`;
	return pathSelector;
}

export default generateSelector;

