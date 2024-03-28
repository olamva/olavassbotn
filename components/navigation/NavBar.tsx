"use client";
import LangToggle from "@/components/default/LangToggle";
import { Menu } from "@mui/icons-material";
import { Box, IconButton, useTheme } from "@mui/material";
import { useState } from "react";
import NavDrawer from "./NavDrawer";
export default function Home() {
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};
	return (
		<>
			<NavDrawer toggleDrawer={toggleDrawer} open={open} />
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginTop: "1rem",
					marginLeft: "1rem",
					marginRight: "1rem",
				}}
			>
				<IconButton
					onClick={toggleDrawer(true)}
					sx={{
						color: theme.palette.secondary.main,
					}}
				>
					<Menu />
				</IconButton>
				<LangToggle />
			</Box>
			{
				// TODO Add a button that onClick changes from light mode to dark mode
			}
		</>
	);
}
