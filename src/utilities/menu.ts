interface MenuItem {
	id?: string;
	label: string;
	href: string;
	parent_id?: string;
}

interface NestedMenuItem {
	id?: string;
	label: string;
	href: string;
	menus?: NestedMenuItem[];
}

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
