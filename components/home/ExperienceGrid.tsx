"use client";
import { useExperienceList } from "@/hooks/useExperienceList";
import Masonry from "@mui/lab/Masonry";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import ExperienceCard from "./ExperienceCard";

const ExperienceGrid = () => {
	const theme = useTheme();
	const experienceList = useExperienceList();
	const matches = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Box p={2} maxWidth={matches ? "80%" : "65%"} m={"auto"}>
			<Masonry
				columns={matches ? 1 : 2}
				sx={{ m: 0, width: "100%" }}
				spacing={2}
			>
				{experienceList.map((item, index) => (
					<ExperienceCard key={index} experience={item} />
				))}
			</Masonry>
		</Box>
	);
};
export default ExperienceGrid;
