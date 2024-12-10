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
			className="sm:button-hover button-hover-mobile h-fit select-none rounded-full p-1.5"
		>
			<Image
				src={`/flags/${locale === "no" ? "US" : "NO"}.png`}
				width={16}
				height={16}
				alt="Toggle Language"
				className="size-4 rounded-full"
			/>
		</Link>
	);
};
export default LangToggle;
