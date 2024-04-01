import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
export default function Home() {
	const t = useTranslations("Themes");
	const papers = [
		{ label: "Primary Main", color: "primary.main" },
		{ label: "Primary Dark", color: "primary.dark" },
		{ label: "Primary Light", color: "primary.light" },
		{
			label: "Primary Contrast Text",
			color: "primary.contrastText",
		},
		{ label: "Secondary Main", color: "secondary.main" },
		{ label: "Secondary Dark", color: "secondary.dark" },
		{ label: "Secondary Light", color: "secondary.light" },
		{
			label: "Secondary Contrast Text",
			color: "secondary.contrastText",
		},
	];
	return (
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
								color="primary.contrastText"
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
	);
}
