import { Icon } from "@iconify-icon/react";
import clsx from "clsx";
import { DOMAttributes } from "react";

const BtnNavSlider = ({
	leftOrRight,
	onClick,
	isDisabled = false,
	className,
}: {
	className?: string;
	leftOrRight: "left" | "right";
	isDisabled?: boolean;
	onClick?: DOMAttributes<HTMLButtonElement>["onClick"];
}) => {
	return (
		<button
			className={clsx(`absolute text-white transition duration-150 top-1/2 z-50 ${className}`, {
				"left-0": leftOrRight === "left",
				"right-0": leftOrRight === "right",
				"cursor-pointer": !isDisabled,
				"hover:translate-x-1": leftOrRight === "right",
				"hover:-translate-x-1": leftOrRight === "left",
			})}
			hidden={isDisabled}
			onClick={e => {
				if (onClick) {
					onClick(e);
				}
			}}
		>
			<Icon icon={leftOrRight === "left" ? "lsicon:left-filled" : "lsicon:right-filled"} width="48" height="48" />
		</button>
	);
};

export default BtnNavSlider;
