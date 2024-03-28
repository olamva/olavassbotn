import {
	Assignment,
	AssignmentOutlined,
	Home,
	HomeOutlined,
	Person,
	PersonOutlined,
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
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

interface NavDrawerProps {
	toggleDrawer: Function;
	open: boolean;
}
export default function NavDrawer({ toggleDrawer, open }: NavDrawerProps) {
	const locale = useLocale();
	const root = "/" + locale;
	const pathname = usePathname();
	const theme = useTheme();
	const itemList: NavItem[] = [
		{
			label: "Home",
			icon: HomeOutlined,
			filledIcon: Home,
			link: root,
		},
		{ label: "Divider1", isDivider: true },
		{
			label: "Projects",
			icon: AssignmentOutlined,
			filledIcon: Assignment,
			link: root + "/projects",
		},
		{
			label: "About Me",
			icon: PersonOutlined,
			filledIcon: Person,
			link: root + "/about-me",
		},
	];
	const DrawerList = (
		<Box
			sx={{ width: 250 }}
			role="presentation"
			onClick={toggleDrawer(false)}
		>
			<List sx={{ color: theme.palette.secondary.main }}>
				{itemList.map((item) => {
					const isActive = pathname === item.link;
					return item.isDivider ? (
						<Divider
							key={item.label}
							color={theme.palette.primary.light}
							sx={{ margin: "auto", width: "90%" }}
						/>
					) : (
						<ListItem key={item.label} disablePadding>
							<ListItemButton
								component={isActive ? "div" : "a"}
								href={isActive ? undefined : item.link}
							>
								{item.icon && (
									<ListItemIcon>
										{isActive ? (
											<item.filledIcon
												sx={{
													color:
														theme.palette.mode ==
														"dark"
															? "white"
															: "black",
												}}
											/>
										) : (
											<item.icon
												sx={{
													color:
														theme.palette.mode ==
														"dark"
															? "white"
															: "black",
												}}
											/>
										)}
									</ListItemIcon>
								)}
								<ListItemText primary={item.label} />
							</ListItemButton>
						</ListItem>
					);
				})}
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
