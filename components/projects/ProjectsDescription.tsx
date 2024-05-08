"use client";
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
interface ProjectsDescriptionProps {
	section: {
		title: string;
		description: string;
		mobileDescription?: string;
		githubLink?: string;
		projectID?: string;
	};
}
const ProjectsDescription = ({ section }: ProjectsDescriptionProps) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	return (
		<Typography
			sx={{
				fontSize: {
					xs: "0.75rem",
					sm: "0.875rem",
					md: "1rem",
				},
				color: "primary.contrastText",
			}}
		>
			{(isMobile && section.mobileDescription) || section.description}
		</Typography>
	);
};

export default ProjectsDescription;
