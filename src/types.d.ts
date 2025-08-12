export interface IDataAboutUs {
	about_desc: string;
	createdAt: Date;
	id: number;
	logo: {
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
	};
}

export interface IStrapiResponse<T = unknown> {
	data: T;
	meta: object;
}
