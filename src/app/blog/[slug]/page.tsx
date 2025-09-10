import { getDetailArticle } from "@/app/actions";
import Banner from "@/components/Banner";
import { IStrapiBlog } from "@/types";
import { Icon } from "@iconify-icon/react";
import { DateTime } from "luxon";

export default async function DetailBlog({ params }: { params: Promise<{ slug: IStrapiBlog["slug"] }> }) {
	const { slug } = await params;

	const article = await getDetailArticle(slug);
	console.log("article", article);

	return (
		<>
			<Banner image={`${process.env.STRAPI_URL}${article.cover.url}`} title="Coatrans" className="h-[30dvh]" />

			<div className="container max-w-5xl mx-auto py-10">
				<p className="text-3xl font-bold">{article.title}</p>
				<div className="text-gray-600 mb-6 flex items-center gap-2">
					<time>{DateTime.fromJSDate(new Date(article.datepost)).toFormat("dd LLLL yyyy")}</time>
					<Icon className="text-secondary" icon="lucide:film" width={16} height={16} />
				</div>

				<main
					dangerouslySetInnerHTML={{
						__html: article.wysiwyg,
					}}
				/>
			</div>
		</>
	);
}
