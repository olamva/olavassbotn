import GameButton from "@/components/game/GameButton";
import ProjectsDescription from "@/components/projects/ProjectsDescription";
import ProjectsPaper from "@/components/projects/ProjectsPaper";
import { GitHub } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const ProjectsGrid = () => {
	const t = useTranslations("Projects");
	return (
		<Grid container spacing={3} my={2}>
			{t.raw("projects").map(
				(
					section: {
						title: string;
						description: string;
						mobileDescription?: string;
						githubLink?: string;
						projectID?: string;
					},
					index: number
				) => (
					<Grid item xs={12} md={6} key={index}>
						<ProjectsPaper>
							<Typography
								variant="h5"
								color={"primary.contrastText"}
								sx={{
									fontSize: {
										xs: "1rem",
										sm: "1.5rem",
										md: "2rem",
									},
								}}
								gutterBottom
							>
								{section.title}
							</Typography>
							<ProjectsDescription section={section} />
							{section.mobileDescription && <GameButton />}
							{section.githubLink && (
								<Button
									href={`https://github.com/olamva/${section.projectID}`}
									target="_blank"
									rel="noopener noreferrer"
									variant="contained"
									color="primary"
									startIcon={<GitHub />}
									autoCapitalize={undefined}
									sx={{
										mt: 2,
										alignSelf: "center",
										alignItems: "center",
										textTransform: "none",
									}}
								>
									<Typography>
										{section.githubLink}
									</Typography>
								</Button>
							)}
						</ProjectsPaper>
					</Grid>
				)
			)}
		</Grid>
	);
};

export default ProjectsGrid;
