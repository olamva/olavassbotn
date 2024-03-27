import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Divider,
	SwipeableDrawer,
	Drawer,
} from "@mui/material";
import { useState } from "react";

interface DrawerThingProps {
	toggleDrawer: Function;
	open: boolean;
}
export default function DrawerThing({ toggleDrawer, open }: DrawerThingProps) {
	const DrawerList = (
		<Box
			sx={{ width: 250 }}
			role="presentation"
			onClick={toggleDrawer(false)}
		>
			<List>
				{["Test1", "Test2", "Test3"].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{["Theodor"].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<SwipeableDrawer
			open={open}
			onOpen={toggleDrawer(true)}
			onClose={toggleDrawer(false)}
		>
			{DrawerList}
		</SwipeableDrawer>
	);
}
