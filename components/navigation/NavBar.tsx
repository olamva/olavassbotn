import LangToggle from "@/components/toggles/LangToggle";
import { Home, Menu } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar, useTheme } from "@mui/material";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "../toggles/ThemeToggle";
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
			<AppBar
				position="fixed"
				sx={{ backgroundColor: theme.palette.background.default }}
				elevation={0}
			>
				<Toolbar>
					<Box
						sx={{
							flexGrow: 1,
							display: "flex",
							alignItems: "center",
						}}
					>
						<IconButton
							onClick={toggleDrawer(true)}
							sx={{
								color: theme.palette.primary.contrastText,
							}}
						>
							<Menu />
						</IconButton>
						<Link
							style={{ width: "100%" }}
							href={pathname == "/" + locale ? "" : "/" + locale}
						>
							<IconButton
								sx={{
									color: theme.palette.primary.contrastText,
								}}
							>
								<Home />
							</IconButton>
						</Link>
					</Box>
					<Box>
						<ThemeToggle />
						<LangToggle />
					</Box>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</>
	);
}
