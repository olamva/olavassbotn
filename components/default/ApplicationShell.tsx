"use client";
import DevModeProvider from "@/contexts/DevModeProvider";
import ToggleStatesProvider from "@/contexts/ToggleStatesProvider";
import { ReactNode, useEffect, useState } from "react";

const ApplicationShell = ({
	children,
	savedDevMode,
}: {
	children: ReactNode;
	savedDevMode: boolean;
}) => {
	const [devMode, setDevMode] = useState<boolean>(savedDevMode);
	const [openDrawer, setOpenDrawer] = useState(false);
	const [openMenu, setOpenMenu] = useState<boolean>(false);
	const [override, setOverride] = useState<boolean>(false);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key === "k") {
				e.preventDefault();
				e.stopPropagation();

				setOpenMenu((currentValue) => !currentValue);
			}
			if (e.key === "Escape") {
				return setOpenMenu(false);
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => document.removeEventListener("keydown", handleKeyDown);
	}, []);
	return (
		<DevModeProvider mode={devMode} setMode={setDevMode}>
			<ToggleStatesProvider
				setOpenDrawer={setOpenDrawer}
				openDrawer={openDrawer}
				openMenu={openMenu}
				setOpenMenu={setOpenMenu}
				override={override}
				setOverride={setOverride}
			>
				{children}
			</ToggleStatesProvider>
		</DevModeProvider>
	);
};

export default ApplicationShell;
