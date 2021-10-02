import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from "classnames";
import { motion, AnimateSharedLayout } from "framer-motion";
import { FunctionComponent, useState } from 'react';

const navigation = [
	{ name: 'How does it work?', href: '/feature' },
	{ name: 'For whom', href: '/for-whom' },
	{ name: 'Pricing', href: '/pricing' },
]

type NavigationProps = {
	className?: string,
}

const Navigation: FunctionComponent<NavigationProps> = ({ className }) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const router = useRouter();

	return (
		<div className={cn(className)}>
			<AnimateSharedLayout>
				<nav
					className="hidden md:flex ml-16 items-baseline space-x-4"
					onMouseLeave={() => setActiveIndex(null)}
				>
					{navigation.map((item, i) => (
						<Link key={item.name} href={item.href}>
							<a
								className={cn('px-3 py-2 text-lg rounded font-brand relative', {
									'bg-gray-100 text-black': router.pathname === item.href,
								})}
								onMouseEnter={() => setActiveIndex(i)}
							>
								{activeIndex === i && (
									<motion.div
										transition={{
											duration: 0.2
										}}
										animate={{ opacity: 1 }}
										layoutId="nav-background"
										className="absolute inset-0 opacity-0 bg-gray-200 rounded"
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
