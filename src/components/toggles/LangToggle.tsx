"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LangToggle = () => {
	const pathname = usePathname();
	const locale = useLocale();
	const newPath = "/" + (locale === "no" ? "en" : "no") + pathname.slice(3);

	return (
		<Link
			href={newPath}
			className="sm:button-hover button-hover-mobile relative size-4 select-none p-1.5"
		>
			<Image
				fill
				src={`/flags/${locale === "no" ? "US" : "NO"}.png`}
				alt="Toggle Language"
				className="rounded-full"
			/>
		</Link>
	);
};
export default LangToggle;
