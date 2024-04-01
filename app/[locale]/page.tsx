import ExperienceGrid from "@/components/home/ExperienceGrid";
import { Divider, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

type HomePageProps = {
	params: { locale: string };
};

export default function Home({ params: { locale } }: HomePageProps) {
	const t = useTranslations("HomePage");
	return (
		<>
			<Typography
				variant="h1"
				align="center"
				sx={{
					color: "primary.contrastText",
					fontSize: {
						xs: "2.5rem",
						sm: "3rem",
						md: "4rem",
						lg: "5rem",
					},
				}}
				fontWeight={400}
			>
				{t("title")}
			</Typography>
			<Typography
				variant="h4"
				align="center"
				sx={{
					color: "primary.contrastText",
					fontSize: {
						xs: "1.25rem",
						sm: "1.5rem",
						md: "1.75rem",
						lg: "2rem",
					},
				}}
				fontWeight={100}
				gutterBottom
			>
				{t("subtitle")}
			</Typography>
			<Divider
				sx={{
					my: 1,
					width: "80%",
					margin: "auto",
					backgroundColor: "primary.contrastText",
				}}
			/>
			<Typography
				variant="h4"
				align="center"
				marginTop={2}
				sx={{
					color: "primary.contrastText",
					fontSize: {
						xs: "1.25rem",
						sm: "1.5rem",
						md: "1.75rem",
						lg: "2rem",
					},
				}}
				fontWeight={700}
			>
				{t("experienceTitle")}
			</Typography>
			<ExperienceGrid />
		</>
	);
}
