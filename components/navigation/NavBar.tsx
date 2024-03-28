"use client";
import LangToggle from "@/components/default/LangToggle";
import { Home, Menu } from "@mui/icons-material";
import { Box, IconButton, useTheme } from "@mui/material";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "../default/ThemeToggle";
import NavDrawer from "./NavDrawer";
export default function NavBar() {
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};
	const pathname = usePathname();
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
				<Box>
					<IconButton
						onClick={toggleDrawer(true)}
						sx={{
							color: theme.palette.secondary.main,
						}}
					>
						<Menu />
					</IconButton>
					<IconButton
						href={pathname == "/no" || pathname == "/en" ? "" : "/"}
						sx={{
							color: theme.palette.secondary.main,
						}}
					>
						<Home />
					</IconButton>
				</Box>

				<Box>
					<ThemeToggle />
					<LangToggle />
				</Box>
			</Box>
		</>
	);
}
