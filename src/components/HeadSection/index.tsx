const HeadSection = ({ title, className, isH1 = false }: { isH1?: boolean; className?: string; title: string }) => {
	const classList = `text-2xl relative font-bold mb-8 after:absolute after:-bottom-2 after:left-0 after:w-20 after:bg-amber-500 after:h-1 ${className}`;

	if (isH1) {
		return <h1 className={classList}>{title}</h1>;
	}

	return <p className={classList}>{title}</p>;
};

export default HeadSection;
