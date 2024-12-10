"use client";
import Chip from "@/components/about-me/Chip";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const SubPageChips = () => {
	const pathname = usePathname();
	const t = useTranslations("About Me");

	return (
		<div className="flex justify-center">
			<Chip href={`${pathname}/projects`}>{t("projectsbutton")}</Chip>
			<Chip href={`${pathname}/experience`}>{t("experiencebutton")}</Chip>
		</div>
	);
};

export default SubPageChips;
