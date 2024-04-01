import NavDrawer from "@/components/navigation/NavDrawer";
import LangToggle from "@/components/toggles/LangToggle";
import ThemeToggle from "@/components/toggles/ThemeToggle";
import { Home, Menu } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
export default function NavBar() {
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
				sx={{ backgroundColor: "background.default" }}
				elevation={0}
			>
				<Toolbar>
					<Box>
						<IconButton
							onClick={toggleDrawer(true)}
							sx={{
								color: "primary.contrastText",
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
									color: "primary.contrastText",
								}}
							>
								<Home />
							</IconButton>
						</Link>
					</Box>
					<Box
						sx={{
							flexGrow: 1,
						}}
					></Box>
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
