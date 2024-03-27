"use client";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import styles from "./page.module.css";
import {
	AppBar,
	Box,
	Button,
	Card,
	CardContent,
	Divider,
	Drawer,
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	SwipeableDrawer,
	Toolbar,
	Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import { Menu } from "@mui/icons-material";
import DrawerThing from "@/components/DrawerThing";
import { useTheme } from "@mui/material/styles";

export default function Home() {
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};
	return (
		<>
			<DrawerThing toggleDrawer={toggleDrawer} open={open} />
			<AppBar
				sx={{ backgroundColor: theme.palette.primary.main }}
				position="sticky"
			>
				<Toolbar sx={{ color: theme.palette.primary.main }}>
					<Button
						onClick={toggleDrawer(true)}
						sx={{ color: theme.palette.secondary.main }}
					>
						<Menu />
					</Button>
				</Toolbar>
			</AppBar>
			<Typography
				variant="h1"
				align="center"
				sx={{ color: theme.palette.secondary.main }}
			>
				Ola Munthe Vassbotn
			</Typography>
			<Typography
				variant="h3"
				align="center"
				sx={{ color: theme.palette.primary.light, fontWeight: "light" }}
			>
				Student at NTNU
			</Typography>
			<Box sx={{ flexGrow: 1 }} padding={2} maxWidth={400} mx={"auto"}>
				<Grid container spacing={2}>
					<Grid item xs={8}>
						<Card>
							<CardContent>
								<Typography variant="body1">thingo</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={4}>
						<Card>
							<CardContent>
								<Typography variant="body1">thingo</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={4}>
						<Card>
							<CardContent>
								<Typography variant="body1">thingo</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={8}>
						<Card>
							<CardContent>
								<Typography variant="body1">thingo</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}
