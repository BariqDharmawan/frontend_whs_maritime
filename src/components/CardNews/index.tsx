import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { DateTime } from "luxon";
import { IStrapiBlog } from "@/types";
import DOMPurify from "isomorphic-dompurify";
import Str from "@supercharge/strings";
import Link, { LinkProps } from "next/link";

const CardNews = ({
	src,
	date,
	title,
	wysiwyg,
	href,
}: {
	href: LinkProps["href"];
	wysiwyg: IStrapiBlog["wysiwyg"];
	title: string;
	date?: Date;
	src: string | StaticImport;
}) => {
	return (
		<figure>
			<div className="relative h-44">
				<Image src={src} alt={title} className="object-cover object-center" fill />
			</div>

			<figcaption className="flex items-start gap-4 p-3 border border-gray-200">
				{date && (
					<time className="bg-amber-500 text-black font-bold py-2 px-4 inline-block text-center">
						<span className="block">{DateTime.fromJSDate(new Date(date)).toFormat("dd")}</span>
						<span>{DateTime.fromJSDate(new Date(date)).toFormat("LLL")}</span>
					</time>
				)}

				<div>
					<p className="text-lg font-bold mb-1">
						<Link href={href}>{title}</Link>
					</p>
					<div
						className="text-gray-500"
						dangerouslySetInnerHTML={{
							__html: Str(DOMPurify.sanitize(wysiwyg, { FORBID_TAGS: ["img", "br", "h3"], FORBID_CONTENTS: ["h3", "h1", "h2"] }))
								.limit(190, "...")
								.get(),
						}}
					/>
				</div>
			</figcaption>
		</figure>
	);
};

export default CardNews;
