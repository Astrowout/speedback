import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from "classnames";
import { motion, AnimateSharedLayout } from "framer-motion";
import { FunctionComponent, useEffect, useState } from 'react';

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
	const router = useRouter();

	useEffect(() => {
		if (!window.location.hash) {
			setActiveAnchor(null);
		}
	}, [router]);

	if (typeof window === 'undefined') {
		return null;
	}

	return (
		<div className={cn(className)}>
			<AnimateSharedLayout>
				<nav
					className="hidden md:flex ml-16 items-baseline space-x-4"
					onMouseLeave={() => setActiveAnchor(window.location.hash)}
				>
					{navigation.map((item) => (
						<Link
							key={item.anchor}
							href={item.anchor}
						>
							<a
								className={cn('px-3 py-1.5 transition-colors text-lg rounded font-brand relative', {
									"text-gray-500 hover:text-gray-900": window.location.hash !== item.anchor,
									"text-gray-900": window.location.hash === item.anchor,
								})}
								onMouseEnter={() => setActiveAnchor(item.anchor)}
							>
								{activeAnchor === item.anchor && (
									<motion.div
										transition={{
											duration: 0.2
										}}
										animate={{ opacity: 1 }}
										layoutId="nav-background"
										className={cn("absolute transition-colors inset-0 opacity-0 rounded", {
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
