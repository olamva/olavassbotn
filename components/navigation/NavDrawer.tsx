"use client";
import { navItems } from "@/app/data/NavItems";
import { useDevMode } from "@/contexts/DevModeProvider";
import { useToggleStates } from "@/contexts/ToggleStatesProvider";
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

export default function NavDrawer() {
	const { toggleDrawer, openDrawer } = useToggleStates();
	const locale = useLocale();
	const root = "/" + locale;
	const pathname = usePathname();
	const theme = useTheme();
	const t = useTranslations("NavItems");
	const { devMode } = useDevMode();
	// Potentially refactor to avoid having to use client-side rendering
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
			bgcolor={"background.default"}
		>
			<Box flexGrow={1}>
				<List sx={{ pt: 0 }}>
					{navItems
						.filter(
							(item) =>
								!item.isFooter &&
								(item.requiresAdmin ? devMode : true)
						)
						.map((item, index) => {
							const isActive = pathname.slice(3) === item.link;
							const itemLink = isActive
								? ""
								: root + item.link ?? "";
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
										href={itemLink}
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
													{t(item.label)}
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
												{t(item.label)}
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
			open={openDrawer}
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
