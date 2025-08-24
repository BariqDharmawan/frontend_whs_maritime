"use client";

import Link from "next/link";
import { useState } from "react";
import { IDropdownMenu } from "./type";
import clsx from "clsx";
import IconNestedDropdown from "../Icon/NestedDropdown";

const CLASSNAME_MENU = "block pr-4 pl-7 py-2 text-white cursor-pointer";

const DropdownMenu = ({ label, menus, isNestedOnLeft }: IDropdownMenu) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [nestedOpen, setNestedOpen] = useState(false);
	console.log("nestedOpen", nestedOpen);

	return (
		<>
			<button
				onClick={() => setDropdownOpen(!dropdownOpen)}
				className="text-white hover:text-gray-300 transition duration-100 cursor-pointer font-medium focus:outline-none flex items-center"
			>
				{label}
				<svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
				</svg>
			</button>
			{dropdownOpen && (
				<div className="absolute right-0 mt-2 w-40 bg-gray-900 border rounded-sm z-10">
					{menus.map(menu =>
						menu.menus && menu.menus.length > 0 ? (
							<div className="relative" key={menu.label}>
								<button
									type="button"
									className={`${CLASSNAME_MENU} flex items-center`}
									onMouseEnter={() => {
										setNestedOpen(true);
									}}
									onMouseLeave={() => {
										setNestedOpen(false);
									}}
								>
									{isNestedOnLeft && <IconNestedDropdown className="absolute left-0 text-gray-400" />}
									<span>{menu.label}</span>
									{!isNestedOnLeft && <IconNestedDropdown />}
								</button>
								<div
									className={clsx(
										"flex transition duration-150 flex-col absolute top-0 right-1 -translate-x-full bg-gray-900 w-full rounded-sm",
										{
											"h-0 overflow-hidden": !nestedOpen,
										},
									)}
								>
									{menu.menus.map(nestedMenu => (
										<Link key={nestedMenu.label} href={nestedMenu.href} className={CLASSNAME_MENU}>
											{nestedMenu.label}
										</Link>
									))}
								</div>
							</div>
						) : (
							<Link key={menu.label} href={menu.href} className={CLASSNAME_MENU}>
								{menu.label}
							</Link>
						),
					)}
				</div>
			)}
		</>
	);
};

export default DropdownMenu;
