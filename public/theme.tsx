import { Theme, createTheme } from "@mui/material/styles";
export const makeThemeWithMode = (mode: "light" | "dark"): Theme => {
	switch (mode) {
		case "light":
			return createTheme({
				palette: {
					mode: mode,
					primary: {
						main: "rgb(211,212,200)",
					},
					secondary: {
						main: "rgb(98, 105, 80)",
					},
					background: {
						default: "rgb(240, 241, 231)",
					},
				},
			});
		case "dark":
			return createTheme({
				palette: {
					mode: mode,
					primary: {
						main: "rgb(98, 105, 80)",
					},
					secondary: {
						main: "rgb(179, 187, 157)",
					},
					background: {
						default: "rgb(33, 35, 27)",
					},
				},
			});
	}
};
