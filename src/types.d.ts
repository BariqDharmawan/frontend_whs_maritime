type HTMLString = `<${string}>`;

export interface IImgStrapi {
	caption: string | null;
	formats: {
		small: {
			url: string;
			width: number;
		};
		thumbnail: {
			url: string;
			width: number;
		};
	};
	url: string;
}

export interface IVideoStrapi {
	ext: ".mp4";
	mime: "video/mp4";
	name: string;
	publishedAt: Date;
	url: `${string}.mp4`;
	size: number;
	documentId: string;
}

export interface IDataAboutUs {
	about_desc: string;
	createdAt: Date;
	id: number;
	logo: IImgStrapi;
	video_homepage?: IVideoStrapi;
	iso_img?: IImgStrapi;
}

export interface IDataServiceCategory {
	id: number;
	category: string;
	documentId: string;
}

export interface IDataServiceContent {
	id: number;
	slug: string;
	title: string;
	cover: IImgStrapi;
	wysiwyg: string;
	service_category: IDataServiceCategory;
	show_in_homepage: boolean;
	documentId: string;
	recap: string;
}

export interface IStrapiResponse<T = unknown> {
	data: T;
	meta: object;
}

export interface IStrapiServiceCategories {
	label: string;
	href: string;
	id: string;
}

export interface IGallery {
	documentId: string;
	title: string;
	img: IImgStrapi;
}

export interface IStrapiResponseSliderHomepage {
	gallery: IGallery | null;
	documentId: string;
	description: string;
	subtitle: string;
	title: string;
	links: string;
}

export interface IStrapiWhyChooseUs {
	title: string;
	description: string;
	documentId: string;
}

export interface IStrapiBlog {
	documentId: string;
	title: string;
	datepost: Date;
	cover: IImgStrapi;
	wysiwyg: string;
	slug: string;
}

export interface IStrapiContactUs {
	address: string;
	email: string;
	fax: string;
	phone: string;
	banner_contact_page: IImgStrapi;
	head_quarter: string;
	iframe_address: HTMLString;
}

export interface MenuItem {
	id?: string;
	label: string;
	href: string;
	parent_id?: string;
	slug?: string;
}

export interface NestedMenuItem {
	id?: MenuItem["id"];
	label: MenuItem["label"];
	href: MenuItem["href"];
	menus?: MenuItem[];
	slug?: MenuItem["slug"];
}
