
import { ThemesPaper } from "@/app/types/default";
import { Grid, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ThemesGrid = () => {
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
		{
			label: "Background Default",
			color: theme.palette.background.default,
		},
	];
	return papers.map((paper, index) => (
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
					color={paper.textColor ?? "primary.contrastText"}
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
	));
};

export default ThemesGrid;
