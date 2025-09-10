import { getDetailService, getServiceCategory, getServiceContent } from "@/app/actions";
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
			<header
				className="h-[75dvh] flex items-center justify-center bg-blend-darken bg-black/15"
				style={{
					backgroundImage: 'url("https://whsmaritime.com/wp-content/uploads/2022/09/FLOATING-TERMINAL-2-1536x1024-1.jpg")',
				}}
			>
				<HeadSection
					className="text-white text-center text-5xl text-shadow-black text-shadow-xs after:-bottom-4 after:!w-4/12"
					title={detailService.title}
					isH1
					isLineCenter
				/>
			</header>
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
