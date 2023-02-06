"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import cn from "classnames";
import { Disclosure } from '@headlessui/react';
import {
	MenuIcon,
	XIcon,
} from '@heroicons/react/outline';
import throttle from "lodash/throttle";

import { Logo, Navigation } from "./index";

const SCROLL_FROM_TOP = 20;

const Header = () => {
	const [altHeader, setAltHeader] = useState(false);

	const handleScroll = () => {
		if (document.body.scrollTop > SCROLL_FROM_TOP || document.documentElement.scrollTop > SCROLL_FROM_TOP) {
			setAltHeader(true);
		} else {
			setAltHeader(false);
		}
	}

	const throttledScroll = throttle(handleScroll, 200, {
		leading: true,
		trailing: true
	});

	useEffect(() => {
		window.addEventListener("scroll", throttledScroll, false);

		return () => {
			window.removeEventListener("scroll", throttledScroll, false);
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<Disclosure
			as="header"
			className={cn("sticky top-0 z-50 transition", {
				'bg-white shadow md:shadow-none md:bg-gray-50': !altHeader,
				'bg-white shadow': altHeader
			})}
		>
			{({ open }) => (
				<>
					<div className="max-w-screen-xl mx-auto container-spacing">
						<div className="flex items-center justify-between h-auto py-4 lg:py-0 lg:h-24">
							<div className="flex items-center space-x-8 lg:space-x-16">
								<Logo url="/" />

								<Navigation className="hidden md:block" />
							</div>

							<div className="hidden md:block">
								<div className="flex space-x-3">
									<Link
										href="/login"
										className="px-4 py-2 border border-gray-300 rounded shadow text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>
										Login
									</Link>

									<Link
										href="/login"
										className="px-4 py-2 border border-transparent rounded shadow text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>
										Try it for free
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

					<Disclosure.Panel className="pt-3 pb-6 shadow-lg md:hidden container-spacing">
						<Navigation />

						<div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-3 mt-8">
							<Link
								href="/login"
								className="sm:w-1/2 text-center px-4 py-2 border border-gray-300 rounded shadow text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Login
							</Link>

							<Link
								href="/login"
								className="sm:w-1/2 text-center px-4 py-2 border border-transparent rounded shadow text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Try it for free
							</Link>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}

export default Header;
