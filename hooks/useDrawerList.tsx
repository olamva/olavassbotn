"use client";
import { navItems } from "@/app/data/NavItems";
import { useDevMode } from "@/contexts/DevModeProvider";
import { useToggleStates } from "@/contexts/ToggleStatesProvider";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const ListItem = ({ children }: { children: ReactNode }) => (
	<div className="flex p-2 items-center hover:bg-black dark:hover:bg-white dark:hover:bg-opacity-5 hover:bg-opacity-5 transition-all w-full select-none">
		{children}
	</div>
);

const useDrawerList = () => {
	const locale = useLocale();
	const root = "/" + locale;
	const pathname = usePathname();
	const t = useTranslations("NavItems");
	const { devMode } = useDevMode();
	const { setOpenDrawer } = useToggleStates();
	return (
		<>
			<div className="flex-grow">
				<ul>
					{navItems
						.filter(
							(item) =>
								!item.isFooter &&
								(item.requiresAdmin ? devMode : true)
						)
						.map((item, index) => {
							const isActive = pathname.slice(3) === item.link;
							const itemLink = isActive ? "" : root + item.link;
							return (
								<li key={item.label}>
									<Link
										href={itemLink}
										onClick={() => setOpenDrawer(false)}
									>
										<ListItem>
											{isActive ? (
												<item.filledIcon size="20px" />
											) : (
												<item.icon size="20px" />
											)}
											<p
												className={`${
													index === 0 ? "mt-0" : ""
												} pl-1`}
											>
												{t(item.label)}
											</p>
										</ListItem>
									</Link>
									{index === 0 && (
										<hr className="m-auto w-[90%] border-black dark:border-white" />
									)}
								</li>
							);
						})}
				</ul>
			</div>
			<div>
				<ul>
					{navItems
						.filter((item) => item.isFooter)
						.map((item) => (
							<li key={item.label}>
								<a href={item.link}>
									<div className="flex p-2 items-center hover:bg-black dark:hover:bg-white dark:hover:bg-opacity-5 hover:bg-opacity-5 transition-all w-full">
										{item.icon && <item.icon size="16px" />}
										<p className="pl-1 text-xs text-left">
											{t(item.label)}
										</p>
									</div>
								</a>
							</li>
						))}
				</ul>
			</div>
		</>
	);
};
export default useDrawerList;
