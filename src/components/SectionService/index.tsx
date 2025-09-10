"use client";

import { IDataServiceContent } from "@/types";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

const SectionService = ({ datas }: { datas: IDataServiceContent[] }) => {
	return (
		<div className="grid grid-cols-3 gap-8">
			{datas.map((eachService, i) => (
				<motion.article
					key={eachService.documentId}
					className="flex flex-col items-start"
					initial={{
						x: "100vw",
					}}
					animate={{
						x: 0,
					}}
					transition={{
						duration: 0.8,
						ease: "easeOut",
						delay: i * 0.15,
					}}
				>
					<div className="relative h-[250px] w-full">
						<Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${eachService.cover.url}`} alt={eachService.title} fill />
					</div>
					<p className="text-lg font-bold mt-2 mb-3">{eachService.title}</p>

					{eachService.recap && (
						<div
							className="text-sm mb-4"
							dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(eachService.recap, { USE_PROFILES: { html: true } }) }}
						/>
					)}

					<Link
						className="bg-primary transition duration-150 hover:bg-primary-dark text-white px-4 py-2 rounded-lg mt-auto"
						href={`/our-services/${eachService.slug}`}
					>
						Learn more
					</Link>
				</motion.article>
			))}
		</div>
	);
};

export default SectionService;
