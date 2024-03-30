import { ExperiencelistItems } from "@/app/data/ExperienceGridData";
import { Experience } from "@/app/types/default";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslations } from "next-intl";

export const useExperienceList = (): Experience[] => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("sm"));
	const t = useTranslations("experience");
	let experienceList: Experience[] = ExperiencelistItems.map(
		(item, index) => {
			const experience: Experience = {
				...item,
				title: t(`${index}.title`),
				imgs: item.imgs.map((img) => ({
					...img,
					src: matches && img.darkSrc ? img.darkSrc : img.src,
				})),
			};
			const hasDescription = t(`${index}.hasDescription`);
			if (hasDescription === "true") {
				experience.description = t(`${index}.description`);
			}
			return experience;
		}
	);
	return experienceList;
};
