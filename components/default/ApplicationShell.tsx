"use client";
import DevModeProvider from "@/contexts/DevModeProvider";
import ToggleStatesProvider from "@/contexts/ToggleStatesProvider";
import Cookies from "js-cookie";
import { ReactNode, useEffect, useState } from "react";

export default function ApplicationShell({
	children,
	savedDevMode,
}: {
	children: ReactNode;
	savedDevMode: boolean;
}) {
	const [devMode, setDevMode] = useState<boolean>(savedDevMode);
	useEffect(() => {
		Cookies.set("devMode", String(devMode));
	}, [devMode]);

	const [openDrawer, setOpenDrawer] = useState(false);
	const [openMenu, setOpenMenu] = useState<boolean>(false);
	const [override, setOverride] = useState<boolean>(false);

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
			if (e.key === "Escape") {
				return setOpenMenu(false);
			}
		}

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isMac]);
	return (
		<DevModeProvider mode={devMode} setMode={setDevMode}>
			<ToggleStatesProvider
				setOpenDrawer={setOpenDrawer}
				openDrawer={openDrawer}
				openMenu={openMenu}
				setOpenMenu={setOpenMenu}
				isMac={isMac}
				override={override}
				setOverride={setOverride}
			>
				{children}
			</ToggleStatesProvider>
		</DevModeProvider>
	);
}
