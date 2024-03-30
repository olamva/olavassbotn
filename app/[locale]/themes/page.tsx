"use client";
import { Box, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
export default function Home() {
	const theme = useTheme();
	const papers = [
		{ label: "Primary Main", color: theme.palette.primary.main },
		{ label: "Primary Dark", color: theme.palette.primary.dark },
		{ label: "Primary Light", color: theme.palette.primary.light },
		{
			label: "Primary Contrast Text",
			color: theme.palette.primary.contrastText,
		},
		{ label: "Secondary Main", color: theme.palette.secondary.main },
		{ label: "Secondary Dark", color: theme.palette.secondary.dark },
		{ label: "Secondary Light", color: theme.palette.secondary.light },
		{
			label: "Secondary Contrast Text",
			color: theme.palette.secondary.contrastText,
		},
	];
	return (
		<Box p={2} maxWidth={"65%"} m={"auto"}>
			<Typography
				variant="h1"
				align="center"
				sx={{
					color: theme.palette.primary.contrastText,
					fontSize: {
						xs: "2.5rem",
						sm: "3rem",
						md: "4rem",
						lg: "5rem",
					},
				}}
			>
				Color Theme for This Website
			</Typography>
			{papers.map((paper, index) => (
				<Paper
					key={index}
					sx={{
						backgroundColor: paper.color,
						padding: 2,
						marginBottom: 2,
					}}
				>
					{paper.label}: {paper.color}
				</Paper>
			))}
		</Box>
	);
}
