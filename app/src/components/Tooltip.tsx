"use client";

import { FunctionComponent, Fragment, useState, forwardRef, Ref, useImperativeHandle } from 'react';
import { Transition } from "@headlessui/react";

// Types
type TooltipProps = {
	content: string,
	ref: Ref<{ toggleIsOpen: () => void; }>,
}

let timer: any = null;

const Tooltip: FunctionComponent<TooltipProps> = forwardRef(({ children, content }, ref: Ref<{ toggleIsOpen: () => void; }>) => {
	const [isOpen, setIsOpen] = useState(false);

	useImperativeHandle(ref, () => ({
		"toggleIsOpen": () => {
			setIsOpen(true);
			timer = setTimeout(() => {
				setIsOpen(false);
				clearTimeout(timer);
				timer = null;
			}, 1200);
		}
	}));

	return (
		<div className="relative">
			{children}

			<Transition
				as={Fragment}
				show={isOpen}
				enter="transition ease-out duration-200"
				enterFrom="opacity-0 translate-y-1"
				enterTo="opacity-100 translate-y-0"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100 translate-y-0"
				leaveTo="opacity-0 translate-y-1"
			>
				<div className="shadow-md text-sm text-indigo-500 mb-2 border border-indigo-300 bg-white bg-opacity-90 rounded-full py-2 px-3 whitespace-nowrap block absolute z-10 left-1/2 bottom-full transform -translate-x-1/2">
					{content}
				</div>
			</Transition>
		</div>
	)
})

export default Tooltip;
