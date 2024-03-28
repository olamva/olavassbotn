"use client";
import { Theme, createTheme } from "@mui/material/styles";

export const makeThemeWithMode = (mode: "light" | "dark"): Theme => {
	switch (mode) {
		case "light":
			return createTheme({
				palette: {
					mode: mode,
					primary: {
						main: "#C4C9CC", // Lighter shade for main color
						light: "#31363F", // Darker shade for light color
						dark: "#ECEFF1", // Lighter shade for dark color
						contrastText: "#222831", // Darker contrast text
					},
					secondary: {
						main: "#222831", // Darker shade for main color
						light: "#76ABAE", // Original light color from primary
					},
					background: {
						default: "#EEEEEE", // Lighter background
					},
				},
			});
		case "dark":
			return createTheme({
				palette: {
					mode: mode,
					primary: {
						main: "#31363F",
						light: "#76ABAE",
						dark: "#31363F",
						contrastText: "#EEEEEE",
					},
					secondary: {
						main: "#EEEEEE",
						light: "#085156",
					},
					background: {
						default: "#222831",
					},
				},
			});
	}
};
