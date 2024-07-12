"use client";

import NOFlag from "@/public/flags/NO.png";
import USFlag from "@/public/flags/US.png";
import { useLocale } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { usePathname, useRouter } from "next/navigation";

const LangToggle = () => {
	const router = useRouter();
	const pathname = usePathname();
	const locale = useLocale();
	const toggleLanguage = () => {
		const newLocale = locale === "no" ? "en" : "no";
		const newPathname = "/" + newLocale + pathname.slice(3);
		router.push(newPathname);
		router.refresh(); // ! without this extra refresh, the theme toggle completely breaks apart when changing the language
	};

	const languages: { [key: string]: StaticImageData } = {
		en: USFlag,
		no: NOFlag,
	};
	const flagSrc = languages[locale];
	return (
		<div
			onClick={toggleLanguage}
			className="p-1 text-black dark:text-white rounded-full cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors h-fit"
		>
			<Image
				src={flagSrc}
				alt="Toggle Language"
				className="size-5 rounded-full"
			/>
		</div>
	);
};
export default LangToggle;
