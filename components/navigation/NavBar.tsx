"use client";
import theme from "@/public/theme";
import { Menu } from "@mui/icons-material";
import { AppBar, Button, Toolbar } from "@mui/material";
import { useState } from "react";
import NavDrawer from "./NavDrawer";

export default function Home() {
	const [open, setOpen] = useState(false);
	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};
	return (
		<>
			<NavDrawer toggleDrawer={toggleDrawer} open={open} />
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
		</>
	);
}
