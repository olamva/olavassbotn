type Experience = {
	title: string;
	description?: string;
	imgs: ImportedImage[];
};

type ImportedImage = {
	src: any;
	alt: string;
	href?: string;
};
