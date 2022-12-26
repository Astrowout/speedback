import { FunctionComponent } from 'react';
import cn from "classnames";

type VersionProps = {
	className?: string;
	version?: string;
}

const Version: FunctionComponent<VersionProps> = ({
	className = "",
	version = "beta",
}) => {
	return (
		<div className={cn(className, "self-center px-2 py-1 inline-block rounded border-2 border-gray-200 text-gray-300")}>
			<span className="font-brand">
				speedback
			</span>

			{version && (
				<span>
					{" "}{version}
				</span>
			)}
	  	</div>
	)
}

export default Version;
