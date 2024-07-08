"use client";
import { useColorMode } from "@/contexts/ThemeModeProvider";
import { useToggleStates } from "@/contexts/ToggleStatesProvider";
import { KeyboardControlKey } from "@mui/icons-material";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import { Box, Typography } from "@mui/material";

interface SearchShortcutProps {
	INNER_BORDER_RADIUS: number;
	FONT_SIZE: number;
}
const SearchShortcut = ({
	INNER_BORDER_RADIUS,
	FONT_SIZE,
}: SearchShortcutProps) => {
	const { isMac } = useToggleStates();
	const { mode } = useColorMode();
	return (
		<Box
			bgcolor={mode == "dark" ? "primary.dark" : "primary.light"}
			display="flex"
			flexDirection="row"
			px={0.7}
			py={0.3}
			borderRadius={INNER_BORDER_RADIUS}
			sx={{
				border: "1px solid",
				borderColor: "primary.light",
			}}
			mx={0.3}
			alignItems={"center"}
		>
			{isMac ? (
				<KeyboardCommandKeyIcon
					sx={{
						color: "primary.contrastText",
						fontSize: FONT_SIZE,
					}}
				/>
			) : (
				<KeyboardControlKey
					sx={{
						color: "primary.contrastText",
						fontSize: FONT_SIZE,
					}}
				/>
			)}

			<Typography color="primary.contrastText" fontSize={FONT_SIZE}>
				K
			</Typography>
		</Box>
	);
};

export default SearchShortcut;
