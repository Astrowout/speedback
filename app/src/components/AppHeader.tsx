import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from "classnames";
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import { Logo, User } from "./index";

const navigation = [
	{ name: 'Projects', href: '/app/projects' },
]

const AppHeader = () => {
	const router = useRouter();

	return (
		<Disclosure as="nav" className="bg-gray-800 sticky top-0 z-50">
			{({ open }) => (
				<>
					<div className="container-spacing">
						<div className="flex items-center justify-between h-16">
							<div className="flex items-center">
								<Logo dark />

								<div className="hidden md:block">
									<div className="ml-12 flex items-baseline space-x-4">
										{navigation.map((item) => (
											<Link
												key={item.name}
												href={item.href}
												className={cn('px-3 py-2 text-lg rounded font-brand', {
													'bg-gray-900 text-white': router.pathname === item.href,
													'text-gray-400 hover:bg-gray-700 hover:text-white': router.pathname !== item.href,
												})}
												aria-current={router.pathname === item.href ? 'page' : undefined}
											>
												{item.name}
											</Link>
										))}
									</div>
								</div>
							</div>

							<User />

							<div className="-mr-2 flex md:hidden">
								{/* Mobile menu button */}
								<Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
						</div>
					</div>

					<Disclosure.Panel>
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
							{navigation.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className={cn('block px-3 py-2 rounded font-brand', {
										'bg-gray-900 text-white': router.pathname === item.href,
										'text-gray-300 hover:bg-gray-700 hover:text-white': router.pathname !== item.href,
									})}
									aria-current={router.pathname === item.href ? 'page' : undefined}
								>
									{item.name}
								</Link>
							))}
						</div>

						<User />
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}

export default AppHeader;
