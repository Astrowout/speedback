"use client";

import React, { FunctionComponent, useContext } from 'react';
import Link from 'next/link';
import cn from "classnames";
import { Menu } from '@headlessui/react';
import { UserCircleIcon } from '@heroicons/react/solid';
import { CogIcon, CreditCardIcon, LogoutIcon } from '@heroicons/react/outline';

import { AuthContext } from '../context';
import { PricingPlan } from '../enums';

type UserProps = {
	className?: string,
}

const User: FunctionComponent<UserProps> = ({ className }) => {
	const { user } = useContext(AuthContext);

	return (
		user && (
			<>
				<Menu as="div" className={cn(className, "hidden md:block ml-3 relative -mr-2")}>
					{({ open }) => (
						<>
							<Menu.Button className="max-w-xs flex items-center px-2 py-1 rounded text-gray-400 focus:bg-gray-900 focus:outline-none">
								<span className="sr-only">Open user menu</span>

								<UserCircleIcon className="h-10 w-10 -ml-1" />

								<span className="ml-2 text-sm">
									{user.email}
								</span>
							</Menu.Button>

							<Menu.Items
								static
								className={cn("origin-top-right z-50 transition overflow-hidden divide-y divide-indigo-50 absolute right-0 w-64 rounded shadow-lg bg-white focus:outline-none", {
									"opacity-0 scale-90 pointer-events-none": !open,
									"opacity-100 scale-100 pointer-events-auto": open,
								})}
							>
								<Menu.Item disabled>
									{({ active }) => (
										<Link
											href="/profile/settings"
											className={cn('flex items-center pointer-events-none hover:bg-indigo-50 w-full p-4 text-sm text-gray-400', {
												'bg-indigo-50': active,
											})}
										>
											<CogIcon className="block w-5 h-5 mr-2" aria-hidden="true" />
											<span>
												Settings (coming soon)
											</span>
										</Link>
									)}
								</Menu.Item>

								<Menu.Item>
									{({ active }) => (
										<Link
											href="/logout"
											className={cn('flex items-center w-full text-left hover:bg-indigo-50 p-4 text-sm', {
												'bg-indigo-50': active,
											})}
										>
											<LogoutIcon className="block w-5 h-5 mr-2" aria-hidden="true" />
											<span>
												Sign out
											</span>
										</Link>
									)}
								</Menu.Item>

								<Menu.Item disabled>
									<div
										className={'flex bg-indigo-100 items-center justify-center w-full pointer-events-none px-4 py-2 text-sm text-indigo-400'}
									>
										<CreditCardIcon className="block w-5 h-5 mr-2" aria-hidden="true" />
										<strong className="capitalize">{user.pricingPlan || PricingPlan.free}</strong>&nbsp;plan
									</div>
								</Menu.Item>
							</Menu.Items>
						</>
					)}
				</Menu>

				<div className={cn(className, "md:hidden pt-4 pb-3 border-t border-gray-700")}>
					<div className="flex items-center px-5">
						<UserCircleIcon className="h-10 w-10 text-gray-400" />
						<span className="ml-3 text-sm font-medium leading-none text-gray-400">{user.email}</span>
					</div>

					<div className="mt-3 px-2">
						<Link
							href="/logout"
							className={cn('flex items-center w-full text-left px-4 py-2 text-sm text-gray-300')}
						>
							<LogoutIcon className="block w-5 h-5 mr-2" aria-hidden="true" />

							<span>
								Sign out
							</span>
						</Link>
					</div>
				</div>
			</>
		)
	)
}

export default User;
