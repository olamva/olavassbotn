import { papers } from "@/app/data/ThemesData";
import { Grid, Paper, Typography } from "@mui/material";

const ThemesGrid = () => {
	return papers.map((paper, index) => (
		<Grid key={index} item xs={12} md={6}>
			<Paper
				sx={{
					backgroundColor: paper.color,
					padding: 2,
					marginBottom: 2,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
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
						textAlign: "center",
					}}
				>
					{paper.label}
				</Typography>
			</Paper>
		</Grid>
	));
};

export default ThemesGrid;
