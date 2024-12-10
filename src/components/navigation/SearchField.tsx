"use client";

import CommandKey from "@/assets/CommandKey";
import Search from "@/assets/Search";
import ToggleButton from "@/components/toggles/ToggleButton";
import { useToggleStates } from "@/contexts/ToggleStatesProvider";
import { useTranslations } from "next-intl";

const SearchField = () => {
	const t = useTranslations("NavItems");
	const { setOpenMenu } = useToggleStates();
	return (
		<>
			<div className="hidden sm:block">
				<button
					className="bg-primary button-hover flex cursor-pointer select-none flex-row items-center rounded-xl p-2"
					onClick={() => setOpenMenu(true)}
				>
					<div className="mx-0.5">
						<Search size="18px" />
					</div>
					<p className="mx-0.5 text-xs">{t("search-field")}</p>
					<div className="bg-default button-hover mx-0.5 flex items-center rounded border border-solid border-[rgb(219,220,211)] px-1 py-0.5 dark:border-[rgb(67,67,67)]">
						<CommandKey size="12px" />
						<p className="text-xs">K</p>
					</div>
				</button>
			</div>
			<div className="size-[28px] sm:hidden">
				<ToggleButton onClick={() => setOpenMenu(true)}>
					<Search size="20px" />
				</ToggleButton>
			</div>
		</>
	);
};
export default SearchField;
