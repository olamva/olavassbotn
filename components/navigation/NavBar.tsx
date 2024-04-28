import NavDrawer from "@/components/navigation/NavDrawer";
import NavMenu from "@/components/navigation/NavMenu";
import SearchField from "@/components/navigation/SearchField";
import LangToggle from "@/components/toggles/LangToggle";
import ThemeToggle from "@/components/toggles/ThemeToggle";
import { Home, Menu } from "@mui/icons-material";
import { Box, IconButton, Toolbar } from "@mui/material";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
export default function NavBar() {
	const [openDrawer, setOpenDrawer] = useState(false);
	const [openMenu, setOpenMenu] = useState<boolean>(false);

	const [isMac, setIsMac] = useState(false);
	useEffect(() => {
		setIsMac(
			typeof window !== "undefined"
				? navigator.userAgent.toUpperCase().indexOf("MAC") >= 0
				: false
		);

		function handleKeyDown(e: KeyboardEvent) {
			if ((isMac ? e.metaKey : e.ctrlKey) && e.key === "k") {
				e.preventDefault();
				e.stopPropagation();

				setOpenMenu((currentValue) => {
					return !currentValue;
				});
			}
		}

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isMac]);

	const toggleDrawer = useMemo(
		() => (newOpen: boolean) => () => {
			setOpenDrawer(newOpen);
		},
		[]
	);
	const locale = useLocale();
	const pathname = usePathname();
	const homeLink = useMemo(
		() => (pathname === `/${locale}` ? "" : `/${locale}`),
		[pathname, locale]
	);
	return (
		<>
			<NavMenu isOpen={openMenu} setIsOpen={setOpenMenu} />
			<NavDrawer toggleDrawer={toggleDrawer} open={openDrawer} />
			<Toolbar>
				<Box>
					<IconButton
						onClick={toggleDrawer(true)}
						sx={{
							color: "primary.contrastText",
						}}
					>
						<Menu />
					</IconButton>
					<Link style={{ width: "100%" }} href={homeLink}>
						<IconButton
							sx={{
								color: "primary.contrastText",
							}}
						>
							<Home />
						</IconButton>
					</Link>
				</Box>
				<Box flexGrow={1}></Box>
				<Box>
					<SearchField setOpen={setOpenMenu} isMac={isMac} />
				</Box>
				<Box>
					<ThemeToggle />
					<LangToggle />
				</Box>
			</Toolbar>
		</>
	);
}
