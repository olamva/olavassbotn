"use client";

import ToggleButton from "@/components/toggles/ToggleButton";
import { useToggleStates } from "@/contexts/ToggleStatesProvider";
import CommandKey from "@/public/icons/CommandKey";
import ControlKey from "@/public/icons/ControlKey";
import Search from "@/public/icons/Search";
import { useTranslations } from "next-intl";

const SearchField = () => {
	const t = useTranslations("NavItems");
	const { setOpenMenu, isMac } = useToggleStates();
	return (
		<>
			<div className="hidden sm:block">
				<button
					className="bg-primary-main button-hover flex flex-row p-2 rounded-xl items-center cursor-pointer select-none"
					onClick={() => setOpenMenu(true)}
				>
					<div className="mx-0.5 ">
						<Search size="18px" />
					</div>
					<p className=" text-xs mx-0.5">{t("search-field")}</p>
					<div className="bg-default button-hover border-[rgb(219,220,211)] dark:border-[rgb(67,67,67)] flex px-1 py-0.5 rounded items-center mx-0.5 border border-solid">
						{isMac ? (
							<CommandKey size="12px" />
						) : (
							<ControlKey size="12px" />
						)}
						<p className=" text-xs">K</p>
					</div>
				</button>
			</div>
			<div className="sm:hidden size-[28px]">
				<ToggleButton onClick={() => setOpenMenu(true)}>
					<Search size="20px" />
				</ToggleButton>
			</div>
		</>
	);
};
export default SearchField;
