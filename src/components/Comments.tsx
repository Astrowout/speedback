import { FunctionComponent } from "react";
import cn from "classnames";

import { Comment, EmptyState } from "./index";
import { ChatAlt2Icon, ClipboardCopyIcon } from "@heroicons/react/outline";

type CommentsProps = {
	comments: any[],
	projectId: string,
	className?: string,
}

const Comments: FunctionComponent<CommentsProps> = ({ className, comments, projectId }) => {
	return (
		<div
			className={cn(className)}
		>
			<h2 className="text-xl font-bold">
				Comments
			</h2>

			{!comments.length ? (
				<EmptyState title="No feedback added in this project." icon={ChatAlt2Icon}>
					<div className="mt-2 flex flex-col space-y-6 items-center">
						<p className="text-sm text-center text-gray-400">
							Integrate the script in your website to start gathering feedback from your clients or customers.
						</p>
						<button
							type="button"
							data-clipboard-text={`<script src="${window.location.origin}/script/index.js?id=${projectId}" crossorigin charset="utf-8"></script>`}
							id="copyScriptTrigger"
							className="text-indigo-500 px-3 py-2 bg-indigo-100 rounded hover:bg-indigo-200 hover:text-indigo-800 flex items-center"
						>
							<ClipboardCopyIcon className="block h-5 w-5 mr-1" aria-hidden="true" />
							<span className="text-sm">Copy integration script</span>
						</button>
					</div>
				</EmptyState>
			) : (
				<ul className="bg-white shadow border overflow-hidden rounded divide-y mt-2">
					{comments.map(comment => (
						<li key={comment.id}>
							<Comment data={comment} />
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default Comments;
