import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { StaticImageData } from "next/image";

export type SocialLink = {
	icon: OverridableComponent<SvgIconTypeMap<unknown, "svg">> & {
		muiName: string;
	};
	link: string;
	label?: string;
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
