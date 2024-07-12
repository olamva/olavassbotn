"use client";
import { navItems } from "@/app/data/NavItems";
import { useDevMode } from "@/contexts/DevModeProvider";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const ListButton = ({ children }: { children: ReactNode }) => (
	<button className="flex p-2 items-center hover:bg-black dark:hover:bg-white dark:hover:bg-opacity-5 hover:bg-opacity-5 transition-all w-full select-none">
		{children}
	</button>
);

const useDrawerList = () => {
	const locale = useLocale();
	const root = "/" + locale;
	const pathname = usePathname();
	const t = useTranslations("NavItems");
	const { devMode } = useDevMode();
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
									<a href={itemLink}>
										<ListButton>
											<div
												className={
													index === 0 ? "mt-1" : ""
												}
											>
												{isActive ? (
													<item.filledIcon />
												) : (
													<item.icon />
												)}
											</div>
											<p
												className={`${
													index === 0 ? "mt-0" : ""
												} pl-1`}
											>
												{t(item.label)}
											</p>
										</ListButton>
									</a>
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
									<button className="flex p-2 items-center hover:bg-black dark:hover:bg-white dark:hover:bg-opacity-5 hover:bg-opacity-5 transition-all w-full">
										{item.icon && <item.icon />}
										<p className="pl-1 text-xs text-left">
											{t(item.label)}
										</p>
									</button>
								</a>
							</li>
						))}
				</ul>
			</div>
		</>
	);
};
export default useDrawerList;
