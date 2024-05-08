"use client";
import ExperienceCard from "@/components/experience/ExperienceCard";
import { useExperienceList } from "@/hooks/useExperienceList";
import Masonry from "@mui/lab/Masonry";
import { useMediaQuery, useTheme } from "@mui/material";

const ExperienceGrid = () => {
	const theme = useTheme();
	const experienceList = useExperienceList();
	const matches = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Masonry
			columns={matches ? 1 : 2}
			sx={{ m: 0, width: "100%" }}
			spacing={2}
		>
			{experienceList.map((item, index) => (
				<ExperienceCard key={index} experience={item} />
			))}
		</Masonry>
	);
};
export default ExperienceGrid;
