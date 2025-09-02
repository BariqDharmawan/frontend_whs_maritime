import { Icon } from "@iconify-icon/react";
import { MouseEventHandler } from "react";

const CloseBtn = ({
	className,
	isHoverRotate = false,
	onClick,
}: {
	onClick: MouseEventHandler<HTMLButtonElement> | undefined;
	isHoverRotate?: boolean;
	className?: string;
}) => {
	return (
		<button className={`text-white block cursor-pointer  group ${className}`} onClick={onClick}>
			<Icon
				icon="si:close-fill"
				width="24"
				height="24"
				className={isHoverRotate ? "group-hover:rotate-180 transition-all duration-300" : ""}
			/>
		</button>
	);
};

export default CloseBtn;
