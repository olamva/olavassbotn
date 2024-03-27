"use client";
import AchievementsGrid from "@/components/home/AchievementsGrid";
import NavBar from "@/components/navigation/NavBar";
import { Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

export default function Home() {
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};
	return (
		<>
			<NavBar />
			<Typography
				variant="h1"
				align="center"
				sx={{ color: theme.palette.secondary.main }}
			>
				Ola Munthe Vassbotn
			</Typography>
			<Typography
				variant="h4"
				align="center"
				marginBottom={2}
				sx={{ color: theme.palette.primary.light, fontWeight: "light" }}
			>
				Bachelor of Informatics at NTNU
			</Typography>
			<Divider
				sx={{
					my: 1,
					width: "60%",
					margin: "auto",
				}}
				color={theme.palette.secondary.light}
			/>
			<Typography
				variant="h4"
				align="center"
				marginTop={2}
				sx={{
					color: theme.palette.secondary.main,
					fontWeight: "bold",
				}}
			>
				Experience:
			</Typography>
			<AchievementsGrid />
		</>
	);
}
