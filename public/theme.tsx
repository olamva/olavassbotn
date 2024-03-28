"use client";
import { Theme, createTheme } from "@mui/material/styles";

export const makeThemeWithMode = (mode: "light" | "dark"): Theme => {
	return createTheme({
		palette: {
			mode: mode,
		},
	});
};

export const theme = createTheme({
	palette: {
		mode: "dark",
	},
});
