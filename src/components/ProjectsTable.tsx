import { ClipboardCopyIcon } from "@heroicons/react/outline";
import { FunctionComponent, MouseEvent, MouseEventHandler, useEffect } from "react";
import cn from "classnames";
import ClipboardJS from "clipboard";
import Router from "next/router";

type ProjectsTableProps = {
	rows: any[],
	className?: string,
	compact?: boolean,
}

const ProjectsTable: FunctionComponent<ProjectsTableProps> = ({ className, rows, compact = false }) => {

	useEffect(() => {
		const clipboard = new ClipboardJS("#copyScriptTrigger");

		return () => {
			clipboard.destroy();
		}
	}, []);

	const handleProjectDetail = (e: MouseEvent & { target: Element }, id: string) => {
		const clickElement = e.target.closest('#copyScriptTrigger');

		if (clickElement && clickElement.hasAttribute('data-clipboard-text')) {
			return;
		}

		Router.push(`/projects/${id}`);
	}

	return (
		<div
			className={cn(className, "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8")}
		>
			<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
				<div className="overflow-hidden shadow border rounded">
					<table className="min-w-full divide-y divide-gray-200">
						<thead className="bg-gray-100">
							<tr>
								<th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Name
								</th>

								<th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									URL
								</th>

								{!compact && (
									<>
										<th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Description
										</th>

										<th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											ID
										</th>

										<th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Comment count
										</th>
									</>
								)}

								<th scope="col" className="px-4 py-3">
									<span className="sr-only">Copy script</span>
								</th>
							</tr>
						</thead>

						<tbody className="bg-white divide-y divide-gray-200">
							{rows?.map(row => (
								<tr
									key={row.id}
									className="hover:bg-indigo-50 cursor-pointer"
									role="button"
									onClick={(e) => handleProjectDetail(e as any, row.id)}
								>
									<td className="p-4 whitespace-nowrap">
										<strong>
											{ row.name }
										</strong>
									</td>

									<td className="p-4 whitespace-nowrap">
										<a
											href={row.url}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm text-blue-500 underline"
										>
											{ row.url }
										</a>
									</td>

									{!compact && (
										<>
											<td className="p-4 whitespace-nowrap text-sm">
												{ row.description }
											</td>

											<td className="p-4 whitespace-nowrap text-sm">
												{ row.id }
											</td>

											<td className="p-4 whitespace-nowrap">
												{ row.comments.length }
											</td>
										</>
									)}

									<td className="p-4 whitespace-nowrap flex justify-end">
										<button
											type="button"
											data-clipboard-text={`<script src="${window.location.origin}/script/index.js?id=${row.id}" type="module" crossorigin charset="utf-8"></script>`}
											id="copyScriptTrigger"
											className="text-indigo-500 px-3 py-2 bg-indigo-100 rounded hover:bg-indigo-200 hover:text-indigo-800 flex items-center"
										>
											<ClipboardCopyIcon className="block h-5 w-5 mr-1" aria-hidden="true" />
											<span className="text-sm">Copy script</span>
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default ProjectsTable;
