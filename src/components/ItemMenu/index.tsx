import Link from "next/link";

const ItemMenu = ({ href, label }: { label: string; href: string }) => {
	return (
		<li>
			<Link href={href} className="text-white font-bold text-sm hover:text-gray-300 transition duration-100 cursor-pointer">
				{label}
			</Link>
		</li>
	);
};

export default ItemMenu;
