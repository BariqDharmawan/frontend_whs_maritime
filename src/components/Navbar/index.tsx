import Image from "next/image";
import DropdownMenu from "../DropdownMenu";
import Link from "next/link";
import { INavbar } from "./type";
import { getServiceCategory, getServiceContent } from "@/app/actions";
import Str from "@supercharge/strings";
import { createNestedMenus } from "@/utilities/menu";
import ItemMenu from "../ItemMenu";

const Navbar = async ({ logo }: INavbar) => {
	const [serviceCategories, serviceContent] = await Promise.all([getServiceCategory(), getServiceContent()]);

	const ourServiceMenuFlat = [
		...serviceCategories!.map(eachCategory => ({
			id: eachCategory.documentId,
			label: eachCategory.category.trim(),
			href: Str(eachCategory.category).slug().get().replace(/^-/, ""),
		})),
		...serviceContent.map(eachContent => ({
			label: eachContent.title.trim(),
			href: Str(eachContent.title).slug().get().replaceAll("(", "").replaceAll(")", "").replace(/^-/, ""),
			parent_id: eachContent.service_category?.documentId,
		})),
	];

	const ourServiceMenuDropdown = createNestedMenus(ourServiceMenuFlat).map(eachMenu => ({
		label: eachMenu.label,
		href: eachMenu.href,
		menus: eachMenu.menus ?? [],
	}));

	return (
		<nav className="bg-primary shadow-md">
			<div className="max-w-5xl mx-auto p-3 flex items-center justify-between h-20">
				<Link className="flex-shrink-0 relative h-full w-64" href="/">
					<Image src={`${process.env.STRAPI_URL}${logo}`} alt="" fill />
				</Link>

				<ul className="flex items-center space-x-6">
					<ItemMenu href="/" label="Home" />
					<li className="relative">
						<DropdownMenu menus={ourServiceMenuDropdown} isNestedOnLeft label="Our Services" />
					</li>
					<ItemMenu href="/" label="Gallery" />
					<ItemMenu href="/" label="Contact Us" />
					<ItemMenu href="https://exdoma.whsmaritime.com/exdoma/login" label="Exdoma" />
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
