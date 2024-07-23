"use client";
import { navItems } from "@/app/data/NavItems";
import { useDevMode } from "@/contexts/DevModeProvider";
import { useToggleStates } from "@/contexts/ToggleStatesProvider";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const ListItem = ({ children }: { children: ReactNode }) => (
	<div className="button-hover flex w-full select-none items-center p-2 transition-all">
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
								(item.requiresAdmin ? devMode : true),
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
									<ListItem>
										{item.icon && <item.icon size="16px" />}
										<p className="pl-1 text-left text-xs">
											{t(item.label)}
										</p>
									</ListItem>
								</a>
							</li>
						))}
				</ul>
			</div>
		</>
	);
};
export default useDrawerList;
