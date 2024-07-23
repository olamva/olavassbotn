"use client";
import { useToggleStates } from "@/contexts/ToggleStatesProvider";
import useDrawerList from "@/hooks/useDrawerList";
import { useEffect, useRef } from "react";

const Drawer = () => {
	const drawerRef = useRef<HTMLDivElement>(null);
	const drawerList = useDrawerList();
	const { openDrawer, setOpenDrawer } = useToggleStates();

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				drawerRef.current &&
				!drawerRef.current.contains(event.target as Node)
			) {
				setOpenDrawer(false);
			}
		};

		if (openDrawer) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [openDrawer, setOpenDrawer]);

	return (
		<div
			ref={drawerRef}
			className={`fixed z-10 h-full transform shadow transition-transform duration-300 ease-in-out ${
				openDrawer ? "translate-x-0" : "-translate-x-full"
			}`}
		>
			<div className="bg-default flex h-full max-w-48 flex-col text-left md:max-w-64">
				{drawerList}
			</div>
		</div>
	);
};

export default Drawer;
