export interface IMenus {
	label: string;
	href: string;
	menus?: {
		label: string;
		href: string;
	}[];
}

export interface IDropdownMenu {
	isNestedOnLeft?: boolean;
	menus: IMenus[];
	label: string;
	className?: string;
}
