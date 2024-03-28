"use client";
import { useColorMode } from "@/contexts/ThemeModeProvider";
import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";
function ThemeToggle() {
	const { toggleColorMode, mode } = useColorMode();
	return (
		<IconButton onClick={toggleColorMode} color="inherit">
			{mode === "dark" ? <DarkMode /> : <LightMode />}
		</IconButton>
	);
}
export default ThemeToggle;
