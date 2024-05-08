"use client";
import { useColorMode } from "@/contexts/ThemeModeProvider";
import { useToggleStates } from "@/contexts/ToggleStatesProvider";
import useDrawerList from "@/hooks/useDrawerList";
import { SwipeableDrawer } from "@mui/material";

export default function NavDrawer() {
	const { openDrawer, toggleDrawer } = useToggleStates();
	const { mode } = useColorMode();
	const drawerList = useDrawerList();
	return (
		<SwipeableDrawer
			open={openDrawer}
			onOpen={toggleDrawer(true)}
			onClose={toggleDrawer(false)}
			sx={{
				"& .MuiDrawer-paper": {
					backgroundColor:
						mode === "dark" ? "primary.dark" : "primary.light",
				},
			}}
		>
			{drawerList}
		</SwipeableDrawer>
	);
}
