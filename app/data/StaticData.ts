import { ListItem } from "@/app/types/default";
import onlineLogo from "@/public/Online_bla_o.svg";
import fagkomLogoDark from "@/public/fagkomDark.png";
import fagkomLogoLight from "@/public/fagkomLight.png";
import javaLogo from "@/public/java.webp";
import nextLogo from "@/public/next-js.svg";
import pythonLogo from "@/public/python.webp";
import reactLogo from "@/public/react.png";

export const listItems: ListItem[] = [
	{
		href: "https://online.ntnu.no/",
		imgs: [
			{
				src: fagkomLogoLight,
				darkSrc: fagkomLogoDark,
				alt: "Fagkom Online sin logo",
			},
			{
				src: onlineLogo,
				alt: "Online sin logo",
			},
		],
	},
	{
		href: "https://www.java.com/",
		imgs: [
			{
				src: javaLogo,
				alt: "Java logo",
			},
		],
	},
	{
		href: "https://www.python.org/",
		imgs: [
			{
				src: pythonLogo,
				alt: "Python logo",
			},
		],
	},
	{
		href: "https://reactjs.org/",
		imgs: [
			{
				src: reactLogo,
				alt: "React logo",
			},
		],
	},
	{
		href: "https://nextjs.org/",
		imgs: [
			{
				src: nextLogo,
				alt: "Next.JS logo",
			},
		],
	},
];
