import Image from "next/image";
import HeadSection from "../HeadSection";
import { ImageProps } from "next/dist/shared/lib/get-img-props";
import clsx from "clsx";
import Link from "next/link";
import { CLASSNAME_FOOTER_SITEMAP_MENU, CLASSNAME_ICON_SITEMAP_MENU, listMenuApp, listOurServices } from "@/utilities/menu";
import { getServiceCategory, getServiceContent } from "@/app/actions";
import Str from "@supercharge/strings";
import { Icon } from "@iconify-icon/react";

const Footer = async ({
	img,
	address,
	telphone,
	fax,
	email,
	isoImg,
}: {
	isoImg?: string;
	fax: string;
	email: string;
	telphone: string;
	address: string;
	img: ImageProps["src"];
}) => {
	const [serviceCategories, serviceContent] = await Promise.all([getServiceCategory(), getServiceContent()]);

	const ourServiceMenuDropdown = listOurServices(serviceCategories, serviceContent);

	return (
		<footer className="text-white bg-primary py-6">
			<div className="container max-w-5xl mx-auto">
				<div
					className={clsx("grid gap-14", {
						"grid-cols-3": Boolean(isoImg),
						"grid-cols-2": !isoImg,
					})}
				>
					<div>
						<HeadSection className="text-lg" title="About Us" />
						<div className="relative h-20 mb-5">
							<Image src={img} alt="" fill />
						</div>

						<p>{address}</p>

						<ul className="mt-2">
							<li>Telp: {telphone}</li>
							<li>Fax: {fax}</li>
							<li>Email: {email}</li>
						</ul>
					</div>
					{isoImg && (
						<div>
							<HeadSection className="text-lg" title="ISO" />
							<div className="relative h-40">
								<Image src={isoImg} alt="" fill />
							</div>
						</div>
					)}
					<div>
						<HeadSection title="Sitemap" />
						<ul>
							{listMenuApp({ dropdownOurService: ourServiceMenuDropdown }).map(eachMenu =>
								eachMenu.href ? (
									<li key={Str(eachMenu.label).trim().slug().get()} className="mb-2">
										<Link href={eachMenu.href} className={CLASSNAME_FOOTER_SITEMAP_MENU}>
											<Icon icon="si:chevron-right-duotone" width="24" height="24" className={CLASSNAME_ICON_SITEMAP_MENU} />
											<span>{eachMenu.label}</span>
										</Link>
									</li>
								) : (
									<li key={Str(eachMenu.label).trim().slug().get()}>
										<div className="flex items-center">
											<Icon icon="si:chevron-right-duotone" width="24" height="24" />
											<span>{eachMenu.label}</span>
										</div>
										<ul className="ps-4 mt-2">
											{eachMenu.children?.map(eachNested => (
												<li key={Str(eachNested.label).trim().slug().get()} className="mb-2">
													<Link href={eachNested.href} className={CLASSNAME_FOOTER_SITEMAP_MENU}>
														<Icon icon="si:chevron-right-duotone" width="24" height="24" className={CLASSNAME_ICON_SITEMAP_MENU} />
														<span>{eachNested.label}</span>
													</Link>
												</li>
											))}
										</ul>
									</li>
								),
							)}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
