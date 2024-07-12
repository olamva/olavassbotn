"use client";
import { useToggleStates } from "@/contexts/ToggleStatesProvider";
import Menu from "@/public/icons/Menu";

const DrawerToggleButton = () => {
	const { toggleDrawer } = useToggleStates();
	return (
		<button
			onClick={toggleDrawer(true)}
			className=" hover:text-gray-500 dark:hover:text-gray-300 rounded-full transition-colors h-fit"
		>
			<Menu />
		</button>
	);
};

export default DrawerToggleButton;
