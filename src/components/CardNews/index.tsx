import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { DateTime } from "luxon";

const CardNews = ({ src, date }: { date?: Date; src: string | StaticImport }) => {
	return (
		<figure>
			<Image src={src} alt="" />
			<figcaption>
				{date && <span>{DateTime.fromJSDate(date).toFormat("dd LLL")}</span>}

				<div></div>
			</figcaption>
		</figure>
	);
};

export default CardNews;
