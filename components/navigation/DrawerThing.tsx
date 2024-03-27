import { ContactPage, ContactPageOutlined } from "@mui/icons-material";
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
type NavItem = {
	label: string;
	link?: string;
	icon?: any;
	filledIcon?: any;
	isDivider?: boolean;
};
export default function NavDrawer({ toggleDrawer, open }: NavDrawerProps) {
	const pathname = usePathname();
	const theme = useTheme();
	const itemList: NavItem[] = [
		{ label: "Test1" },
		{ label: "Test2" },
		{ label: "Test3" },
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
						<Divider key={`divider-${item.label}`} />
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
			// make the color of the drawer itself theme.palette.primary.main
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
