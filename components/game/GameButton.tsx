"use client";
import { useToggleStates } from "@/contexts/ToggleStatesProvider";
import { Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface GameButtonProps {
	section: {
		title: string;
		description: string;
		mobileDescription?: string;
		githubLink?: string;
		projectID?: string;
	};
}
const GameButton = ({ section }: GameButtonProps) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const { setOverride } = useToggleStates();
	return (
		isMobile &&
		section.mobileDescription && (
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
