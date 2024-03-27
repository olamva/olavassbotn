import {
	ContactPage,
	ContactPageOutlined,
	Home,
	HomeOutlined,
} from "@mui/icons-material";
import {
	Box,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	SwipeableDrawer,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { usePathname } from "next/navigation";

interface NavDrawerProps {
	toggleDrawer: Function;
	open: boolean;
}
export default function NavDrawer({ toggleDrawer, open }: NavDrawerProps) {
	const pathname = usePathname();
	const theme = useTheme();
	const itemList: NavItem[] = [
		{
			label: "Home",
			icon: HomeOutlined,
			filledIcon: Home,
			link: "/",
		},
		{ label: "Divider1", isDivider: true },
		{
			label: "Contact",
			icon: ContactPageOutlined,
			filledIcon: ContactPage,
			link: "/contact",
		},
	];
	const DrawerList = (
		<Box
			sx={{ width: 250 }}
			role="presentation"
			onClick={toggleDrawer(false)}
		>
			<List sx={{ color: theme.palette.secondary.main }}>
				{itemList.map((item) =>
					item.isDivider ? (
						<Divider
							key={item.label}
							color={theme.palette.primary.light}
							sx={{ margin: "auto", width: "90%" }}
						/>
					) : (
						<ListItem key={item.label} disablePadding>
							<ListItemButton
								component={item.link ? "a" : "div"}
								href={item.link || ""}
							>
								{item.icon && (
									<ListItemIcon>
										{pathname === item.link ? (
											<item.filledIcon
												sx={{ color: "white" }}
											/>
										) : (
											<item.icon
												sx={{ color: "white" }}
											/>
										)}
									</ListItemIcon>
								)}
								<ListItemText primary={item.label} />
							</ListItemButton>
						</ListItem>
					)
				)}
			</List>
		</Box>
	);
	return (
		<SwipeableDrawer
			open={open}
			onOpen={toggleDrawer(true)}
			onClose={toggleDrawer(false)}
			sx={{
				"& .MuiDrawer-paper": {
					backgroundColor: theme.palette.primary.main,
				},
			}}
		>
			{DrawerList}
		</SwipeableDrawer>
	);
}
