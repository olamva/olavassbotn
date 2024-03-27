"use client";
import {
	AppBar,
	Box,
	Button,
	Card,
	CardContent,
	Grid,
	Toolbar,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { Menu } from "@mui/icons-material";
import DrawerThing from "@/components/navigation/DrawerThing";
import { useTheme } from "@mui/material/styles";
import fagkomLogo from "@/public/fagkom.png";
import onlineLogo from "@/public/Online_bla_o.svg";
import Image from "next/image";
import AchievementsGrid from "@/components/home/AchievementsGrid";

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
