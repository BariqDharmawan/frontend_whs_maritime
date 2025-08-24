"use client";

import { IStrapiResponseSliderHomepage } from "@/types";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import BtnNavSlider from "../BtnNavSlider";

const SliderBanner = ({ datas }: { datas: IStrapiResponseSliderHomepage[] }) => {
	const swiperRef = useRef<SwiperRef | null>(null);
	const [slideIndex, setSlideIndex] = useState(0);

	return (
		<div className="relative">
			<BtnNavSlider
				leftOrRight="left"
				isDisabled={slideIndex === 0}
				onClick={() => {
					if (!swiperRef.current) {
						return;
					}

					swiperRef.current.swiper.slidePrev();
					setSlideIndex(swiperRef.current.swiper.activeIndex);
				}}
			/>
			<BtnNavSlider
				isDisabled={slideIndex === datas.length - 1}
				leftOrRight="right"
				onClick={() => {
					if (!swiperRef.current) {
						return;
					}

					swiperRef.current?.swiper.slideNext();
					setSlideIndex(swiperRef.current.swiper.activeIndex);
				}}
			/>
			<Swiper ref={swiperRef} modules={[Navigation]} className="mySwiper">
				{datas
					.filter(eachData => eachData.gallery !== null)
					.map(slider => (
						<SwiperSlide
							key={slider.documentId}
							className="bg-cover "
							style={{
								height: "50vh",
								backgroundImage: `url("${process.env.NEXT_PUBLIC_STRAPI_URL}${slider.gallery!.img.url}")`,
							}}
						>
							<div className="container max-w-5xl relative h-full mx-auto text-white">
								<div className="bg-black/50 absolute top-1/2 -translate-y-1/2 p-4 rounded-lg lg:w-8/12">
									<p className="text-2xl mb-2 font-bold">{slider.title}</p>
									<p className="text-xl mb-4">{slider.subtitle}</p>
									<p className="mb-10">{slider.description}</p>

									{slider.links && (
										<Link
											className="bg-red-500 hover:bg-red-600 transition duration-150 text-white px-14 py-3
											text-lg font-medium rounded-full"
											href={slider.links}
										>
											Learn more
										</Link>
									)}
								</div>
							</div>
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
};

export default SliderBanner;
