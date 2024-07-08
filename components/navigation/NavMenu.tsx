"use client";
import { socialLinks } from "@/app/data/FooterData";
import { navItems } from "@/app/data/NavItems";
import { useDevMode } from "@/contexts/DevModeProvider";
import { useColorMode } from "@/contexts/ThemeModeProvider";
import { useToggleStates } from "@/contexts/ToggleStatesProvider";
import { Code, DarkMode, Language, LightMode } from "@mui/icons-material";
import Cookies from "js-cookie";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CommandPalette, { filterItems, getItemIndex } from "react-cmdk";
import "react-cmdk/dist/cmdk.css";

const NavMenu = () => {
	const { setOpenMenu, openMenu } = useToggleStates();
	const [search, setSearch] = useState("");
	const locale = useLocale();
	const root = "/" + locale;
	const t = useTranslations("NavItems");
	const router = useRouter();
	const pathname = usePathname();
	const toggleLanguage = () => {
		const newLocale = locale === "no" ? "en" : "no";
		const newPathname = "/" + newLocale + pathname.slice(3);
		router.push(newPathname);
		router.refresh();
	};
	const { toggleColorMode, mode } = useColorMode();
	const { toggleDevMode, devMode } = useDevMode();
	useEffect(() => {
		Cookies.set("devMode", devMode as unknown as string);
	}, [devMode]);

	const clickedDevMode = () => {
		if (devMode) router.push(root);
		toggleDevMode();
	};

	const filteredItems = filterItems(
		[
			{
				heading: "Navigation",
				id: "navigation",
				items: navItems
					.filter(
						(item) =>
							!item.isFooter &&
							!item.isDivider &&
							(item.requiresAdmin ? devMode : true)
					)
					.map((item) => {
						const itemLink = root + (item.link ?? "");
						return {
							id: item.label,
							children: t(item.label),
							icon: item.filledIcon,
							href: itemLink,
							keywords: ["navigation", "navigasjon"],
						};
					}),
			},
			{
				heading: "Socials",
				id: "socials",
				items: socialLinks.map((item) => {
					return {
						id: item.link,
						children: item.label,
						icon: item.icon,
						href: item.link,
						keywords: [
							"social",
							"media",
							"links",
							"networks",
							"sosiale",
							"medier",
							"nettverk",
							"lenker",
						],
					};
				}),
			},
			{
				heading: "Settings",
				id: "settings",
				items: [
					{
						id: "language",
						children: t("languageToggle"),
						icon: Language,
						onClick: () => toggleLanguage(),
						keywords: [
							"language",
							"locale",
							"toggle",
							"english",
							"norwegian",
							"norsk",
							"engelsk",
							"settings",
							"språk",
							"lokalisering",
							"innstillinger",
						],
					},
					{
						id: "theme",
						children:
							mode == "light"
								? t("darkModeToggle")
								: t("lightModeToggle"),
						icon: mode === "dark" ? LightMode : DarkMode,
						onClick: () => toggleColorMode(),
						keywords: [
							"dark",
							"light",
							"theme",
							"mode",
							"toggle",
							"settings",
							"innstillinger",
							"tema",
							"mørkt",
							"lys",
						],
					},
					{
						id: "devMode",
						children: t(
							devMode ? "turnOffDevMode" : "turnOnDevMode"
						),
						icon: Code,
						onClick: () => clickedDevMode(),
						keywords: [
							"developer",
							"mode",
							"toggle",
							"settings",
							"utvikler",
							"modus",
							"innstillinger",
						],
					},
				],
			},
		],
		search
	);

	return (
		<CommandPalette
			search={search}
			onChangeSearch={setSearch}
			isOpen={openMenu}
			onChangeOpen={setOpenMenu}
			placeholder={t("search-field")}
		>
			{filteredItems.length ? (
				filteredItems.map((list) => (
					<CommandPalette.List key={list.id} heading={list.heading}>
						{list.items.map(({ id, ...rest }) => (
							<CommandPalette.ListItem
								key={id}
								index={getItemIndex(filteredItems, id)}
								{...rest}
								showType={false}
							/>
						))}
					</CommandPalette.List>
				))
			) : (
				<CommandPalette.FreeSearchAction />
			)}
		</CommandPalette>
	);
};

export default NavMenu;
