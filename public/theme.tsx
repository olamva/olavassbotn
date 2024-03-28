"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#31363F",
			light: "#76ABAE",
			dark: "#31363F",
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
export default theme;
