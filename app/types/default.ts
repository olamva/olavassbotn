import { StaticImageData } from "next/image";

export type SocialLink = {
	icon: any;
	link: string;
	label?: string;
};
export interface ImportedImage {
	src: StaticImageData | string;
	darkSrc?: StaticImageData | string;
	alt: string;
}
export interface ListItem {
	href: string;
	imgs: ImportedImage[];
}

export interface Experience extends ListItem {
	title: string;
	description?: string;
}
