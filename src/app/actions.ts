import {
	IDataAboutUs,
	IDataServiceCategory,
	IDataServiceContent,
	IGallery,
	IStrapiBlog,
	IStrapiContactUs,
	IStrapiResponse,
	IStrapiResponseSliderHomepage,
	IStrapiWhyChooseUs,
} from "@/types";
import { unstable_cacheLife as cacheLife } from "next/cache";

export async function getAboutCompany() {
	"use cache";
	cacheLife("minutes");

	const res = await fetch(`${process.env.STRAPI_URL}/api/company-info?populate=*`, {
		headers: {
			Authorization: `Bearer ${process.env.CRUD_TOKEN}`,
		},
	});

	const data = (await res.json()) as IStrapiResponse<IDataAboutUs>;
	return data.data;
}

export async function getServiceCategory() {
	"use cache";
	cacheLife("minutes");

	const res = await fetch(`${process.env.STRAPI_URL}/api/service-categories`, {
		headers: {
			Authorization: `Bearer ${process.env.CRUD_TOKEN}`,
		},
	});

	const data = (await res.json()) as IStrapiResponse<IDataServiceCategory[] | null>;

	return data.data;
}

export async function getDetailService(slug: IDataServiceContent["slug"]) {
	"use cache";
	cacheLife("minutes");

	const res = await fetch(`${process.env.STRAPI_URL}/api/services-contents?filters[slug][$eq]=${slug}&populate=*`, {
		headers: {
			Authorization: `Bearer ${process.env.CRUD_TOKEN}`,
		},
	});

	const data = (await res.json()) as IStrapiResponse<IDataServiceContent[]>;

	return data.data[0];
}

export async function getServiceContent(showInHomepage = false) {
	"use cache";
	cacheLife("minutes");

	let queryParam = "populate=*";
	if (showInHomepage) {
		queryParam = `${queryParam}&filters[show_in_homepage][$eq]=true`;
	}

	const res = await fetch(`${process.env.STRAPI_URL}/api/services-contents?${queryParam}`, {
		headers: {
			Authorization: `Bearer ${process.env.CRUD_TOKEN}`,
		},
	});

	const data = (await res.json()) as IStrapiResponse<IDataServiceContent[]>;

	return data.data;
}

export async function getSliderHomepage() {
	"use cache";
	cacheLife("minutes");

	const res = await fetch(`${process.env.STRAPI_URL}/api/sliders-homepage?populate[gallery][populate]=img`, {
		headers: {
			Authorization: `Bearer ${process.env.CRUD_TOKEN}`,
		},
	});

	const data = (await res.json()) as IStrapiResponse<IStrapiResponseSliderHomepage[]>;

	return data.data;
}

export async function getWhyChooseUs() {
	"use cache";
	cacheLife("hours");

	const res = await fetch(`${process.env.STRAPI_URL}/api/why-choose-uses`, {
		headers: {
			Authorization: `Bearer ${process.env.CRUD_TOKEN}`,
		},
	});

	const data = (await res.json()) as IStrapiResponse<IStrapiWhyChooseUs[]>;

	return data.data;
}

export async function getBlog() {
	"use cache";
	cacheLife("minutes");

	const res = await fetch(`${process.env.STRAPI_URL}/api/blogs?populate=*`, {
		headers: {
			Authorization: `Bearer ${process.env.CRUD_TOKEN}`,
		},
	});

	const data = (await res.json()) as IStrapiResponse<IStrapiBlog[]>;

	return data.data;
}

export async function getContactUs() {
	"use cache";
	cacheLife("minutes");

	const res = await fetch(`${process.env.STRAPI_URL}/api/contact-us?populate=*`, {
		headers: {
			Authorization: `Bearer ${process.env.CRUD_TOKEN}`,
		},
	});

	const data = (await res.json()) as IStrapiResponse<IStrapiContactUs>;

	return data.data;
}

export async function getGalleryContent() {
	"use cache";

	const res = await fetch(`${process.env.STRAPI_URL}/api/gallery?populate=*`, {
		headers: {
			Authorization: `Bearer ${process.env.CRUD_TOKEN}`,
		},
	});

	const data = (await res.json()) as IStrapiResponse<IGallery[]>;

	return data.data;
}
