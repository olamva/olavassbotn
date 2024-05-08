import AboutMePaper from "@/components/about-me/AboutMePaper";
import AlternatingDivider from "@/components/about-me/AlternatingDivider";
import { Grid, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const AboutMeGrid = () => {
	const t = useTranslations("About Me");
	return (
		<Grid container spacing={3} mb={7}>
			{t
				.raw("sections")
				.map(
					(
						section: { title: string; content: string },
						index: number
					) => (
						<Grid item xs={12} md={6} key={index} mb={4}>
							<AlternatingDivider index={index}>
								<Typography
									color="primary.contrastText"
									sx={{
										fontSize: {
											xs: "1rem",
											sm: "1.5rem",
											md: "2rem",
										},
									}}
								>
									{section.title}
								</Typography>
							</AlternatingDivider>
							<AboutMePaper>
								<Typography
									variant="body1"
									color="primary.contrastText"
									sx={{
										flexGrow: 1,
										fontSize: {
											xs: "0.75rem",
											sm: "0.875rem",
											md: "1rem",
										},
									}}
								>
									{section.content}
								</Typography>
							</AboutMePaper>
						</Grid>
					)
				)}
		</Grid>
	);
};
export default AboutMeGrid;
