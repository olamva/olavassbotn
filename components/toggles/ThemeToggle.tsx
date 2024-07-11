"use client";
import { useColorMode } from "@/contexts/ThemeModeProvider";
import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";
function ThemeToggle() {
	const { toggleColorMode, mode } = useColorMode();
	return (
		<IconButton
			onClick={toggleColorMode}
			sx={{
				color: "primary.contrastText",
				padding: "4px",
			}}
		>
			{mode === "dark" ? (
				<DarkMode sx={{ fontSize: "20px" }} />
			) : (
				<LightMode sx={{ fontSize: "20px" }} />
			)}
		</IconButton>
	);
}
export default ThemeToggle;
