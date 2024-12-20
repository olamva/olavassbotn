"use client";
import Clear from "@/assets/Clear";
import Search from "@/assets/Search";
import Dialog from "@/components/default/Dialog";
import { MenuItemButton, MenuItemLink } from "@/components/navigation/MenuItem";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToggleStates } from "@/contexts/ToggleStatesProvider";
import useMenuItems from "@/hooks/useMenuItems";
import { SearchMenuGroup } from "@/types/nav";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";

const SearchMenu = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const itemRefs = useRef<HTMLElement[]>([]);
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const { openMenu, setOpenMenu } = useToggleStates();
	const [showClear, setShowClear] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState<number>(0);
	const [ignoreMouse, setIgnoreMouse] = useState(false);

	const t = useTranslations("NavItems");
	const router = useRouter();

	const menuItems = useMenuItems();

	const [filteredItems, setFilteredItems] =
		useState<SearchMenuGroup[]>(menuItems);

	const updateFilteredItems = useCallback(() => {
		if (inputRef.current === null) return;
		const searched = inputRef.current.value.toLowerCase();
		const newFilteredItems = menuItems
			.map((group) => ({
				...group,
				items: group.items.filter(
					(item) =>
						item.label.toLowerCase().includes(searched) ||
						item.darkModeLabel?.toLowerCase().includes(searched),
				),
			}))
			.filter((group) => group.items.length > 0);

		setFilteredItems(newFilteredItems);
		setSelectedIndex(0);
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

	const handleKeyDown = (e: KeyboardEvent) => {
		setIgnoreMouse(true);
		if (filteredItems.length === 0) return;
		const currentItem = filteredItems.flatMap((group) => group.items)[
			selectedIndex
		];
		switch (e.key) {
			case "ArrowDown":
				setSelectedIndex((prevIndex) =>
					Math.min(
						prevIndex + 1,
						filteredItems.flatMap((group) => group.items).length -
							1,
					),
				);
				break;
			case "ArrowUp":
				setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
				break;
			case "Enter":
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

	const handleScrollIntoView = useCallback(() => {
		if (!scrollContainerRef.current) return;

		const selectedItemElement = itemRefs.current[selectedIndex];

		if (selectedItemElement) {
			const containerTop = scrollContainerRef.current.offsetTop;
			const containerHeight = scrollContainerRef.current.offsetHeight;
			const containerScrollTop = scrollContainerRef.current.scrollTop;

			const elementTop = selectedItemElement.offsetTop - containerTop;
			const elementBottom = elementTop + selectedItemElement.offsetHeight;

			if (
				elementBottom <= containerScrollTop ||
				elementTop >= containerScrollTop + containerHeight
			) {
				const newScrollTop =
					elementTop < containerScrollTop
						? elementTop
						: elementBottom - containerHeight;

				scrollContainerRef.current.scrollTo({
					top: newScrollTop,
					behavior: "smooth",
				});
			}
		}
	}, [selectedIndex]);

	useEffect(() => {
		document.addEventListener("mousemove", () => setIgnoreMouse(false));
		return () =>
			document.removeEventListener("mousemove", () =>
				setIgnoreMouse(false),
			);
	}, []);

	useEffect(() => {
		const currentInput = inputRef.current;
		if (currentInput === null) return;
		currentInput.addEventListener("change", handleChange);

		return () => {
			if (currentInput === null) return;
			currentInput.removeEventListener("change", handleChange);
		};
	}, [handleChange]);

	useEffect(
		() => handleScrollIntoView(),
		[selectedIndex, handleScrollIntoView],
	);

	return (
		<Dialog open={openMenu} setOpen={setOpenMenu} blurred>
			<ScrollArea className="bg-primary -mt-52 flex h-96 w-[90%] max-w-lg flex-col overflow-hidden rounded-lg shadow-lg sm:-mt-0">
				<div className="flex items-center px-2 py-3">
					<div className="size-fit pr-1">
						<Search size="20px" />
					</div>
					<input
						type="text"
						autoComplete="off"
						id="search"
						ref={inputRef}
						className="size-full bg-inherit outline-none"
						autoFocus
						onChange={handleChange}
						onKeyDown={handleKeyDown}
						placeholder={t("search-field")}
					/>
					{showClear && (
						<button
							className="size-fit pl-2 hover:text-zinc-600 dark:hover:text-zinc-400"
							onClick={clearInputField}
						>
							<Clear size="16px" />
						</button>
					)}
				</div>
				<hr className="mx-auto w-full border-[rgb(219,220,211)] dark:border-[rgb(14,14,14)]" />
				<div
					className="flex-grow overflow-y-auto"
					ref={scrollContainerRef}
				>
					{filteredItems.map(
						(group, groupIndex) =>
							group.items.length > 0 && (
								<div key={group.title} className="">
									<div className="flex w-fit flex-col p-1">
										<h1
											className={`mx-1 text-lg font-bold ${
												groupIndex !== 0 ? "mt-4" : ""
											}`}
										>
											{group.title}
										</h1>
										<hr className="border-black dark:border-white" />
									</div>

									{group.items.map((item, itemIndex) => {
										const flatIndex =
											filteredItems
												.slice(0, groupIndex)
												.reduce(
													(acc, g) =>
														acc + g.items.length,
													0,
												) + itemIndex;
										return item.href ? (
											<MenuItemLink
												icon={item.icon}
												href={item.href}
												key={item.label}
												flatIndex={flatIndex}
												selectedIndex={selectedIndex}
												setSelectedIndex={
													setSelectedIndex
												}
												clearInputField={
													clearInputField
												}
												innerRef={(el) =>
													(itemRefs.current[
														flatIndex
													] = el!)
												}
												ignoreMouse={ignoreMouse}
											>
												{item.label}
											</MenuItemLink>
										) : (
											item.onClick && (
												<MenuItemButton
													icon={item.icon}
													onClick={item.onClick}
													key={item.label}
													flatIndex={flatIndex}
													selectedIndex={
														selectedIndex
													}
													setSelectedIndex={
														setSelectedIndex
													}
													clearInputField={
														clearInputField
													}
													innerRef={(el) =>
														(itemRefs.current[
															flatIndex
														] = el!)
													}
													ignoreMouse={ignoreMouse}
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
							),
					)}
					{filteredItems.length === 0 && (
						<p className="mt-2 text-center">
							{t("no-search-results")}
						</p>
					)}
				</div>
			</ScrollArea>
		</Dialog>
	);
};

export default SearchMenu;
