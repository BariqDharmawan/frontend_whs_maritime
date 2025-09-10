"use client";

import { Fragment } from "react";
import PlainLinkIndent from "../PlainLinkIndent";
import Str from "@supercharge/strings";
import { NestedMenuItem } from "@/types";
import { usePathname } from "next/navigation";

const SidebarLinks = ({ links }: { links: NestedMenuItem[] }) => {
	const pathname = usePathname();
	console.log("urlPage", pathname);

	return (
		<aside className="flex flex-col gap-3 w-3/12">
			{links.map(eachService => {
				if (eachService.menus && eachService.menus.length > 0) {
					return (
						<Fragment key={Str(eachService.label).trim().slug().lower().get()}>
							<PlainLinkIndent
								className="cursor-default"
								key={Str(eachService.label).trim().slug().lower().get()}
								label={eachService.label}
							/>

							<div className="flex flex-col ps-4 gap-3">
								{eachService.menus.map(eachDropdown => (
									<PlainLinkIndent
										href={eachDropdown.href}
										key={Str(eachDropdown.label).trim().slug().lower().get()}
										label={eachDropdown.label}
										isActive={pathname === eachDropdown.href}
									/>
								))}
							</div>
						</Fragment>
					);
				}

				return (
					<PlainLinkIndent
						href={eachService.href}
						key={Str(eachService.label).trim().slug().lower().get()}
						label={eachService.label}
						isActive={pathname === eachService.href}
					/>
				);
			})}
		</aside>
	);
};

export default SidebarLinks;
