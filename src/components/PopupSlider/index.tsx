"use client";

import Image, { ImageProps } from "next/image";
import { RefObject, useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import BtnNavSlider from "../BtnNavSlider";
import CloseBtn from "../CloseBtn";

type TPopupSlider = { img: ImageProps["src"]; title: string };

const PopupSlider = ({ datas, ref }: { datas: TPopupSlider[]; ref?: RefObject<HTMLDialogElement | null> }) => {
	const swiperRef = useRef<SwiperRef | null>(null);

	return (
		<dialog className="open:backdrop:bg-black/70 w-full h-full max-w-none open:top-1/2 px-4 bg-transparent open:-translate-y-1/2" ref={ref}>
			<CloseBtn
				className="ms-auto mb-2 hover:text-gray-300"
				onClick={() => {
					ref?.current?.close();
				}}
				isHoverRotate
			/>

			<div className="relative w-full">
				<BtnNavSlider
					leftOrRight="left"
					className="custom-slider-prev z-10"
					onClick={() => {
						swiperRef.current?.swiper.slidePrev();
					}}
				/>
				<BtnNavSlider
					leftOrRight="right"
					className="custom-slider-next z-10"
					onClick={() => {
						swiperRef.current?.swiper.slideNext();
					}}
				/>

				<Swiper ref={swiperRef} spaceBetween={10} slidesPerView={1} modules={[Navigation]} loop>
					{datas.map((data, i) => (
						<SwiperSlide className="flex flex-col" key={data.title}>
							<div className="relative grow w-full h-[80dvh]">
								<Image src={data.img} alt={data.title} fill />
							</div>
							<div className="text-white text-lg font-bold flex justify-between">
								<p>{data.title}</p>
								<span>
									{i + 1}/{datas.length}
								</span>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</dialog>
	);
};

export default PopupSlider;
