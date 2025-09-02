import { getGalleryContent } from "../actions";
import PopupSlider from "@/components/PopupSlider";
import OverlayImgCard from "@/components/OverlayImgCard";
import GallerySlider from "@/components/GallerySlider";

export default async function Gallery() {
	const galleryContents = await getGalleryContent();
	console.log("galleryContents", galleryContents);

	return (
		<main>
			<GallerySlider datas={galleryContents} />
		</main>
	);
}
