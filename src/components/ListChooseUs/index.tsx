"use client";

import { IStrapiWhyChooseUs } from "@/types";
import { Icon } from "@iconify-icon/react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const ListChooseUs = ({ datas }: { datas: IStrapiWhyChooseUs[] }) => {
	const ref = useRef(null);

	const isInView = useInView(ref, {
		once: true,
		amount: 0.2,
	});

	return (
		<article ref={ref} className="flex flex-col gap-4">
			{datas.map((whyChoose, i) => (
				<motion.div
					key={whyChoose.documentId}
					className="flex gap-4 items-start"
					initial={{
						y: "100px",
					}}
					animate={
						isInView
							? {
									y: 0,
							  }
							: {
									y: 200,
							  }
					}
					transition={{
						duration: 0.8,
						ease: "easeOut",
						delay: i * 0.15,
					}}
				>
					<Icon icon="mdi:play" width="36" height="36" className="bg-amber-500 p-2 text-white rounded-full" />

					<div>
						<p className="text-lg font-bold">{whyChoose.title}</p>
						<p className="text-gray-500">{whyChoose.description}</p>
					</div>
				</motion.div>
			))}
		</article>
	);
};

export default ListChooseUs;
