"use client";
import ThemesGrid from "@/components/themes/ThemesGrid";
import { useDevMode } from "@/contexts/DevModeProvider";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function Themes() {
	const t = useTranslations("Themes");
	const { devMode } = useDevMode();
	return devMode ? (
		<Box p={2} maxWidth={"65%"} m={"auto"}>
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
			<Divider
				sx={{
					width: "80%",
					margin: "auto",
					backgroundColor: "primary.contrastText",
				}}
			/>
			<Grid container spacing={3} my={2}>
				<ThemesGrid />
			</Grid>
		</Box>
	) : (
		<Typography
			variant="h3"
			align="center"
			mt={30}
			width={"80%"}
			mx={"auto"}
		>
			{t("accessDenied")}
		</Typography>
	);
}
