import {
	Assignment,
	AssignmentOutlined,
	Home,
	HomeOutlined,
	Palette,
	PaletteOutlined,
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
import Link from "next/link";
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
		{
			label: "Themes",
			icon: PaletteOutlined,
			filledIcon: Palette,
			link: root + "/themes",
		},
	];
	const DrawerList = (
		<Box
			sx={{ width: 250 }}
			role="presentation"
			onClick={toggleDrawer(false)}
		>
			<List>
				{itemList.map((item) => {
					const isActive = pathname === item.link;
					return item.isDivider ? (
						<Divider
							key={item.label}
							sx={{
								margin: "auto",
								width: "90%",
								backgroundColor:
									theme.palette.primary.contrastText,
							}}
						/>
					) : (
						<ListItem key={item.label} disablePadding>
							<Link
								style={{ width: "100%" }}
								href={item.link ?? ""}
							>
								<ListItemButton
									onClick={(e) =>
										isActive && e.preventDefault()
									}
								>
									{item.icon && (
										<ListItemIcon>
											{isActive ? (
												<item.filledIcon
													sx={{
														color: theme.palette
															.primary
															.contrastText,
													}}
												/>
											) : (
												<item.icon
													sx={{
														color: theme.palette
															.primary
															.contrastText,
													}}
												/>
											)}
										</ListItemIcon>
									)}
									<ListItemText
										primary={item.label}
										sx={{
											color: theme.palette.primary
												.contrastText,
										}}
									/>
								</ListItemButton>
							</Link>
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
					backgroundColor:
						theme.palette.mode === "dark"
							? theme.palette.primary.dark
							: theme.palette.primary.light,
				},
			}}
		>
			{DrawerList}
		</SwipeableDrawer>
	);
}
