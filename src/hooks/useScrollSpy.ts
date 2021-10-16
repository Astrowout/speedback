import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollSpy = (
	ids: string[],
): string | null => {
	const [
		currentElementId,
		setCurrentElementId,
	] = useState<string | null>(null);

	useEffect(() => {
		ids.forEach(id => {
			const section = document.querySelector(id);

			if (!section) {
				return;
			}

			ScrollTrigger.create({
				trigger: id,
				start: "top 96",
				onToggle: self => {
					if (self.vars.trigger === currentElementId || !self.isActive) {
						return;
					}

					setCurrentElementId(self.vars.trigger as string);
				},
			});
		});

		return () => {
			const scrollTriggerInstances = ScrollTrigger.getAll();

			for (let i = 0; i < scrollTriggerInstances.length; i++) {
				const instance = scrollTriggerInstances[i];

				instance.kill();
			}
		};
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return currentElementId;
};

export default useScrollSpy;
