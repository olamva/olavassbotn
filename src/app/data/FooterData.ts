import { SocialLink } from "@/app/types/default";
import Call from "@/assets/Call";
import GitHub from "@/assets/GitHub";
import LinkedIn from "@/assets/LinkedIn";
import Mail from "@/assets/Mail";

export const socialLinks: SocialLink[] = [
	{
		icon: GitHub,
		link: "https://github.com/olamva",
		label: "GitHub",
	},
	{
		icon: LinkedIn,
		link: "https://www.linkedin.com/in/ola-vassbotn/",
		label: "LinkedIn",
	},
];

export const contactLinks: SocialLink[] = [
	{
		icon: Call,
		link: "tel:+4790778680",
		label: "+47 90 77 86 80",
	},
	{
		icon: Mail,
		link: "mailto:ola@vassbotn.com",
		label: "ola@vassbotn.com",
	},
];
