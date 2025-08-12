import { getAboutCompany } from "@/app/actions";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
	const aboutCompany = await getAboutCompany();

	return (
		<nav className="bg-blue-500 h-20 py-3">
			<div className="container h-full max-w-6xl flex items-center">
				<Link href={String(process.env.APP_URL)} className="relative h-full w-[250px] block">
					<Image src={`${process.env.STRAPI_URL}${aboutCompany.logo.url}`} alt="WHS Maritime" fill />
				</Link>
				<ul className="ms-auto text-white">
					<li>Our services</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
