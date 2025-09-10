import { Icon } from "@iconify-icon/react";
import clsx from "clsx";
import Link, { LinkProps } from "next/link";

const CLASS_NAME_LINK = "flex items-center gap-1";

const PlainLinkIndent = ({
	href,
	isActive,
	label,
	className = "",
	classNameActive = "text-red-500 font-semibold",
	classNameNotActive = "text-secondary",
}: {
	className?: HTMLElement["className"];
	classNameActive?: string;
	classNameNotActive?: string;
	label: string;
	isActive?: boolean;
	href?: LinkProps["href"];
}) => {
	const linkTextWithIcon = (
		<>
			<Icon className="text-gray-400" icon="mingcute:right-line" width={16} height={16} />
			<span
				className={clsx({
					[classNameActive]: isActive,
					[classNameNotActive]: !isActive,
				})}
			>
				{label}
			</span>
		</>
	);

	return href ? (
		<Link className={`${CLASS_NAME_LINK} ${className}`} href={href}>
			{linkTextWithIcon}
		</Link>
	) : (
		<div className={`${CLASS_NAME_LINK} ${className}`}>{linkTextWithIcon}</div>
	);
};

export default PlainLinkIndent;
