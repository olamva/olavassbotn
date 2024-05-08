"use client";
import { useToggleStates } from "@/contexts/ToggleStatesProvider";
import { Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const DrawerToggleButton = () => {
	const { toggleDrawer } = useToggleStates();
	return (
		<IconButton
			onClick={toggleDrawer(true)}
			sx={{
				color: "primary.contrastText",
				mr: 1,
			}}
		>
			<Menu />
		</IconButton>
	);
};

export default DrawerToggleButton;
