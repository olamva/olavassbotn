"use client";
import { socialLinks } from "@/app/data/FooterData";
import { navItems } from "@/app/data/NavItems";
import Dialog from "@/components/default/Dialog";
import { useDevMode } from "@/contexts/DevModeProvider";
import { useToggleStates } from "@/contexts/ToggleStatesProvider";
import Clear from "@/public/icons/Clear";
import Code from "@/public/icons/Code";
import DarkMode from "@/public/icons/DarkMode";
import Language from "@/public/icons/Language";
import LightMode from "@/public/icons/LightMode";
import Search from "@/public/icons/Search";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
	ReactElement,
	ReactNode,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { setCookie } from "../toggles/ThemeToggle";

const ICON_SIZE = "16px";

const SearchMenu = () => {
	const { openMenu, setOpenMenu } = useToggleStates();
	const inputRef = useRef<HTMLInputElement>(null);
	const [showClear, setShowClear] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState<number>(0);

	const pressedItem = (onClick?: () => void) => {
		if (onClick) onClick();
		setOpenMenu(false);
		clearInputField();
	};

	interface MenuItemLinkProps {
		icon: ReactElement;
		href: string;
		children: ReactNode;
		selected: boolean;
	}
	const MenuItemLink = ({
		icon,
		href,
		children,
		selected,
	}: MenuItemLinkProps) => (
		<Link
			className={`flex py-2 px-1 items-center button-hover transition-all w-full select-none ${
				selected
					? "bg-black dark:bg-white dark:bg-opacity-10 bg-opacity-5"
					: ""
			}`}
			href={href}
			onClick={() => pressedItem()}
		>
			{icon}
			<div className="w-1" />
			{children}
		</Link>
	);

	interface MenuItemButtonProps {
		icon: ReactElement;
		onClick: () => void;
		children: ReactNode;
		selected: boolean;
	}
	const MenuItemButton = ({
		icon,
		onClick,
		children,
		selected,
	}: MenuItemButtonProps) => (
		<button
			className={`flex py-2 px-1 items-center button-hover transition-all w-full select-none ${
				selected
					? "bg-black dark:bg-white dark:bg-opacity-10 bg-opacity-5"
					: ""
			}`}
			onClick={() => pressedItem(onClick)}
		>
			{icon}
			<div className="w-1" />
			{children}
		</button>
	);

	const locale = useLocale();
	const root = "/" + locale;
	const t = useTranslations("NavItems");
	const router = useRouter();
	const pathname = usePathname();
	const { toggleDevMode, devMode } = useDevMode();
	useEffect(() => {
		setCookie("devMode", `${devMode}`, 7);
	}, [devMode]);

	type SearchMenuItem = {
		label: string;
		darkModeLabel?: string;
		icon: ReactElement;
		href?: string;
		onClick?: () => void;
	};

	type SearchMenuGroup = {
		title: string;
		items: SearchMenuItem[];
	};

	const menuItems = useMemo(() => {
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
				7
			);
		};
		return [
			{
				title: t("navigation"),
				items: navItems
					.filter(
						(item) =>
							!item.isFooter &&
							(item.requiresAdmin ? devMode : true)
					)
					.map((item): SearchMenuItem => {
						const itemLink = root + (item.link ?? "");
						return {
							label: t(item.label),
							icon: <item.filledIcon size={ICON_SIZE} />,
							href: itemLink,
						};
					}),
			},
			{
				title: t("socials"),
				items: socialLinks.map((item): SearchMenuItem => {
					return {
						label: item.label,
						icon: <item.icon size={ICON_SIZE} />,
						href: item.link,
					};
				}),
			},
			{
				title: t("settings"),
				items: settingsItems,
			},
		];
	}, [devMode, root, t, locale, pathname, router, toggleDevMode]);

	const [filteredItems, setFilteredItems] =
		useState<SearchMenuGroup[]>(menuItems);

	const updateFilteredItems = useCallback(() => {
		if (inputRef.current === null) return;
		const searched = inputRef.current.value.toLowerCase();
		const newFilteredItems = menuItems
			.map((group) => {
				return {
					...group,
					items: group.items.filter(
						(item) =>
							item.label.toLowerCase().includes(searched) ||
							item.darkModeLabel?.toLowerCase().includes(searched)
					),
				};
			})
			.filter((group) => group.items.length > 0);

		setFilteredItems(newFilteredItems);
		setSelectedIndex(0); // Auto-select the first item
	}, [inputRef, menuItems]);

	const updateShowClear = useCallback(() => {
		if (inputRef.current === null) return;
		setShowClear(inputRef.current.value.length > 0);
	}, [inputRef]);

	const handleChange = useCallback(() => {
		updateFilteredItems();
		updateShowClear();
	}, [updateFilteredItems, updateShowClear]);

	const clearInputField = () => {
		if (inputRef.current === null) return;
		inputRef.current.value = "";
		inputRef.current.focus();
		updateShowClear();
		updateFilteredItems();
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (filteredItems.length === 0) return;

		switch (e.key) {
			case "ArrowDown":
				setSelectedIndex((prevIndex) =>
					Math.min(
						prevIndex + 1,
						filteredItems.flatMap((group) => group.items).length - 1
					)
				);
				break;
			case "ArrowUp":
				setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
				break;
			case "Enter":
				const currentItem = filteredItems.flatMap(
					(group) => group.items
				)[selectedIndex];
				if (currentItem.href) {
					router.push(currentItem.href);
					setOpenMenu(false);
					clearInputField();
				} else if (currentItem.onClick) {
					currentItem.onClick();
					setOpenMenu(false);
					clearInputField();
				}
				break;
		}
	};

	useEffect(() => {
		const currentInput = inputRef.current;
		if (currentInput === null) return;
		currentInput.addEventListener("change", handleChange);

		return () => {
			if (currentInput === null) return;
			currentInput.removeEventListener("change", handleChange);
		};
	}, [handleChange]);

	return (
		<Dialog open={openMenu} setOpen={setOpenMenu} blurred>
			<div className="h-80 bg-primary-light shadow-lg rounded overflow-hidden w-[90%] max-w-96 flex flex-col">
				<div className="flex px-2 py-3 items-center">
					<div className="size-fit pr-1">
						<Search size="20px" />
					</div>
					<input
						type="text"
						ref={inputRef}
						className="outline-none bg-primary-light size-full"
						autoFocus
						onChange={handleChange}
						onKeyDown={handleKeyDown}
						placeholder={t("search-field")}
					/>
					{showClear && (
						<button
							className="size-fit hover:text-zinc-600 dark:hover:text-zinc-400 pl-2"
							onClick={clearInputField}
						>
							<Clear size="12px" />
						</button>
					)}
				</div>
				<hr className="mx-auto w-full border-[rgb(211,212,200)] dark:border-[rgb(20,20,20)]" />
				<div className="overflow-y-auto flex-grow">
					{filteredItems.map(
						(group, groupIndex) =>
							group.items.length > 0 && (
								<div key={group.title}>
									<h1
										className={`text-lg font-bold pl-1 ${
											groupIndex !== 0 ? "mt-4" : ""
										}`}
									>
										{group.title}
									</h1>

									{group.items.map((item, itemIndex) => {
										const flatIndex =
											filteredItems
												.slice(0, groupIndex)
												.reduce(
													(acc, g) =>
														acc + g.items.length,
													0
												) + itemIndex;
										return item.href ? (
											<MenuItemLink
												icon={item.icon}
												href={item.href}
												key={item.label}
												selected={
													flatIndex === selectedIndex
												}
											>
												{item.label}
											</MenuItemLink>
										) : (
											item.onClick && (
												<MenuItemButton
													icon={item.icon}
													onClick={item.onClick}
													key={item.label}
													selected={
														flatIndex ===
														selectedIndex
													}
												>
													<div className="dark:hidden">
														{item.label}
													</div>
													<div className="hidden dark:block">
														{item.darkModeLabel ??
															item.label}
													</div>
												</MenuItemButton>
											)
										);
									})}
								</div>
							)
					)}
					{filteredItems.length === 0 && (
						<p className="text-center">womp womp</p>
					)}
				</div>
			</div>
		</Dialog>
	);
};

export default SearchMenu;
