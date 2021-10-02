const throttle = (callback, interval) => {
	let enableCall = true;

	return function(...args) {
		if (!enableCall) return;

		enableCall = false;
		callback.apply(this, args);
		setTimeout(() => enableCall = true, interval);
	}
}

export default throttle;
