import { StaticImageData } from "next/image";
import { JSX } from "react";

export type SocialLink = {
	icon: ({ size }: { size?: string }) => JSX.Element;
	link: string;
	label: string;
};
export interface ImportedImage {
	src: StaticImageData | string;
	darkSrc?: StaticImageData | string;
	alt: string;
}
export interface ExperienceListItem {
	href: string;
	imgs: ImportedImage[];
}

export interface Experience extends ExperienceListItem {
	title: string;
	description?: string;
}

export type ThemesPaper = {
	label: string;
	color: string;
	textColor?: string;
};
