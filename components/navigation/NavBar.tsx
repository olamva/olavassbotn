"use client";
import theme from "@/public/theme";
import { Menu } from "@mui/icons-material";
import { Button } from "@mui/material";
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
			<Button
				onClick={toggleDrawer(true)}
				sx={{
					color: theme.palette.secondary.main,
					marginTop: "1rem",
					marginLeft: "1rem",
				}}
			>
				<Menu />
			</Button>
			{
				// TODO Add a button that onClick changes from light mode to dark mode
			}
			{
				// TODO Add a button that onClick changes language from english to norwegian
			}
		</>
	);
}
