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
				color: theme.palette.primary.contrastText,
				fontSize: {
					xs: "2.5rem",
					sm: "3rem",
					md: "4rem",
					lg: "5rem",
				},
			}}
		>
			TODO PROJECTS
		</Typography>
	);
}
