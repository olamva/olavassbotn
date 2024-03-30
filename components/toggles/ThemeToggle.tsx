import { useColorMode } from "@/contexts/ThemeModeProvider";
import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
function ThemeToggle() {
	const { toggleColorMode, mode } = useColorMode();
	const theme = useTheme();
	return (
		<IconButton
			onClick={toggleColorMode}
			sx={{ color: theme.palette.primary.contrastText }}
		>
			{mode === "dark" ? <DarkMode /> : <LightMode />}
		</IconButton>
	);
}
export default ThemeToggle;
