import { FunctionComponent } from 'react';
import Link from 'next/link';
import cn from "classnames";

type VersionProps = {
	version: string,
}

const Version: FunctionComponent<VersionProps> = ({ version }) => {
	return (
		<div className="self-center my-6 px-2 py-1 inline-block rounded border-2 border-gray-200 text-gray-300">
			<span className="font-brand">
				speedback
			</span>
			{" "}
			{version}
	  	</div>
	)
}

export default Version;
