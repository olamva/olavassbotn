"use client";
import Menu from "@/assets/Menu";
import { useToggleStates } from "@/contexts/ToggleStatesProvider";

const DrawerToggleButton = () => {
	const { setOpenDrawer } = useToggleStates();
	return (
		<button
			onClick={() => setOpenDrawer(true)}
			className="h-fit transition-colors hover:text-gray-500 dark:hover:text-gray-300"
		>
			<Menu />
		</button>
	);
};

export default DrawerToggleButton;
