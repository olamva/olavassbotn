"use client";
import Chip from "@/components/about-me/Chip";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SubPageChips = () => {
	const pathname = usePathname();
	const t = useTranslations("About Me");

	return (
		<div className="flex justify-center">
			<Link href={`${pathname}/projects`}>
				<Chip>{t("projectsbutton")}</Chip>
			</Link>
			<Link href={`${pathname}/experience`}>
				<Chip>{t("experiencebutton")}</Chip>
			</Link>
		</div>
	);
};

export default SubPageChips;
