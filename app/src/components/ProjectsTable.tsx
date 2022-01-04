import { FunctionComponent, MouseEvent, useEffect } from "react";
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

		Router.push(`/app/projects/${id}`);
	}

	return (
		<div
			className={cn(className, "-my-2 relative overflow-x-auto sm:-mx-6 lg:-mx-8")}
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

								<th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Comment count
								</th>

								{!compact && (
									<>
										<th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Description
										</th>

										<th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											ID
										</th>
									</>
								)}
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
											{row.name}
										</strong>
									</td>

									<td className="p-4 whitespace-nowrap">
										<a
											href={row.url}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm text-blue-500 underline"
										>
											{row.url}
										</a>
									</td>

									<td className="p-4 whitespace-nowrap font-bold">
										{row.comments.length}
									</td>

									{!compact && (
										<>
											<td className="p-4 whitespace-nowrap text-sm">
												{row.description}
											</td>

											<td className="p-4 whitespace-nowrap text-sm">
												{row.id}
											</td>
										</>
									)}
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
