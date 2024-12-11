import { ExperiencelistItems } from "@/data/ExperienceGridData";
import { Experience } from "@/types/default";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
export const useExperienceList = (): Experience[] => {
	const t = useTranslations("Experience");
	const experienceList = useMemo(() => {
		return ExperiencelistItems.map((item, index) => {
			const title = t(`${index}.title`);
			const hasDescription = t(`${index}.hasDescription`);
			const description =
				hasDescription === "true"
					? t(`${index}.description`)
					: undefined;
			const experience: Experience = {
				...item,
				title: title || `Missing title for ${index}`,
				description,
				imgs: item.imgs.map((img) => ({ ...img })),
			};
			return experience;
		});
	}, [t]);
	return experienceList;
};
