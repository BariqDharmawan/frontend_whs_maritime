import { PropsWithChildren } from "react";

const HeadSection = ({ title }: { title: string }) => {
	return (
		<p className="text-2xl relative font-bold mb-8 after:absolute after:-bottom-2 after:left-0 after:w-20 after:bg-amber-500 after:h-1">
			{title}
		</p>
	);
};

export default HeadSection;
