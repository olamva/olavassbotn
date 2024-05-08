import { useColorMode } from "@/contexts/ThemeModeProvider";
import { Card } from "@mui/material";
import { ReactNode } from "react";

interface DarkModeCardProps {
	children: ReactNode;
}
const DarkModeCard = ({ children }: DarkModeCardProps) => {
	const { mode } = useColorMode();
	return (
		<Card
			sx={{
				backgroundColor:
					mode == "dark" ? "primary.dark" : "primary.light",
			}}
			elevation={3}
		>
			{children}
		</Card>
	);
};

export default DarkModeCard;
