import Link from 'next/link';
import cn from "classnames";
import { motion, AnimateSharedLayout } from "framer-motion";
import { FunctionComponent, useState } from 'react';

const navigation = [
	{ name: 'How does it work?', anchor: '#feature' },
	{ name: 'For whom', anchor: '#for-whom' },
	{ name: 'Pricing', anchor: '#pricing' },
]

type NavigationProps = {
	className?: string,
}

const Navigation: FunctionComponent<NavigationProps> = ({ className }) => {
	const [activeAnchor, setActiveAnchor] = useState<string | null>(null);

	return (
		<div className={cn(className)}>
			<AnimateSharedLayout>
				<nav
					className="hidden md:flex ml-16 items-baseline space-x-4"
				>
					{navigation.map((item) => (
						<Link
							key={item.anchor}
							href={item.anchor}
						>
							<a
								className={cn('px-3 py-2 text-lg rounded font-brand relative')}
								onMouseEnter={() => setActiveAnchor(item.anchor)}
							>
								{activeAnchor === item.anchor && (
									<motion.div
										transition={{
											duration: 0.2
										}}
										animate={{ opacity: 1 }}
										layoutId="nav-background"
										className={cn("absolute inset-0 opacity-0 rounded", {
											"bg-gray-200": window.location.hash !== item.anchor,
											"bg-indigo-100": window.location.hash === item.anchor,
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
