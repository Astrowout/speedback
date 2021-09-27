import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from "classnames";
import { Disclosure } from '@headlessui/react';
import {
	BellIcon,
	MenuIcon,
	XIcon,
} from '@heroicons/react/outline';

import { Logo } from "./index";

const user = {
	email: 'tom@example.com',
}

const navigation = [
	{ name: 'Features', href: '/features' },
	{ name: 'Pricing', href: '/pricing' },
	{ name: 'Integrations', href: '/integrations' },
]

const Header = () => {
	const router = useRouter();

	return (
		<Disclosure as="nav" className="bg-white shadow">
		  {({ open }) => (
			<>
			  <div className="max-w-screen-xl mx-auto container-spacing">
				<div className="flex items-center justify-between h-24">
				  <div className="flex items-center">
					<Logo url="/home" />

					<div className="hidden md:block">
					  <div className="ml-16 flex items-baseline space-x-4">
						{navigation.map((item) => (
						  <Link key={item.name} href={item.href}>
							  <a
								className={cn('px-3 py-2 rounded font-brand', {
									'bg-gray-100 text-black': router.pathname === item.href,
									'text-gray-700 hover:bg-gray-200 hover:text-black': router.pathname !== item.href,
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
				  <div className="-my-1.5 -mx-2 flex flex-wrap">
					<Link
						href="/login"
					>
						<a className="my-1.5 mx-2 inline-flex items-center px-4 py-2 border border-gray-300 rounded shadow-sm text-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Login
						</a>
					</Link>

					<Link
						href="/login"
					>
						<a className="my-1.5 mx-2 inline-flex items-center px-4 py-2 border border-transparent rounded shadow-sm text-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Start free trial
						</a>
					</Link>
			</div>
				  </div>
				  <div className="-mr-2 flex md:hidden">
					{/* Mobile menu button */}
					<Disclosure.Button className="bg-gray-200 inline-flex items-center justify-center p-2 rounded text-gray-600 hover:text-black hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-white">
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
							className={cn('block px-3 py-2 rounded font-brand', {
								'bg-gray-100 text-black': router.pathname === item.href,
								'text-gray-700 hover:bg-gray-200 hover:text-black': router.pathname !== item.href,
						  })}
						  aria-current={router.pathname === item.href ? 'page' : undefined}
						>
						  {item.name}
						</a>
					</Link>
				  ))}
				</div>
				<div className="pt-4 pb-3 border-t border-gray-700">
				  <div className="flex items-center px-5">
					<div className="ml-3">
					  <div className="text-gray-400">{user.email}</div>
					</div>

					<button
					  type="button"
					  className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
					>
					  <span className="sr-only">View notifications</span>
					  <BellIcon className="h-6 w-6" aria-hidden="true" />
					</button>
				  </div>
				</div>
			  </Disclosure.Panel>
			</>
		  )}
		</Disclosure>
	)
}

export default Header;
