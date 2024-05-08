"use client";
import { useToggleStates } from "@/contexts/ToggleStatesProvider";
import { Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const GameButton = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const { setOverride } = useToggleStates();
	return (
		isMobile && (
			<Button
				variant="contained"
				color="primary"
				sx={{
					mt: 2,
					alignSelf: "center",
				}}
				onClick={() => {
					setOverride(true);
				}}
			>
				Play Snake Game
			</Button>
		)
	);
};

export default GameButton;
