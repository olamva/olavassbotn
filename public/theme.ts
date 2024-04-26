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
						main: "rgb(20, 20, 20)",
						contrastText: "rgb(225, 225, 225)",
					},
					background: {
						default: "rgb(15, 15, 15)",
					},
				},
			});
	}
};
