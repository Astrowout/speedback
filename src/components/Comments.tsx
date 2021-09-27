import { FunctionComponent } from "react";
import cn from "classnames";

import { Comment } from "./index";

type CommentsProps = {
	comments: any[],
	className?: string,
}

const Comments: FunctionComponent<CommentsProps> = ({ className, comments }) => {
	return (
		<div
			className={cn(className)}
		>
			<h2 className="text-xl font-bold">
				Comments
			</h2>

			<ul className="bg-white shadow border overflow-hidden rounded divide-y mt-2">
				{comments.map(comment => (
					<li key={comment.id}>
						<Comment data={comment} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default Comments;
