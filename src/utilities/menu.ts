import { IDataServiceCategory, IDataServiceContent, MenuItem, NestedMenuItem } from "@/types";
import Str from "@supercharge/strings";

export const listMenuApp = ({ dropdownOurService }: { dropdownOurService: Omit<NestedMenuItem, "id">[] }) => [
	{
		label: "Home",
		href: "/",
		children: null,
	},
	{
		label: "Our Services",
		href: null,
		children: dropdownOurService,
	},
	{
		label: "Gallery",
		href: "/gallery",
		children: null,
	},
	{
		label: "Contact Us",
		href: "/contact-us",
		children: null,
	},
	{
		label: "Exdoma",
		href: "https://exdoma.whsmaritime.com/exdoma/login",
		children: null,
	},
];

export function createNestedMenus(array: MenuItem[]): NestedMenuItem[] {
	// Create a map for quick lookup of parent objects
	const parentMap: { [key: string]: NestedMenuItem } = {};
	const result: NestedMenuItem[] = [];

	// First pass: identify all parent objects and add them to result
	array.forEach((item: MenuItem) => {
		if (!item.parent_id) {
			const parentItem: NestedMenuItem = { ...item };
			if (item.id) {
				parentMap[item.id] = parentItem;
			}
			result.push(parentItem);
		}
	});

	// Second pass: group children under their parents
	array.forEach((item: MenuItem) => {
		if (item.parent_id) {
			const parent = parentMap[item.parent_id];
			if (parent) {
				if (!parent.menus) {
					parent.menus = [];
				}
				parent.menus.push({
					label: item.label,
					href: item.href,
				});
			}
		}
	});

	return result;
}

export const listOurServices = (serviceCategories: IDataServiceCategory[] | null, serviceContent: IDataServiceContent[]) => {
	const ourServiceMenuFlat = [
		...(serviceCategories
			? serviceCategories!.map(eachCategory => ({
					id: eachCategory.documentId,
					label: eachCategory.category.trim(),
					href: Str(eachCategory.category).slug().get().replace(/^-/, ""),
			  }))
			: []),
		...serviceContent.map(eachContent => ({
			label: eachContent.title.trim(),
			href: Str(eachContent.title).slug().get().replaceAll("(", "").replaceAll(")", "").replace(/^-/, ""),
			parent_id: eachContent.service_category?.documentId,
		})),
	];

	return createNestedMenus(ourServiceMenuFlat).map(eachMenu => ({
		label: eachMenu.label,
		href: eachMenu.href,
		menus: eachMenu.menus ?? [],
	}));
};

export const CLASSNAME_ICON_SITEMAP_MENU = "group-hover/sitemap-menu:translate-x-0.5 transition-all duration-100";

export const CLASSNAME_FOOTER_SITEMAP_MENU = "group/sitemap-menu flex items-center hover:font-medium transition-all duration-100";
