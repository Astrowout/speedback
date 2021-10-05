import { FunctionComponent } from 'react';
import cn from "classnames";
import { ReplyIcon } from '@heroicons/react/outline';

type SocialsProps = {
	className?: string;
	instaLabel?: string;
}

const Socials: FunctionComponent<SocialsProps> = ({ className, instaLabel }) => {
	return (
		<div className={cn(className, "flex space-x-8")}>
			<div>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://instagram/the__asstronaut"
					className="text-indigo-500 hover:text-gray-900"
				>
					<span className="sr-only">Instagram</span>

					<svg className="w-8 h-8" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path d="M9 2.2C11.2 2.2 11.5 2.2 12.4 2.2C13.2 2.2 13.6 2.4 13.9 2.5C14.3 2.7 14.6 2.8 14.9 3.1C15.2 3.4 15.4 3.7 15.5 4.1C15.6 4.4 15.7 4.8 15.8 5.6C15.8 6.5 15.8 6.7 15.8 9C15.8 11.3 15.8 11.5 15.8 12.4C15.8 13.2 15.6 13.6 15.5 13.9C15.3 14.3 15.2 14.6 14.9 14.9C14.6 15.2 14.3 15.4 13.9 15.5C13.6 15.6 13.2 15.7 12.4 15.8C11.5 15.8 11.3 15.8 9 15.8C6.7 15.8 6.5 15.8 5.6 15.8C4.8 15.8 4.4 15.6 4.1 15.5C3.7 15.3 3.4 15.2 3.1 14.9C2.8 14.6 2.6 14.3 2.5 13.9C2.4 13.6 2.3 13.2 2.2 12.4C2.2 11.5 2.2 11.3 2.2 9C2.2 6.7 2.2 6.5 2.2 5.6C2.2 4.8 2.4 4.4 2.5 4.1C2.7 3.7 2.8 3.4 3.1 3.1C3.4 2.8 3.7 2.6 4.1 2.5C4.4 2.4 4.8 2.3 5.6 2.2C6.5 2.2 6.8 2.2 9 2.2ZM9 0.700001C6.7 0.700001 6.5 0.700001 5.6 0.700001C4.7 0.700001 4.1 0.900001 3.6 1.1C3.1 1.3 2.6 1.6 2.1 2.1C1.6 2.6 1.4 3 1.1 3.6C0.899998 4.1 0.799997 4.7 0.699997 5.6C0.699997 6.5 0.699997 6.8 0.699997 9C0.699997 11.3 0.699997 11.5 0.699997 12.4C0.699997 13.3 0.899998 13.9 1.1 14.4C1.3 14.9 1.6 15.4 2.1 15.9C2.6 16.4 3 16.6 3.6 16.9C4.1 17.1 4.7 17.2 5.6 17.3C6.5 17.3 6.8 17.3 9 17.3C11.2 17.3 11.5 17.3 12.4 17.3C13.3 17.3 13.9 17.1 14.4 16.9C14.9 16.7 15.4 16.4 15.9 15.9C16.4 15.4 16.6 15 16.9 14.4C17.1 13.9 17.2 13.3 17.3 12.4C17.3 11.5 17.3 11.2 17.3 9C17.3 6.8 17.3 6.5 17.3 5.6C17.3 4.7 17.1 4.1 16.9 3.6C16.7 3.1 16.4 2.6 15.9 2.1C15.4 1.6 15 1.4 14.4 1.1C13.9 0.900001 13.3 0.800001 12.4 0.700001C11.5 0.700001 11.3 0.700001 9 0.700001Z" />
						<path d="M9 4.7C6.6 4.7 4.7 6.6 4.7 9C4.7 11.4 6.6 13.3 9 13.3C11.4 13.3 13.3 11.4 13.3 9C13.3 6.6 11.4 4.7 9 4.7ZM9 11.8C7.5 11.8 6.2 10.6 6.2 9C6.2 7.5 7.4 6.2 9 6.2C10.5 6.2 11.8 7.4 11.8 9C11.8 10.5 10.5 11.8 9 11.8Z" />
						<path d="M13.4 5.6C13.9523 5.6 14.4 5.15229 14.4 4.6C14.4 4.04772 13.9523 3.6 13.4 3.6C12.8477 3.6 12.4 4.04772 12.4 4.6C12.4 5.15229 12.8477 5.6 13.4 5.6Z" />
					</svg>
				</a>

				{instaLabel && (
					<div className="text-indigo-300 ml-1 mt-2 flex space-x-1.5">
						<ReplyIcon className="w-5 h-5 transform rotate-90 scale-y-[-1]" aria-hidden="true" />
						<span className="font-brand mt-1 inline-block">{instaLabel}</span>
					</div>
				)}
			</div>
		</div>
	)
}

export default Socials;
