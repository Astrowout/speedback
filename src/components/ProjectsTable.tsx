import { ClipboardCopyIcon } from "@heroicons/react/outline";
import { FunctionComponent } from "react";

type ProjectsTableProps = {
	rows?: any[],
}

const ProjectsTable: FunctionComponent<ProjectsTableProps> = ({ rows }) => {
	return (
		<div
			className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"
		>
			<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
				<div className="overflow-hidden border border-gray-200 rounded">
					<table className="min-w-full divide-y divide-gray-200">
						<thead className="bg-gray-100">
							<tr>
								<th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Name
								</th>

								<th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									URL
								</th>

								<th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Description
								</th>

								<th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Comment count
								</th>

								<th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Status
								</th>

								<th scope="col" className="px-4 py-3">
									<span className="sr-only">Copy script</span>
								</th>
							</tr>
						</thead>

						<tbody className="bg-white divide-y divide-gray-200">
							{rows?.map(row => (
								<tr
									key={row.id}
								>
									<td className="p-4 whitespace-nowrap">
										<strong className="text-sm">
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

									<td className="p-4 whitespace-nowrap text-sm">
										{ row.description }
									</td>

									<td className="p-4 whitespace-nowrap">
										{ row.comments.length }
									</td>

									<td className="p-4 whitespace-nowrap text-sm">
										{ row.id }
									</td>

									<td className="p-4 whitespace-nowrap flex justify-end">
										<button
											type="button"
											className="text-indigo-600 px-3 py-2 bg-indigo-50 rounded hover:bg-indigo-100 hover:text-indigo-900 flex items-center"
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
