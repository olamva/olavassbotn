"use client";
import NextArrow from "@/assets/NextArrow";
import { navItems } from "@/data/NavItems";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
	const pathname = usePathname();
	const locale = useLocale();
	const t = useTranslations("NavItems");
	const pathnames = pathname.split("/").filter((x) => x && x != locale);

	pathnames.unshift("home");
	const findNavItem = (path: string) =>
		navItems.find((item) => item.label === `${path}`);
	return (
		<>
			<div className="hidden items-center sm:flex">
				{pathnames.map((value, index) => {
					const last = index === pathnames.length - 1;
					const navItem = findNavItem(value);
					const Icon = navItem?.filledIcon || null;
					const to = `/${locale}${navItem?.link}`;
					return (
						<div key={index} className="flex items-center">
							<Link
								className={
									last
										? "sm:text-black sm:dark:text-white"
										: "sm:text-zinc-500 sm:dark:text-zinc-400"
								}
								href={to}
							>
								<div className="group flex items-center">
									{Icon && (
										<Icon size={last ? "20px" : "16px"} />
									)}
									<div
										className={`${
											last
												? "from-black to-black dark:from-white dark:to-white"
												: "from-zinc-500 to-zinc-500 dark:from-zinc-400 dark:to-zinc-400"
										} bg-gradient-radial bg-[length:0%_1px] bg-bottom bg-no-repeat pl-0.5 transition-all duration-300 ease-out active:bg-[length:100%_1px] sm:group-hover:bg-[length:100%_1px]`}
									>
										<p className="text-sm">{t(value)}</p>
									</div>
								</div>
							</Link>
							{!last && (
								<div className="px-0.5">
									<NextArrow size={"10px"} />
								</div>
							)}
						</div>
					);
				})}
			</div>
			<div className="sm:hidden">
				{(() => {
					const navItem = findNavItem(pathnames[0]);
					const Icon = navItem?.filledIcon || null;
					const to = `/${locale}${navItem?.link}`;
					return (
						<Link href={to}>
							<div className="flex items-center">
								{Icon && <Icon size="20px" />}
								<div className="bg-gradient-radial from-black to-black bg-[length:0%_1px] bg-bottom bg-no-repeat pl-0.5 transition-all duration-300 ease-out active:bg-[length:100%_1px] dark:from-white dark:to-white">
									<p className="text-sm">{t(pathnames[0])}</p>
								</div>
							</div>
						</Link>
					);
				})()}
			</div>
		</>
	);
};
// </div>

export default Breadcrumbs;
