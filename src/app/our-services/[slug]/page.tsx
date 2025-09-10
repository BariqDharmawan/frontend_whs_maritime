import { getDetailService, getServiceCategory, getServiceContent } from "@/app/actions";
import Banner from "@/components/Banner";
import HeadSection from "@/components/HeadSection";
import SidebarLinks from "@/components/SidebarLinks";
import { IDataServiceContent } from "@/types";
import { listOurServices } from "@/utilities/menu";

export default async function DetailServices({ params }: { params: Promise<{ slug: IDataServiceContent["slug"] }> }) {
	const { slug } = await params;
	const [serviceCategories, serviceContent, detailService] = await Promise.all([
		getServiceCategory(),
		getServiceContent(),
		getDetailService(slug),
	]);
	const ourServiceMenuDropdown = listOurServices(serviceCategories, serviceContent);

	return (
		<>
			<Banner
				image="https://whsmaritime.com/wp-content/uploads/2022/09/FLOATING-TERMINAL-2-1536x1024-1.jpg"
				title={detailService.title}
				className="h-[75dvh]"
			/>

			<section>
				<div className="container max-w-5xl mx-auto py-6 flex">
					<SidebarLinks links={ourServiceMenuDropdown} />

					<main
						className="grow table-inside"
						dangerouslySetInnerHTML={{
							__html: detailService.wysiwyg,
						}}
					/>
				</div>
			</section>
		</>
	);
}
