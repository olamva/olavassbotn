"use client";
import { useColorMode } from "@/contexts/ThemeModeProvider";
import { Paper } from "@mui/material";
import { ReactNode } from "react";

interface AboutMePaperProps {
	children: ReactNode;
}
const AboutMePaper = ({ children }: AboutMePaperProps) => {
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

export default AboutMePaper;
