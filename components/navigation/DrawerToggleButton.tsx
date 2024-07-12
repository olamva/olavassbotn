"use client";
import { useToggleStates } from "@/contexts/ToggleStatesProvider";
import Menu from "@/public/icons/menu";

const DrawerToggleButton = () => {
	const { toggleDrawer } = useToggleStates();
	return (
		<div
			onClick={toggleDrawer(true)}
			className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300 rounded-full cursor-pointer  transition-colors h-fit"
		>
			<Menu />
		</div>
	);
};

export default DrawerToggleButton;
