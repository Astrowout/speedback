import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import cn from "classnames";
import { Switch } from "@headlessui/react";

type ToggleProps = {
	enabled: boolean;
	setEnabled: Dispatch<SetStateAction<boolean>>;
	label: string;
	className?: string;
}

const Toggle: FunctionComponent<ToggleProps> = ({ enabled, setEnabled, className, label }) => {
	return (
		<Switch.Group>
			<div className={cn(className, "flex items-center")}>
				<Switch.Label className="mr-4 text-indigo-500 font-bold select-none">
					{label}
				</Switch.Label>

				<Switch
					checked={enabled}
					onChange={setEnabled}
					className={cn("relative flex items-center w-11 h-7 shadow-inner rounded-full transition-colors focus:outline-none focus:ring focus:ring-indigo-300", {
						"bg-indigo-500": enabled,
						"bg-gray-200": !enabled,
					})}
				>
					<span
						className={cn("inline-block w-5 h-5 transition-transform transform shadow-lg bg-white rounded-full", {
							"translate-x-5": enabled,
							"translate-x-1": !enabled,
						})}
					/>
				</Switch>
			</div>
    	</Switch.Group>
	)
}

export default Toggle;
