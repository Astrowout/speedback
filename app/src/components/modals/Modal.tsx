
import { Fragment, useRef, memo, FC, ReactNode } from 'react';
import { createPortal } from "react-dom";
import { Dialog, Transition } from '@headlessui/react';

import { Button } from '../index';

type ModalProps = {
	isOpen: boolean,
	closeAction: (value: boolean) => void,
	action?: () => void,
	children?: ReactNode;
}

const Modal: FC<ModalProps> = ({ children, isOpen = false, action, closeAction }) => {
	const cancelButtonRef = useRef(null);

	return typeof window !== 'undefined' ? createPortal(
		<Transition.Root show={isOpen} as={Fragment}>
			<Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={closeAction}>
				<div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					<Transition.Child
						as="div"
						enter="ease-out duration-300"
						enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enterTo="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 translate-y-0 sm:scale-100"
						leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						className="bg-white rounded mx-auto text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
					>
						<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							{children}
						</div>

						<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
							<Button
								onClick={action}
								danger
								className="w-full sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
							>
								Delete
							</Button>

							<Button
								onClick={() => closeAction(false)}
								secondary
								ref={cancelButtonRef}
								className="mt-3 w-full sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
							>
								Cancel
							</Button>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>,
		document.body
	) : null
}

export default memo(Modal);
