"use client";
import Chip from "@/components/about-me/Chip";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const SubPageChips = () => {
	const router = useRouter();
	const pathname = usePathname();
	const t = useTranslations("About Me");

	return (
		<div className="flex justify-center">
			<Chip onClick={() => router.push(`${pathname}/projects`)}>
				{t("projectsbutton")}
			</Chip>
			<Chip onClick={() => router.push(`${pathname}/experience`)}>
				{t("experiencebutton")}
			</Chip>
		</div>
	);
};

export default SubPageChips;
