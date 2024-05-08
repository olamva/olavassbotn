"use client";
import { Divider, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ReactNode } from "react";

interface AlternatingDividerProps {
	children: ReactNode;
	index: number;
}
const AlternatingDivider = ({ children, index }: AlternatingDividerProps) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));
	return (
		<Divider
			textAlign={matches ? "left" : index & 1 ? "right" : "left"}
			sx={{
				"&::before, &::after": {
					borderColor: "primary.contrastText",
				},
			}}
		>
			{children}
		</Divider>
	);
};

export default AlternatingDivider;
