"use client";
import { useColorMode } from "@/contexts/ThemeModeProvider";
import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
function ThemeToggle() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const { toggleColorMode, mode } = useColorMode();
	return (
		<IconButton
			onClick={toggleColorMode}
			sx={{
				color: "primary.contrastText",
			}}
		>
			{mode === "dark" ? (
				<DarkMode sx={{ fontSize: isMobile ? "15px" : "20px" }} />
			) : (
				<LightMode sx={{ fontSize: isMobile ? "15px" : "20px" }} />
			)}
		</IconButton>
	);
}
export default ThemeToggle;
