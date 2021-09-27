const addCss = (fileName) => {
	const head = document.head;
	const link = document.createElement("link");

	link.rel = "stylesheet";
	link.href = fileName;

	head.appendChild(link);
}

export default addCss;
