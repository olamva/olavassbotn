"use client";
import { navItems } from "@/app/data/NavItems";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import CommandPalette, { filterItems, getItemIndex } from "react-cmdk";
import "react-cmdk/dist/cmdk.css";

interface NavMenuProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}
const NavMenu = ({ isOpen, setIsOpen }: NavMenuProps) => {
	const [search, setSearch] = useState("");
	const locale = useLocale();
	const root = "/" + locale;
	const t = useTranslations("NavItems");

	const filteredItems = filterItems(
		[
			{
				id: "home",
				items: navItems
					.filter((item) => !item.isFooter && !item.isDivider)
					.map((item) => {
						const itemLink = root + item.link ?? "";
						return {
							id: item.label,
							children: t(item.label),
							icon: item.filledIcon,
							href: itemLink,
						};
					}),
			},
		],
		search
	);

	return (
		<CommandPalette
			search={search}
			onChangeSearch={setSearch}
			isOpen={isOpen}
			onChangeOpen={setIsOpen}
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
