import { FunctionComponent } from "react";
import cn from "classnames";
import { CheckCircleIcon, ChevronDownIcon } from "@heroicons/react/outline";

import { DateUtils } from "../helpers";
import { Disclosure } from '@headlessui/react'

type CommentProps = {
	data: any,
	className?: string,
}

const Comment: FunctionComponent<CommentProps> = ({ className, data }) => {

	return (
		<div
			className={cn(className, "flex flex-col")}
		>
			<div className="p-4 pb-0 flex justify-between items-center">
				<div className="flex truncate divide-x divide-gray-300">
					<p className="text-sm font-bold truncate pr-3">
						{data.authUser.email}
					</p>

					<span className="block text-sm truncate pl-3 text-gray-400">
						{DateUtils.formatRelative(new Date(data.createdAt))}
					</span>
				</div>

				<button className="ml-3">
					<span className="sr-only">Resolve comment</span>
					<CheckCircleIcon
						className={cn("w-6 h-6", {
							'text-green-500': data.resolved,
							'text-gray-400': !data.resolved,
						})}
						aria-hidden="true"
					/>
				</button>
			</div>

			<Disclosure as="div" className="mr-12">
				{({ open }) => (
        			<>
						<Disclosure.Button className="p-4 pb-6 w-full flex justify-between items-center">
							<p className="text-left">
								{data.text}
							</p>

							<ChevronDownIcon
								className={cn("ml-3 w-5 h-5 text-gray-400 transform transition-transform", {
									"rotate-180": open
								})}
								aria-hidden="true"
							/>
						</Disclosure.Button>

						<Disclosure.Panel className="px-4 pb-6 text-gray-500">
							<dl className="divide-y">
								<div className="py-1 sm:grid sm:grid-cols-3 sm:gap-4">
									<dt className="text-sm text-gray-500">URL</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
										{data.url}
									</dd>
								</div>

								{Object.keys(data.metaInfo).map(key => {
									const info = data.metaInfo[key];

									return (
										<div key={key} className="py-1 sm:grid sm:grid-cols-3 sm:gap-4">
											<dt className="text-sm text-gray-500">{key}</dt>
											<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
												{info}
											</dd>
										</div>
									)
								})}
							</dl>
						</Disclosure.Panel>
					</>
      			)}
			</Disclosure>
		</div>
	)
}

export default Comment;
