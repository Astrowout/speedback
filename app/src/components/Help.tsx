import { FunctionComponent } from 'react';

const Help: FunctionComponent = () => {
	return (
		<a
			href="mailto:wout.workspace@gmail.com"
			target="_blank"
			rel="noopener noreferrer"
			className="fixed z-50 right-0 bottom-8 text-sm rounded-l py-3 px-4 bg-indigo-500 text-white"
		>
			Need help?
		</a>
	)
}

export default Help;
