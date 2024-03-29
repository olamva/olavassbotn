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
				sx={{
					color: theme.palette.secondary.main,
					fontSize: {
						xs: "2.5rem", // smaller screens
						sm: "3rem", // small screens
						md: "4rem", // medium screens
						lg: "5rem", // large screens
					},
				}}
			>
				{t("title")}
			</Typography>
			<Typography
				variant="h4"
				align="center"
				mb={2}
				mt={1}
				sx={{
					color: theme.palette.primary.light,
					fontWeight: "light",
					fontSize: {
						xs: "1.25rem", // smaller screens
						sm: "1.5rem", // small screens
						md: "1.75rem", // medium screens
						lg: "2rem", // large screens
					},
				}}
			>
				{t("subtitle")}
			</Typography>
			<Divider
				sx={{
					my: 1,
					width: "80%",
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
					fontSize: {
						xs: "1.25rem", // smaller screens
						sm: "1.5rem", // small screens
						md: "1.75rem", // medium screens
						lg: "2rem", // large screens
					},
				}}
			>
				{t("experienceTitle")}
			</Typography>
			<ExperienceGrid />
		</>
	);
}
