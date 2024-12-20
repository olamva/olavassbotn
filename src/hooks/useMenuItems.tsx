import Code from "@/assets/Code";
import DarkMode from "@/assets/DarkMode";
import Language from "@/assets/Language";
import LightMode from "@/assets/LightMode";
import { setCookie } from "@/components/toggles/ThemeToggle";
import { useDevMode } from "@/contexts/DevModeProvider";
import { socialLinks } from "@/data/FooterData";
import { navItems } from "@/data/NavItems";
import { SearchMenuItem } from "@/types/nav";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const ICON_SIZE = "16px";

const useMenuItems = () => {
	const { toggleDevMode, devMode } = useDevMode();
	const t = useTranslations("NavItems");
	const locale = useLocale();
	const root = "/" + locale;
	const router = useRouter();
	const pathname = usePathname();

	const settingsItems: SearchMenuItem[] = [
		{
			label: t("languageToggle"),
			icon: <Language size={ICON_SIZE} />,
			onClick: () => toggleLanguage(),
		},
		{
			label: t("darkModeToggle"),
			darkModeLabel: t("lightModeToggle"),
			icon: (
				<>
					<div className="dark:hidden">
						<LightMode size={ICON_SIZE} />
					</div>
					<div className="hidden dark:block">
						<DarkMode size={ICON_SIZE} />
					</div>
				</>
			),
			onClick: () => toggleDarkMode(),
		},
		{
			label: t(devMode ? "turnOffDevMode" : "turnOnDevMode"),
			icon: <Code size={ICON_SIZE} />,
			onClick: () => clickedDevMode(),
		},
	];
	const toggleLanguage = () => {
		const newLocale = locale === "no" ? "en" : "no";
		const newPathname = "/" + newLocale + pathname.slice(3);
		router.push(newPathname);
		router.refresh();
	};

	const clickedDevMode = () => {
		if (devMode) router.push(root);
		toggleDevMode();
	};

	const toggleDarkMode = () => {
		document.documentElement.classList.toggle("dark");
		setCookie(
			"themeMode",
			document.documentElement.classList.contains("dark")
				? "dark"
				: "light",
			7,
		);
	};

	useEffect(() => setCookie("devMode", `${devMode}`, 7), [devMode]);

	return [
		{
			title: t("navigation"),
			items: navItems
				.filter(
					(item) =>
						!item.isFooter && (item.requiresAdmin ? devMode : true),
				)
				.map(
					(item): SearchMenuItem => ({
						label: t(item.label),
						icon: <item.filledIcon size={ICON_SIZE} />,
						href: root + (item.link ?? ""),
					}),
				),
		},
		{
			title: t("socials"),
			items: socialLinks.map(
				(item): SearchMenuItem => ({
					label: item.label,
					icon: <item.icon size={ICON_SIZE} />,
					href: item.link,
				}),
			),
		},
		{
			title: t("settings"),
			items: settingsItems,
		},
	];
};

export default useMenuItems;
