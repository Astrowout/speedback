import { Fragment, FunctionComponent, ReactElement, useState } from "react";
import cn from "classnames";
import { CheckCircleIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { CheckCircleIcon as CheckCircleIconSolid } from "@heroicons/react/solid";

import { DateUtils, Mutations } from "../helpers";
import { Disclosure, Transition } from '@headlessui/react'
import { useMutation } from "@apollo/client";

type CommentProps = {
	data: any,
	index: number,
	className?: string,
}

const Comment: FunctionComponent<CommentProps> = ({ className, data, index }) => {
	const [comment, setComment] = useState(data);
	const [resolveComment, { loading }] = useMutation(Mutations.resolveComment, {
		variables: { id: comment.id, resolved: !comment.resolved },
	});

	const handleResolveComment = async () => {
		const { data: { updateComment: newComment } } = await resolveComment();

		setComment({
			...comment,
			...newComment
		})
	}

	const renderMetainfo = (key: string, info: any): ReactElement => {
		if (typeof info === "object") {
			return (
				<Fragment key={key}>
					<div className="py-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 bg-gray-100">
						<dt className="text-sm text-gray-800 font-bold">{key}</dt>
					</div>

					{Object.keys(info).map(nestedKey => {
						const nestedInfo = info[nestedKey];

						return renderMetainfo(nestedKey, nestedInfo);
					})}
				</Fragment>
			);
		}

		return (
			<div key={`${key}-${info}`} className="py-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4">
				<dt className="text-sm text-gray-500">{key}</dt>
				<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
					{info}
				</dd>
			</div>
		)
	}

	return (
		<div
			className={cn(className, "flex flex-col")}
		>
			<div className="px-4 py-3 flex justify-between items-start">
				<div className={cn("flex divide-x divide-gray-300 -ml-4 -mr-3 items-center truncate", {
					'opacity-50': comment.resolved
				})}>
					<span className="text-sm rounded-r py-0.5 -mr-0.5 z-10 bg-indigo-100 px-3 text-indigo-800">
						{index + 1}
					</span>

					<p className="text-sm px-3 text-gray-400">page:&nbsp;
						<span className="text-indigo-500">
							{comment.pathname}
						</span>
					</p>

					<p className="text-sm truncate px-3 text-gray-400">
						{DateUtils.formatRelative(new Date(comment.createdAt))}
					</p>
				</div>

				<button className="ml-3 transform transition-transform hover:scale-110 disabled:pointer-events-none disabled:opacity-30" disabled={loading} onClick={handleResolveComment}>
					<span className="sr-only">Resolve comment</span>
					{comment.resolved ? (
						<CheckCircleIconSolid
							className="w-6 h-6 text-green-500"
							aria-hidden="true"
						/>
					) : (
						<CheckCircleIcon
							className="w-6 h-6 text-gray-400"
							aria-hidden="true"
						/>
					)}
				</button>
			</div>

			<Disclosure as="div">
				{({ open }) => (
					<>
						<Disclosure.Button className="py-3 px-4 w-full flex justify-between items-center transition-colors group hover:bg-indigo-50">
							<p
								className={cn("text-left text-lg", {
									'line-through text-gray-400': comment.resolved
								})}
							>
								{comment.text}
							</p>

							<ChevronDownIcon
								className={cn("ml-3 mr-0.5 w-5 h-5 flex-shrink-0 text-gray-400 group-hover:text-indigo-500 transform transition", {
									"rotate-180": open
								})}
								aria-hidden="true"
							/>
						</Disclosure.Button>

						<Transition
							as={Fragment}
							enter="transition-all duration-150 ease-out"
							enterFrom="transform max-h-0 -translate-y-4 opacity-0"
							enterTo="transform max-h-96 translate-y-0 opacity-100"
							leave="transition-all duration-100 ease-out"
							leaveFrom="transform max-h-96 translate-y-0 opacity-100"
							leaveTo="transform max-h-0 -translate-y-4 opacity-0"
						>
							<Disclosure.Panel>
								<dl className="divide-y border-t overflow-hidden">
									{Object.keys(comment.metaInfo).map(key => {
										const info = comment.metaInfo[key];

										return renderMetainfo(key, info);
									})}
								</dl>
							</Disclosure.Panel>
						</Transition>
					</>
				)}
			</Disclosure>
		</div>
	)
}

export default Comment;
