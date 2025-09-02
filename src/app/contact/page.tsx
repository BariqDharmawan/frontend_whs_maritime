import HeadSection from "@/components/HeadSection";
import { getContactUs } from "../actions";
import Str from "@supercharge/strings";
import DOMPurify from "isomorphic-dompurify";

export default async function Contact() {
	const [contactUsContent] = await Promise.all([getContactUs()]);

	const contactInfo = [
		{
			classNameTitle: "text-gray-500",
			title: "Head Quarter",
			value: contactUsContent.head_quarter,
			classNameValue: "text-lg",
		},
		{
			classNameTitle: "",
			title: "Address",
			value: contactUsContent.address,
			classNameValue: "text-gray-500",
		},
		{
			classNameTitle: "",
			title: "Phone",
			value: contactUsContent.phone,
			classNameValue: "text-gray-500",
		},
		{
			classNameTitle: "",
			title: "Fax",
			value: contactUsContent.fax,
			classNameValue: "text-gray-500",
		},
		{
			classNameTitle: "",
			title: "Email",
			value: contactUsContent.email,
			classNameValue: "text-gray-500",
		},
	];

	return (
		<>
			<header
				className="h-[30vh] bg-black/30 bg-blend-multiply bg-fixed flex items-center justify-center"
				style={{
					backgroundImage: `url(${process.env.STRAPI_URL}${contactUsContent.banner_contact_page.url})`,
				}}
			>
				<HeadSection className="text-white after:left-1/2 after:-translate-x-1/2 text-3xl" title="Contact Us" isH1 />
			</header>

			<main>
				<div className="container max-w-5xl mx-auto py-6">
					<article className="grid grid-cols-5 gap-4 pb-10 mb-10 border-b border-gray-200">
						{contactInfo.map(eachContact => (
							<div key={Str(eachContact.title).slug().get()}>
								<p className={`${eachContact.classNameTitle} mb-2`}>{eachContact.title}</p>
								<p className={eachContact.classNameValue}>{eachContact.value}</p>
							</div>
						))}
					</article>

					<div
						dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(contactUsContent.iframe_address, { ALLOWED_TAGS: ["iframe"] }) }}
						className="w-full flex map-embed h-[400px]"
					/>
				</div>
			</main>
		</>
	);
}
