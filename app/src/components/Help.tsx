import { FunctionComponent } from 'react';

const Help: FunctionComponent = () => {
	return (
		<a
			href="mailto:wout.workspace@gmail.com"
			target="_blank"
			rel="noopener noreferrer"
			className="fixed z-10 right-0 bottom-6 shadow text-sm rounded-l py-3 px-4 bg-white border underline text-indigo-500"
		>
			Need help?
		</a>
	)
}

export default Help;
