import {
	Assignment,
	AssignmentOutlined,
	Help,
	HelpOutline,
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
	Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLocale, useTranslations } from "next-intl";
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
	const t = useTranslations("NavDrawer");
	const navItems: NavItem[] = [
		{
			label: t("home"),
			icon: HomeOutlined,
			filledIcon: Home,
			link: root,
		},
		{ label: "Divider1", isDivider: true },
		{
			label: t("projects"),
			icon: AssignmentOutlined,
			filledIcon: Assignment,
			link: root + "/projects",
		},
		{
			label: t("about-me"),
			icon: PersonOutlined,
			filledIcon: Person,
			link: root + "/about-me",
		},
		{
			label: t("themes"),
			icon: PaletteOutlined,
			filledIcon: Palette,
			link: root + "/themes",
		},
		{
			label: t("contribute"),
			link: "https://github.com/olamva/olavassbotn",
			icon: HelpOutline,
			filledIcon: Help,
			isFooter: true,
		},
	];
	const DrawerList = (
		<Box
			sx={{
				width: 250,
				display: "flex",
				flexDirection: "column",
				height: "100%",
			}}
			role="presentation"
			onClick={toggleDrawer(false)}
		>
			<Box flexGrow={1}>
				<List sx={{ pt: 0 }}>
					{navItems
						.filter((item) => !item.isFooter)
						.map((item, index) => {
							const isActive = pathname === item.link;
							return item.isDivider ? (
								<Divider
									key={item.label}
									sx={{
										margin: "auto",
										width: "90%",
										backgroundColor: "primary.contrastText",
									}}
								/>
							) : (
								<ListItem key={item.label} disablePadding>
									<Link
										href={item.link ?? ""}
										style={{ width: "100%" }}
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
																color: "primary.contrastText",
																mt:
																	index === 0
																		? 1
																		: 0,
															}}
														/>
													) : (
														<item.icon
															sx={{
																color: "primary.contrastText",
																mt:
																	index === 0
																		? 1
																		: 0,
															}}
														/>
													)}
												</ListItemIcon>
											)}
											<ListItemText>
												<Typography
													sx={{
														color: "primary.contrastText",
														mt: index === 0 ? 1 : 0,
													}}
												>
													{item.label}
												</Typography>
											</ListItemText>
										</ListItemButton>
									</Link>
								</ListItem>
							);
						})}
				</List>
			</Box>
			<Box sx={{ pb: 0 }}>
				<List sx={{ pb: 0 }}>
					{navItems
						.filter((item) => item.isFooter)
						.map((item) => (
							<ListItem key={item.label} disablePadding>
								<Link
									href={item.link ?? ""}
									style={{ width: "100%" }}
								>
									<ListItemButton>
										{item.icon && (
											<ListItemIcon>
												<item.icon
													sx={{
														color: "primary.contrastText",
													}}
													fontSize="small"
												/>
											</ListItemIcon>
										)}
										<ListItemText>
											<Typography
												sx={{
													color: "primary.contrastText",
													fontSize: "0.7rem",
												}}
											>
												{item.label}
											</Typography>
										</ListItemText>
									</ListItemButton>
								</Link>
							</ListItem>
						))}
				</List>
			</Box>
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
							? "primary.dark"
							: "primary.light",
				},
			}}
		>
			{DrawerList}
		</SwipeableDrawer>
	);
}
