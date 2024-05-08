import AboutMeGrid from "@/components/about-me/AboutMeGrid";
import ExperiencesProjectsChips from "@/components/about-me/ExperiencesProjectsChips";
import { Box, Container, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function AboutMe() {
	const t = useTranslations("About Me");
	return (
		<Container maxWidth="lg">
			<Box sx={{ my: 4 }}>
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
					gutterBottom
				>
					{t("title")}
				</Typography>
				<ExperiencesProjectsChips />
				<AboutMeGrid />
			</Box>
		</Container>
	);
}
