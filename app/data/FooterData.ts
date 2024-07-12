import { SocialLink } from "@/app/types/default";
import Call from "@/public/icons/Call";
import Mail from "@/public/icons/Mail";
import { GitHub, LinkedIn } from "@mui/icons-material";

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
