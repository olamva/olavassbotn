"use client";
import Template from "@/components/default/template";
import ThemeModeProvider from "@/contexts/ThemeModeProvider";
import { makeThemeWithMode } from "@/public/theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, PaletteMode } from "@mui/material";
import { useMemo, useState } from "react";

export default function ApplicationShell({
	children,
}: {
	children: React.ReactNode;
}) {
	const [mode, setMode] = useState<PaletteMode>("light");
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
