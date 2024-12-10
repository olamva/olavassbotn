import type { ExperienceListItem } from "@/app/types/default";

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
				src: "/logos/fagkomLight.png",
				darkSrc: "/logos/fagkomDark.png",
				alt: "Fagkom Online sin logo",
			},
			{ src: "/logos/Online_bla_o.svg", alt: "Online sin logo" },
		],
	},
	{
		href: "https://tana.inc/",
		imgs: [{ src: "/logos/Tana.svg", alt: "Tana sin logo" }],
	},
	{
		href: "https://vitalthings.com/en/",
		imgs: [{ src: "/logos/VTLogo.jpeg", alt: "Vitalthings sin logo" }],
	},
	{
		href: "https://en.wikipedia.org/wiki/HTML",
		imgs: [{ src: "/logos/HTML.png", alt: "HTML logo" }],
	},
	{
		href: "https://en.wikipedia.org/wiki/CSS",
		imgs: [{ src: "/logos/CSS.png", alt: "CSS logo" }],
	},
	{
		href: "https://en.wikipedia.org/wiki/JavaScript",
		imgs: [{ src: "/logos/JS.png", alt: "JavaScript logo" }],
	},
	{
		href: "https://www.typescriptlang.org/",
		imgs: [{ src: "/logos/TS.svg", alt: "TypeScript logo" }],
	},
	{
		href: "https://www.java.com/",
		imgs: [{ src: "/logos/java.webp", alt: "Java logo" }],
	},
	{
		href: "https://www.python.org/",
		imgs: [{ src: "/logos/python.webp", alt: "Python logo" }],
	},
	{
		href: "https://reactjs.org/",
		imgs: [{ src: "/logos/react.png", alt: "React logo" }],
	},
	{
		href: "https://nextjs.org/",
		imgs: [{ src: "/logos/next-js.svg", alt: "Next.JS logo" }],
	},
	{
		href: "https://tailwindcss.com/",
		imgs: [{ src: "/logos/Tailwind.png", alt: "Tailwind CSS logo" }],
	},
];
