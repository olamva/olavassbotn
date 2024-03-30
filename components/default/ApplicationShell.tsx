"use client";
import Template from "@/components/default/Template";
import ThemeModeProvider from "@/contexts/ThemeModeProvider";
import { makeThemeWithMode } from "@/public/theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, PaletteMode } from "@mui/material";
import Cookies from "js-cookie";
import { useEffect, useMemo, useState } from "react";

export default function ApplicationShell({
	children,
	savedMode,
}: {
	children: React.ReactNode;
	savedMode: PaletteMode;
}) {
	const [mode, setMode] = useState<PaletteMode>(savedMode);
	useEffect(() => {
		Cookies.set("themeMode", mode);
	}, [mode, savedMode]);
	const theme = useMemo(() => makeThemeWithMode(mode), [mode]);
	return (
		<ThemeModeProvider mode={mode} setMode={setMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<body>
					<Template>{children}</Template>
				</body>
			</ThemeProvider>
		</ThemeModeProvider>
	);
}
