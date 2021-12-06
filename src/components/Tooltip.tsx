import { FunctionComponent, Fragment } from 'react';
import { Popover, Transition } from "@headlessui/react";

// Types
type TooltipProps = {
	content: string,
}

const Tooltip: FunctionComponent<TooltipProps> = ({ children, content }) => {
	return (
		<Popover className="relative">
			<Popover.Button as={Fragment}>
				{children}
			</Popover.Button>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-200"
				enterFrom="opacity-0 translate-y-1"
				enterTo="opacity-100 translate-y-0"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100 translate-y-0"
				leaveTo="opacity-0 translate-y-1"
			>
				<Popover.Panel className="shadow-md text-sm text-indigo-500 mb-2 border border-indigo-300 bg-white bg-opacity-90 rounded-full py-2 px-3 whitespace-nowrap block absolute z-10 left-1/2 bottom-full transform -translate-x-1/2">
					{({ close }) => {
						let timer: any = null;

						timer = setTimeout(() => {
							close();
							clearTimeout(timer);
							timer = null;
						}, 1200);

						return content;
					}}
				</Popover.Panel>
			</Transition>
		</Popover>
	)
}

export default Tooltip;
