import { FunctionComponent, useState } from "react";
import cn from "classnames";
import { CheckCircleIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { CheckCircleIcon as CheckCircleIconSolid } from "@heroicons/react/solid";

import { DateUtils, Mutations } from "../helpers";
import { Disclosure } from '@headlessui/react'
import { useMutation } from "@apollo/client";

type CommentProps = {
	data: any,
	className?: string,
}

const Comment: FunctionComponent<CommentProps> = ({ className, data }) => {
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

	return (
		<div
			className={cn(className, "flex flex-col")}
		>
			<div className="p-4 pb-0 flex justify-between items-center">
				<div className={cn("flex truncate divide-x divide-gray-300", {
					'opacity-50': comment.resolved
				})}>
					<p className="text-sm font-bold truncate pr-3">
						{comment.authUser.email}
					</p>

					<span className="block text-sm truncate pl-3 text-gray-400">
						{DateUtils.formatRelative(new Date(comment.createdAt))}
					</span>
				</div>

				<button className="ml-3 transform transition-transform hover:scale-110 disabled:pointer-events-none disabled:opacity-30" disabled={loading} onClick={handleResolveComment}>
					<span className="sr-only">Resolve comment</span>
					{comment.resolved ? (
						<CheckCircleIconSolid
							className="w-6 h-6 text-green-500"
							aria-hidden="true"
						/>
					): (
						<CheckCircleIcon
							className="w-6 h-6 text-gray-400"
							aria-hidden="true"
						/>
					)}
				</button>
			</div>

			<Disclosure as="div" className="mr-16">
				{({ open }) => (
        			<>
						<Disclosure.Button className="p-4 pb-6 w-full flex justify-between items-center">
							<p
								className={cn("text-left", {
									'line-through text-gray-400': comment.resolved
								})}
							>
								{comment.text}
							</p>

							<ChevronDownIcon
								className={cn("ml-3 w-5 h-5 flex-shrink-0 text-gray-400 transform transition-transform", {
									"rotate-180": open
								})}
								aria-hidden="true"
							/>
						</Disclosure.Button>

						<Disclosure.Panel className="px-4 pb-6 text-gray-500">
							<dl className="divide-y">
								<div className="py-1.5 sm:grid sm:grid-cols-3 sm:gap-4">
									<dt className="text-sm text-gray-500">URL</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
										{comment.url}
									</dd>
								</div>

								{Object.keys(comment.metaInfo).map(key => {
									const info = comment.metaInfo[key];

									return (
										<div key={key} className="py-1.5 sm:grid sm:grid-cols-3 sm:gap-4">
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
