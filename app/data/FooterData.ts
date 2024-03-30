import { SocialLink } from "@/app/types/default";
import { Email, GitHub, LinkedIn, Phone } from "@mui/icons-material";

export const socialLinks: SocialLink[] = [
	{
		icon: GitHub,
		link: "https://github.com/olamva",
	},
	{
		icon: LinkedIn,
		link: "https://www.linkedin.com/olavassbotn/",
	},
];

export const contactLinks: SocialLink[] = [
	{
		icon: Phone,
		link: "tel:+4790778680",
		label: "+47 90 77 86 80",
	},
	{
		icon: Email,
		link: "mailto:ola@vassbotn.com",
		label: "ola@vassbotn.com",
	},
];
