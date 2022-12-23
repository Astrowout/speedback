export default (filePath: string) => {
	const head = document.head;
	const link = document.createElement("link");

	link.rel = "stylesheet";
	link.href = filePath;

	head.appendChild(link);
}