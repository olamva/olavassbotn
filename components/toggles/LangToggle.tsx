"use client";

import NOFlag from "@/public/flags/NO.png";
import USFlag from "@/public/flags/US.png";
import { useLocale } from "next-intl";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LangToggle = () => {
	const pathname = usePathname();
	const locale = useLocale();
	const newPath = "/" + (locale === "no" ? "en" : "no") + pathname.slice(3);

	const languages: { [key: string]: StaticImageData } = {
		en: USFlag,
		no: NOFlag,
	};
	const flagSrc = languages[locale];
	return (
		<Link
			href={`${newPath}`}
			className="p-1.5 rounded-full sm:button-hover button-hover-mobile h-fit select-none"
		>
			<Image
				src={flagSrc}
				alt="Toggle Language"
				className="size-4 rounded-full"
			/>
		</Link>
	);
};
export default LangToggle;
