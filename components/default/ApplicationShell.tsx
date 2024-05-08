"use client";
import DevModeProvider from "@/contexts/DevModeProvider";
import ThemeModeProvider from "@/contexts/ThemeModeProvider";
import ToggleStatesProvider from "@/contexts/ToggleStatesProvider";
import { makeThemeWithMode } from "@/public/theme";
import { ThemeProvider } from "@emotion/react";
import { PaletteMode } from "@mui/material";
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

	const [openDrawer, setOpenDrawer] = useState(false);
	const [openMenu, setOpenMenu] = useState<boolean>(false);

	const [isMac, setIsMac] = useState(false);
	useEffect(() => {
		setIsMac(
			typeof window !== "undefined"
				? navigator.userAgent.toUpperCase().indexOf("MAC") >= 0
				: false
		);

		function handleKeyDown(e: KeyboardEvent) {
			if ((isMac ? e.metaKey : e.ctrlKey) && e.key === "k") {
				e.preventDefault();
				e.stopPropagation();

				setOpenMenu((currentValue) => {
					return !currentValue;
				});
			}
		}

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isMac]);

	const toggleDrawer = useMemo(
		() => (newOpen: boolean) => () => {
			setOpenDrawer(newOpen);
		},
		[]
	);
	return (
		<ThemeModeProvider mode={mode} setMode={setMode}>
			<DevModeProvider mode={devMode} setMode={setDevMode}>
				<ThemeProvider theme={theme}>
					<ToggleStatesProvider
						toggleDrawer={toggleDrawer}
						openDrawer={openDrawer}
						openMenu={openMenu}
						setOpenMenu={setOpenMenu}
						isMac={isMac}
					>
						{children}
					</ToggleStatesProvider>
				</ThemeProvider>
			</DevModeProvider>
		</ThemeModeProvider>
	);
}
