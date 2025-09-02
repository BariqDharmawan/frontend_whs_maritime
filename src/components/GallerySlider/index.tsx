"use client";

import { IGallery } from "@/types";
import OverlayImgCard from "../OverlayImgCard";
import PopupSlider from "../PopupSlider";
import { useRef } from "react";

const GallerySlider = ({ datas }: { datas: IGallery[] }) => {
	const sliderPopup = useRef<HTMLDialogElement | null>(null);

	return (
		<>
			<div className="flex flex-wrap">
				{datas.map(galleryImg => (
					<OverlayImgCard
						src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${galleryImg.img.url}`}
						title={galleryImg.title}
						key={galleryImg.documentId}
						onClick={() => {
							console.log("click slider");
							sliderPopup.current?.showModal();
						}}
					/>
				))}
			</div>

			<PopupSlider
				datas={datas.map(eachData => ({
					title: eachData.title,
					img: `${process.env.NEXT_PUBLIC_STRAPI_URL}${eachData.img.url}`,
				}))}
				ref={sliderPopup}
			/>
		</>
	);
};

export default GallerySlider;
