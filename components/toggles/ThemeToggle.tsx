"use client";
import { useColorMode } from "@/contexts/ThemeModeProvider";
import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
function ThemeToggle() {
	const theme = useTheme();
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
