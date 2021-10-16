import cn from "classnames";
import Link from 'next/link';
import { motion, AnimateSharedLayout } from "framer-motion";
import { FunctionComponent, useEffect, useState } from 'react';

import { useScrollSpy } from '../hooks';

const navigation = [
	{
		name: 'How does it work?',
		url: '/home',
		anchor: '#features'
	},
	{
		name: 'For whom',
		url: '/home',
		anchor: '#for-whom'
	},
	{
		name: 'Pricing',
		url: '/home',
		anchor: '#pricing'
	},
]

type NavigationProps = {
	className?: string,
}

const Navigation: FunctionComponent<NavigationProps> = ({ className }) => {
	const [activeAnchor, setActiveAnchor] = useState<string | null>(null);
	const activeSectionId = useScrollSpy(navigation.map((item) => item.anchor));

	useEffect(() => {
		if (activeSectionId) {
			setActiveAnchor(activeSectionId);
		}
	}, [activeSectionId]); // eslint-disable-line react-hooks/exhaustive-deps

	if (typeof window === 'undefined') {
		return null;
	}

	return (
		<div className={cn(className)}>
			<AnimateSharedLayout>
				<nav
					className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 lg:space-x-4"
				>
					{navigation.map((item) => (
						<Link
							key={item.anchor}
							href={item.url + item.anchor}
						>
							<a
								className={cn('px-3 py-1.5 transition-colors text-lg font-brand relative', {
									"text-gray-900 md:text-gray-500 hover:text-gray-900": activeAnchor !== item.anchor,
									"text-gray-900": activeAnchor === item.anchor,
								})}
							>
								{activeAnchor === item.anchor && (
									<motion.div
										transition={{
											duration: 0.2
										}}
										animate={{ opacity: 1 }}
										layoutId="nav-background"
										className={cn("absolute transition-colors inset-0 opacity-0 rounded", {
											"bg-gray-200": activeAnchor !== item.anchor,
											"bg-indigo-100": activeAnchor === item.anchor,
										})}
									/>
								)}
								<span className="z-10 relative">{item.name}</span>
							</a>
						</Link>
					))}
				</nav>
			</AnimateSharedLayout>
		</div>
	)
}

export default Navigation;
