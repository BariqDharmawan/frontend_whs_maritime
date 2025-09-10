import clsx from "clsx";

const HeadSection = ({
	title,
	className,
	isH1 = false,
	isLineCenter = false,
}: {
	isLineCenter?: boolean;
	isH1?: boolean;
	className?: string;
	title: string;
}) => {
	const centeringLineClassName = "after:left-1/2 after:-translate-x-1/2";
	const classList = `text-2xl relative font-bold mb-8 after:absolute after:-bottom-2 after:left-0 after:w-20 after:bg-amber-500 after:h-1 ${className}`;

	if (isH1) {
		return (
			<h1
				className={clsx(classList, {
					[centeringLineClassName]: isLineCenter,
				})}
			>
				{title}
			</h1>
		);
	}

	return (
		<p
			className={clsx(classList, {
				[centeringLineClassName]: isLineCenter,
			})}
		>
			{title}
		</p>
	);
};

export default HeadSection;
