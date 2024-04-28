"use client";
import Template from "@/components/default/Template";
import DevModeProvider from "@/contexts/DevModeProvider";
import ThemeModeProvider from "@/contexts/ThemeModeProvider";
import { makeThemeWithMode } from "@/public/theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, PaletteMode } from "@mui/material";
import Cookies from "js-cookie";
import { useEffect, useMemo, useState } from "react";

export default function ApplicationShell({
	children,
	savedMode,
	savedDevMode,
}: {
	children: React.ReactNode;
	savedMode: PaletteMode;
	savedDevMode: boolean;
}) {
	const [mode, setMode] = useState<PaletteMode>(savedMode);
	const [devMode, setDevMode] = useState<boolean>(savedDevMode);
	useEffect(() => {
		Cookies.set("themeMode", mode);
	}, [mode]);
	useEffect(() => {
		Cookies.set("devMode", String(devMode));
	}, [devMode]);
	const theme = useMemo(() => makeThemeWithMode(mode), [mode]);
	return (
		<ThemeModeProvider mode={mode} setMode={setMode}>
			<DevModeProvider mode={devMode} setMode={setDevMode}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<body>
						<Template>{children}</Template>
					</body>
				</ThemeProvider>
			</DevModeProvider>
		</ThemeModeProvider>
	);
}
