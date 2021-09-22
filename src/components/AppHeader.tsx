import React, { Fragment, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from "classnames";
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { UserCircleIcon } from '@heroicons/react/solid';

import { Logo } from "./index";
import { AuthContext } from '../context';

const navigation = [
{ name: 'Dashboard', href: '/' },
{ name: 'Projects', href: '/projects' },
]

const AppHeader = () => {
	const { user, methods } = useContext(AuthContext);
	const router = useRouter();

	return (
		<Disclosure as="nav" className="bg-gray-800">
		  {({ open }) => (
			<>
			  <div className="container-spacing">
				<div className="flex items-center justify-between h-16">
				  <div className="flex items-center">
					<Logo dark />

					<div className="hidden md:block">
					  <div className="ml-16 flex items-baseline space-x-4">
						{navigation.map((item) => (
						  <Link key={item.name} href={item.href}>
							  <a
								className={cn('px-3 py-2 rounded-md font-brand', {
									'bg-gray-900 text-white': router.pathname === item.href,
									'text-gray-300 hover:bg-gray-700 hover:text-white': router.pathname !== item.href,
								})}
								aria-current={router.pathname === item.href ? 'page' : undefined}
							  >
								{item.name}
							  </a>
						  </Link>
						))}
					  </div>
					</div>
				  </div>
				  <div className="hidden md:block">
					<div className="ml-4 flex items-center md:ml-6">
									{user && (


					  <Menu as="div" className="ml-3 relative -mr-2">
						<Menu.Button className="max-w-xs flex items-center px-3 py-1 rounded-full focus:bg-gray-900 focus:outline-none">
							<span className="sr-only">Open user menu</span>
							<UserCircleIcon className="h-10 w-10 text-gray-400 -ml-1" />
											<span className="ml-2 text-sm font-medium leading-none text-gray-400">
												{user.email}
											</span>
						</Menu.Button>

						<Transition
						  as={Fragment}
						  enter="transition ease-out duration-100"
						  enterFrom="transform opacity-0 scale-95"
						  enterTo="transform opacity-100 scale-100"
						  leave="transition ease-in duration-75"
						  leaveFrom="transform opacity-100 scale-100"
						  leaveTo="transform opacity-0 scale-95"
						>
						  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
							  <Menu.Item>
								{({ active }) => (
									<button
										type="button"
										onClick={methods.logout}
										className={cn('block w-full text-left px-4 py-2 text-sm text-gray-700', {
											'bg-gray-100': active,
										})}
									  >
										Sign out
									  </button>
								)}
							  </Menu.Item>
						  </Menu.Items>
						</Transition>
										</Menu>
										)}
					</div>
				  </div>
				  <div className="-mr-2 flex md:hidden">
					{/* Mobile menu button */}
					<Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
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

			  <Disclosure.Panel className="md:hidden">
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
				  {navigation.map((item) => (
					<Link key={item.name} href={item.href}>
						<a
							className={cn('block px-3 py-2 rounded-md font-brand', {
								'bg-gray-900 text-white': router.pathname === item.href,
								'text-gray-300 hover:bg-gray-700 hover:text-white': router.pathname !== item.href,
						  })}
						  aria-current={router.pathname === item.href ? 'page' : undefined}
						>
						  {item.name}
						</a>
					</Link>
				  ))}
				</div>
						<div className="pt-4 pb-3 border-t border-gray-700">
							{user && (
								<div className="flex items-center px-5">
					<UserCircleIcon className="h-10 w-10 text-gray-400" />
					  <span className="ml-3 text-sm font-medium leading-none text-gray-400">{user.email}</span>
				  </div>
					  )}
				  <div className="mt-3 px-2 space-y-1">
									<button
																type="button"
																onClick={methods.logout}
										className={cn('block px-4 py-2 text-sm text-gray-700')}
									  >
										Sign out
									  </button>
				  </div>
				</div>
			  </Disclosure.Panel>
			</>
		  )}
		</Disclosure>
	)
}

export default AppHeader;