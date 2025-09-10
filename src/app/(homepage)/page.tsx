import SliderBanner from "@/components/SliderBanner";
import { getAboutCompany, getBlog, getServiceContent, getSliderHomepage, getWhyChooseUs } from "../actions";
import SectionService from "@/components/SectionService";
import ListChooseUs from "@/components/ListChooseUs";
import HeadSection from "@/components/HeadSection";
import CardNews from "@/components/CardNews";
import Str from "@supercharge/strings";

export default async function Home() {
	const [sliderHomepage, ourServices, aboutUsContent, whyChooseUsContent, blogs] = await Promise.all([
		getSliderHomepage(),
		getServiceContent(true),
		getAboutCompany(),
		getWhyChooseUs(),
		getBlog(),
	]);

	return (
		<>
			<SliderBanner datas={sliderHomepage} />
			<section className="py-10">
				<div className="container max-w-5xl mx-auto">
					<SectionService datas={ourServices} />
				</div>
			</section>
			<section
				className="py-10 mb-6 bg-top bg-black/30 bg-blend-multiply bg-fixed bg-no-repeat bg-cover text-white"
				style={{
					backgroundImage: 'url("/about-us-bg.jpg")',
				}}
			>
				<div className="container max-w-5xl mx-auto">
					<div className="max-w-1/2">
						<p className="text-2xl font-bold mb-3">About Us</p>
						<p className="text-lg">{aboutUsContent.about_desc}</p>
					</div>
				</div>
			</section>
			<section className="py-6 mb-6">
				<div className="container max-w-5xl mx-auto">
					<div className="grid grid-cols-2 gap-8">
						<div>
							<HeadSection title="Why Choose Us" />
							<ListChooseUs datas={whyChooseUsContent} />
						</div>

						{aboutUsContent.video_homepage && (
							<div>
								<p className="text-lg font-bold mb-3">Introducing PNTS</p>
								<video
									className="accent-amber-500"
									autoPlay
									src={`${process.env.STRAPI_URL}${aboutUsContent.video_homepage.url}`}
									controls
									height={240}
									width="100%"
									muted
								>
									<source src={`${process.env.STRAPI_URL}${aboutUsContent.video_homepage.url}`} type={aboutUsContent.video_homepage.mime} />
								</video>
							</div>
						)}
					</div>
				</div>
			</section>

			<section className="py-6">
				<div className="container max-w-5xl mx-auto">
					<HeadSection title="Company News" />

					<div className="grid grid-cols-3 gap-4">
						{blogs.map(blog => (
							<CardNews
								href={`/blog/${Str(blog.title).trim().lower().slug().get()}`}
								wysiwyg={blog.wysiwyg}
								date={blog.datepost}
								src={`${process.env.STRAPI_URL}${blog.cover.url}`}
								key={blog.documentId}
								title={blog.title}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
