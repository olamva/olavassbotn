"use client";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Home() {
	const theme = useTheme();
	return (
		<Typography
			variant="h1"
			align="center"
			sx={{
				color: theme.palette.secondary.main,
				fontSize: {
					xs: "2.5rem", // smaller screens
					sm: "3rem", // small screens
					md: "4rem", // medium screens
					lg: "5rem", // large screens
				},
			}}
		>
			TODO PROJECTS
		</Typography>
	);
}
