import Image from "next/image";
import DropdownMenu from "../DropdownMenu";
import Link from "next/link";
import { INavbar } from "./type";
import { getServiceCategory, getServiceContent } from "@/app/actions";
import { listMenuApp, listOurServices } from "@/utilities/menu";
import ItemMenu from "../ItemMenu";
import Str from "@supercharge/strings";

const Navbar = async ({ logo }: INavbar) => {
	const [serviceCategories, serviceContent] = await Promise.all([getServiceCategory(), getServiceContent()]);
	const ourServiceMenuDropdown = listOurServices(serviceCategories, serviceContent);

	return (
		<nav className="bg-primary shadow-md">
			<div className="max-w-5xl mx-auto p-3 flex items-center justify-between h-20">
				<Link className="flex-shrink-0 relative h-full w-64" href="/">
					<Image src={`${process.env.STRAPI_URL}${logo}`} alt="" fill />
				</Link>

				<ul className="flex items-center space-x-6">
					{listMenuApp({ dropdownOurService: ourServiceMenuDropdown }).map(eachMenu =>
						eachMenu.children && eachMenu.children?.length > 0 ? (
							<li key={Str(eachMenu.label).trim().slug().get()} className="relative">
								<DropdownMenu menus={ourServiceMenuDropdown} isNestedOnLeft className="hover:bg-amber-500" label="Our Services" />
							</li>
						) : (
							<ItemMenu key={Str(eachMenu.label).trim().slug().get()} href={String(eachMenu.href)} label={eachMenu.label} />
						),
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
