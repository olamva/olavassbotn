"use client";
import AchievementsGrid from "@/components/home/AchievementsGrid";
import DrawerThing from "@/components/navigation/DrawerThing";
import { Menu } from "@mui/icons-material";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
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
			<DrawerThing toggleDrawer={toggleDrawer} open={open} />
			<AppBar
				sx={{ backgroundColor: theme.palette.primary.main }}
				position="sticky"
			>
				<Toolbar sx={{ color: theme.palette.primary.main }}>
					<Button
						onClick={toggleDrawer(true)}
						sx={{ color: theme.palette.secondary.main }}
					>
						<Menu />
					</Button>
				</Toolbar>
			</AppBar>
			<Typography
				variant="h1"
				align="center"
				sx={{ color: theme.palette.secondary.main }}
			>
				Ola Munthe Vassbotn
			</Typography>
			<Typography
				variant="h3"
				align="center"
				sx={{ color: theme.palette.primary.light, fontWeight: "light" }}
			>
				Student at NTNU
			</Typography>
			<AchievementsGrid />
		</>
	);
}
