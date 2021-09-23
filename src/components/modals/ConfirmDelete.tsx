
import { FunctionComponent } from 'react';
import { Dialog } from '@headlessui/react';
import { ExclamationIcon } from '@heroicons/react/outline';
import { Modal } from '../index';

type ConfirmDeleteModalProps = {
	title: string,
	isOpen: boolean,
	description?: string,
	closeAction: (value: boolean) => void,
	action?: () => void,
}

const ConfirmDeleteModal: FunctionComponent<ConfirmDeleteModalProps> = ({ title, description, action, closeAction, isOpen }) => {
	return (
		<Modal isOpen={isOpen} action={action} closeAction={closeAction}>
			<div className="sm:flex sm:items-start">
				<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
					<ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
				</div>

				<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
					<Dialog.Title as="span" className="text-lg font-bold text-gray-900">
						{title}
					</Dialog.Title>

					<div className="mt-2">
						<p className="text-sm text-gray-500">
							{description}
						</p>
					</div>
				</div>
			</div>
		</Modal>
	)
}

export default ConfirmDeleteModal;
