export type Asset = {
	id: number;
	category: string;
	en: string;
	ko: string;
	image: string;
	imageUrl: string;
};

export type AssetsResponse = {
	total: number;
	categories: string[];
	items: Asset[];
};
