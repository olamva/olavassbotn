"use client";
import ExperienceGrid from "@/components/home/ExperienceGrid";
import { Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslations } from "next-intl";

type HomePageProps = {
	params: { locale: string };
};

export default function Home({ params: { locale } }: HomePageProps) {
	const t = useTranslations("HomePage");
	const theme = useTheme();
	return (
		<>
			<Typography
				variant="h1"
				align="center"
				sx={{ color: theme.palette.secondary.main }}
			>
				{t("title")}
			</Typography>
			<Typography
				variant="h4"
				align="center"
				marginBottom={2}
				sx={{
					color: theme.palette.primary.light,
					fontWeight: "light",
				}}
			>
				{t("subtitle")}
			</Typography>
			<Divider
				sx={{
					my: 1,
					width: "60%",
					margin: "auto",
				}}
				color={theme.palette.secondary.light}
			/>
			<Typography
				variant="h4"
				align="center"
				marginTop={2}
				sx={{
					color: theme.palette.secondary.main,
					fontWeight: "bold",
				}}
			>
				{t("experienceTitle")}
			</Typography>
			<ExperienceGrid />
		</>
	);
}
