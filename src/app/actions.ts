import { IDataAboutUs, IStrapiResponse } from "@/types";

export async function getAboutCompany() {
	"use cache";

	const res = await fetch(`${process.env.STRAPI_URL}/api/company-info?populate=*`, {
		headers: {
			Authorization: `Bearer ${process.env.CRUD_TOKEN}`,
		},
	});

	const data = (await res.json()) as IStrapiResponse<IDataAboutUs>;

	return data.data;
}
