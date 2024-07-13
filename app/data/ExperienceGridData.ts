import type { ExperienceListItem } from "@/app/types/default";
import CSSLogo from "@/public/logos/CSS.png";
import HTMLLogo from "@/public/logos/HTML.png";
import JSLogo from "@/public/logos/JS.png";
import onlineLogo from "@/public/logos/Online_bla_o.svg";
import TSLogo from "@/public/logos/TS.svg";
import tailwindLogo from "@/public/logos/Tailwind.png";
import tanaLogo from "@/public/logos/Tana.svg";
import VTLogo from "@/public/logos/VTLogo.jpeg";
import fagkomLogoDark from "@/public/logos/fagkomDark.png";
import fagkomLogoLight from "@/public/logos/fagkomLight.png";
import javaLogo from "@/public/logos/java.webp";
import nextLogo from "@/public/logos/next-js.svg";
import pythonLogo from "@/public/logos/python.webp";
import reactLogo from "@/public/logos/react.png";

/*
 * HOW TO ADD A NEW EXPERIENCE LIST ITEM:
 * Add the logo to the public/logos folder
 * Add it to the ExperiencelistItems array below
 * Add text to public/locales/[locale]/translation.json
 */
export const ExperiencelistItems: ExperienceListItem[] = [
	{
		href: "https://online.ntnu.no/",
		imgs: [
			{
				src: fagkomLogoLight,
				darkSrc: fagkomLogoDark,
				alt: "Fagkom Online sin logo",
			},
			{ src: onlineLogo, alt: "Online sin logo" },
		],
	},
	{
		href: "https://tana.inc/",
		imgs: [{ src: tanaLogo, alt: "Tana sin logo" }],
	},
	{
		href: "https://vitalthings.com/en/",
		imgs: [{ src: VTLogo, alt: "Vitalthings sin logo" }],
	},
	{
		href: "https://en.wikipedia.org/wiki/HTML",
		imgs: [{ src: HTMLLogo, alt: "HTML logo" }],
	},
	{
		href: "https://en.wikipedia.org/wiki/CSS",
		imgs: [{ src: CSSLogo, alt: "CSS logo" }],
	},
	{
		href: "https://en.wikipedia.org/wiki/JavaScript",
		imgs: [{ src: JSLogo, alt: "JavaScript logo" }],
	},
	{
		href: "https://www.typescriptlang.org/",
		imgs: [{ src: TSLogo, alt: "TypeScript logo" }],
	},
	{
		href: "https://www.java.com/",
		imgs: [{ src: javaLogo, alt: "Java logo" }],
	},
	{
		href: "https://www.python.org/",
		imgs: [{ src: pythonLogo, alt: "Python logo" }],
	},
	{
		href: "https://reactjs.org/",
		imgs: [{ src: reactLogo, alt: "React logo" }],
	},
	{
		href: "https://nextjs.org/",
		imgs: [{ src: nextLogo, alt: "Next.JS logo" }],
	},
	{
		href: "https://tailwindcss.com/",
		imgs: [{ src: tailwindLogo, alt: "Tailwind CSS logo" }],
	},
];
