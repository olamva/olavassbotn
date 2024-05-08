"use client";
import { useToggleStates } from "@/contexts/ToggleStatesProvider";
import { Button } from "@mui/material";
import { ReactNode } from "react";

interface SearchFieldButtonProps {
	children: ReactNode;
	outerBorderRadius: number;
}
const SearchFieldButton = ({
	children,
	outerBorderRadius,
}: SearchFieldButtonProps) => {
	const { setOpenMenu } = useToggleStates();
	return (
		<Button
			sx={{
				textTransform: "none",
				borderRadius: outerBorderRadius,
				padding: 0.5,
			}}
			onClick={() => setOpenMenu(true)}
		>
			{children}
		</Button>
	);
};

export default SearchFieldButton;
