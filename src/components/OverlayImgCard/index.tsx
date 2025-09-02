"use client";

import Image, { ImageProps } from "next/image";
import HeadSection from "../HeadSection";
import { MouseEventHandler } from "react";

const OverlayImgCard = ({
	src,
	title,
	onClick,
}: {
	src: ImageProps["src"];
	title: string;
	onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
	return (
		<article className="relative w-1/2 h-[300px] group">
			<button className="h-full w-full absolute top-0 left-0 z-20 cursor-pointer" onClick={onClick} />

			<Image src={src} alt={title} fill />
			<div className="bg-black/30 absolute top-0 left-0 h-full w-full group-hover:bg-black/80 transition-all duration-200" />

			<div className="z-20 transition-all duration-200 absolute left-1/2 -translate-x-1/2 top-4 group-hover:top-1/2 group-hover:-translate-y-1/2">
				<HeadSection className="text-white mb-0 after:left-1/2 after:-translate-x-1/2" title={title} />
			</div>
		</article>
	);
};

export default OverlayImgCard;
