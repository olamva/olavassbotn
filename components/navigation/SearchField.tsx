"use client";

import { useToggleStates } from "@/contexts/ToggleStatesProvider";
import CommandKey from "@/public/icons/CommandKey";
import ControlKey from "@/public/icons/ControlKey";
import Search from "@/public/icons/search";
import { IconButton } from "@mui/material";
import { useTranslations } from "next-intl";

const SearchField = () => {
	const t = useTranslations("NavItems");
	const { setOpenMenu, isMac } = useToggleStates();
	return (
		<>
			<div className="hidden sm:block">
				<button
					className="rounded-xl p-1"
					onClick={() => setOpenMenu(true)}
				>
					<div className="bg-[rgb(211,212,200)] dark:bg-[rgb(20,20,20)] flex flex-row p-2 rounded-xl items-center">
						<div className="mx-0.5 text-black dark:text-white">
							<Search size="18px" />
						</div>
						<p className="text-black dark:text-white text-xs mx-0.5">
							{t("search-field")}
						</p>
						<div className="bg-[rgb(240, 241, 231)] dark:bg-[rgb(15, 15, 15)] border-[rgb(219,220,211)] dark:border-[rgb(67,67,67)] flex px-1 py-0.5 rounded items-center mx-0.5 border border-solid">
							{isMac ? (
								<CommandKey size="12px" />
							) : (
								<ControlKey size="12px" />
							)}
							<p className="text-black dark:text-white text-xs">
								K
							</p>
						</div>
					</div>
				</button>
			</div>
			<div className="block sm:hidden">
				<IconButton
					onClick={() => setOpenMenu(true)}
					sx={{ padding: "4px" }}
				>
					<Search size="20px" />
				</IconButton>
			</div>
		</>
	);
};
export default SearchField;
