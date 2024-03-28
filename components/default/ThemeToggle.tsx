"use client";
import { useColorMode } from "@/contexts/ThemeModeProvider";
import { Home, Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
function ThemeToggle() {
	const { toggleColorMode, mode } = useColorMode();
	return (
		<IconButton onClick={toggleColorMode} color="inherit">
			{mode === "dark" ? <Home /> : <Menu />}
		</IconButton>
	);
}
export default ThemeToggle;
