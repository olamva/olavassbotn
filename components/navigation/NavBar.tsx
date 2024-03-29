"use client";
import LangToggle from "@/components/default/LangToggle";
import { Home, Menu } from "@mui/icons-material";
import { Box, IconButton, useTheme } from "@mui/material";
import { useLocale } from "next-intl";
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
	const locale = useLocale();
	const pathname = usePathname();
	return (
		<>
			<NavDrawer toggleDrawer={toggleDrawer} open={open} />
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					margin: "1rem",
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
						href={pathname == "/" + locale ? "" : "/" + locale}
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
