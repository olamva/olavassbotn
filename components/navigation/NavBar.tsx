import DrawerToggleButton from "@/components/navigation/DrawerToggleButton";
import NavBreadcrumbs from "@/components/navigation/NavBreadcrumbs";
import SearchField from "@/components/navigation/SearchField";
import LangToggle from "@/components/toggles/LangToggle";
import ThemeToggle from "@/components/toggles/ThemeToggle";
import { Box, Toolbar } from "@mui/material";
export default function NavBar() {
	return (
		<>
			<Toolbar sx={{ p: 0.5 }}>
				<Box display="flex" alignItems="center">
					<DrawerToggleButton />
				</Box>
				<Box flexGrow={1}></Box>
				<Box>
					<SearchField />
					<ThemeToggle />
					<LangToggle />
				</Box>
			</Toolbar>
			<NavBreadcrumbs />
		</>
	);
}
