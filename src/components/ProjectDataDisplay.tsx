import { ClipboardCopyIcon } from "@heroicons/react/outline";
import { FunctionComponent, MouseEvent } from "react";
import cn from "classnames";

type ProjectDataDisplayProps = {
	data: any,
	className?: string,
}

const ProjectDataDisplay: FunctionComponent<ProjectDataDisplayProps> = ({ className, data }) => {

	const handleCopy = (e: MouseEvent): void => {
		console.log('copy shit');
	}

	return (
		<div
			className={cn(className, "bg-white shadow overflow-hidden sm:rounded-lg")}
		>
			<div className="border-t border-gray-200">
				<dl>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">URL</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<a
								href={data.url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm text-blue-500 underline"
							>
								{data.url}
							</a>
						</dd>
					</div>
					<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">Description</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							{data.description}
						</dd>
					</div>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">Created by</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							{data.createdByAuthUser.email}
						</dd>
					</div>
				</dl>
			</div>
		</div>
	)
}

export default ProjectDataDisplay;
