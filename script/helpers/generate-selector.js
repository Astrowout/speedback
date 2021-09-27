
const getIndex = (node) => {
	let i = 1;
	let tagName = node.tagName;

	while (node.previousSibling) {
	  node = node.previousSibling;
	  if (
		node.nodeType === 1 &&
		tagName.toLowerCase() == node.tagName.toLowerCase()
	  ) {
		i++;
	  }
	}
	return i;
}

const generateSelector = (context) => {
	let index, pathSelector, localName;

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

