import HeadSection from "../HeadSection";

const Banner = ({ className, title, image }: { image: string; title: string; className?: HTMLDivElement["className"] }) => {
	return (
		<header
			title={title}
			className={`${className} flex items-center bg-no-repeat bg-center justify-center bg-blend-darken bg-black/15`}
			style={{
				backgroundImage: `url(${image})`,
			}}
		>
			<HeadSection
				className="text-white text-center text-5xl text-shadow-black text-shadow-xs after:-bottom-4 after:!w-4/12"
				title={title}
				isH1
				isLineCenter
			/>
		</header>
	);
};

export default Banner;
