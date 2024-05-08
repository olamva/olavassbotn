"use client";
import { useColorMode } from "@/contexts/ThemeModeProvider";
import { Paper } from "@mui/material";

interface ProjectsPaperProps {
	children: React.ReactNode;
}

const ProjectsPaper = ({ children }: ProjectsPaperProps) => {
	const { mode } = useColorMode();
	return (
		<Paper
			elevation={3}
			sx={{
				display: "flex",
				flexDirection: "column",
				height: "100%",
				p: 3,
				backgroundColor:
					mode == "dark" ? "primary.dark" : "primary.light",
			}}
		>
			{children}
		</Paper>
	);
};

export default ProjectsPaper;
