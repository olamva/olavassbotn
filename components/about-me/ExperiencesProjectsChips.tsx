"use client";
import { Box, Chip } from "@mui/material";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const ExperienceProjectsChips = () => {
	const router = useRouter();
	const pathname = usePathname();
	const t = useTranslations("About Me");

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Chip
				onClick={() => router.push(`${pathname}/projects`)}
				size="medium"
				variant="outlined"
				label={t("projectsbutton")}
				sx={{ mx: 2 }}
			/>
			<Chip
				onClick={() => router.push(`${pathname}/experience`)}
				size="medium"
				variant="outlined"
				label={t("experiencebutton")}
			/>
		</Box>
	);
};

export default ExperienceProjectsChips;
