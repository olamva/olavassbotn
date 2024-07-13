"use client";
import { navItems } from "@/app/data/NavItems";
import NextArrow from "@/public/icons/NextArrow";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
	const pathname = usePathname();
	const locale = useLocale();
	const t = useTranslations("NavItems");
	const pathnames = pathname.split("/").filter((x) => x && x != locale);

	pathnames.unshift("home");
	const findNavItem = (path: string) => {
		return navItems.find((item) => item.label === `${path}`);
	};
	return pathnames.map((value, index) => {
		const last = index === pathnames.length - 1;
		const navItem = findNavItem(value);
		const Icon = navItem?.filledIcon || null;
		const to = `/${locale}${navItem?.link}`;
		return (
			<div
				className={`items-center ${
					index !== 0 ? "hidden sm:flex" : "flex"
				}`}
				key={index}
			>
				<Link
					className={
						last
							? "sm:text-black sm:dark:text-white"
							: "sm:text-zinc-500 sm:dark:text-zinc-400"
					}
					href={to}
				>
					<div className="flex items-center">
						{Icon && <Icon size={last ? "20px" : "16px"} />}
						<div
							className={`${
								last
									? "from-black to-black dark:from-white dark:to-white"
									: "from-zinc-500 to-zinc-500 dark:from-zinc-400 dark:to-zinc-400"
							} pl-0.5 bg-bottom bg-gradient-radial bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-300 ease-out `}
						>
							<p className="text-xs sm:text-sm">{t(value)}</p>
						</div>
					</div>
				</Link>
				{!last && (
					<div className="px-0.5 hidden sm:block">
						<NextArrow size={"10px"} />
					</div>
				)}
			</div>
		);
	});
};
// </div>

export default Breadcrumbs;
