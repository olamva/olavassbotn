"use client";
import { ThemesPaper } from "@/app/types/default";
import { useDevMode } from "@/contexts/DevModeProvider";
import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslations } from "next-intl";

export default function Themes() {
	const t = useTranslations("Themes");
	const theme = useTheme();
	const papers: ThemesPaper[] = [
		{ label: "Primary Main", color: theme.palette.primary.main },
		{ label: "Primary Dark", color: theme.palette.primary.dark },
		{ label: "Primary Light", color: theme.palette.primary.light },
		{
			label: "Primary Contrast Text",
			color: theme.palette.primary.contrastText,
			textColor: theme.palette.secondary.contrastText,
		},
		{ label: "Secondary Main", color: theme.palette.secondary.main },
		{ label: "Secondary Dark", color: theme.palette.secondary.dark },
		{ label: "Secondary Light", color: theme.palette.secondary.light },
		{
			label: "Secondary Contrast Text",
			color: theme.palette.secondary.contrastText,
		},
	];
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
				{papers.map((paper, index) => (
					<Grid key={index} item xs={12} md={6}>
						<Paper
							sx={{
								backgroundColor: paper.color,
								padding: 2,
								marginBottom: 2,
							}}
						>
							<Typography
								variant="body1"
								color={
									paper.textColor ?? "primary.contrastText"
								}
								sx={{
									fontSize: {
										xs: "0.75rem",
										sm: "0.875rem",
										md: "1rem",
									},
								}}
							>
								{paper.label}: {paper.color}
							</Typography>
						</Paper>
					</Grid>
				))}
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
