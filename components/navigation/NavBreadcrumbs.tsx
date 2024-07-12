"use client";
import { navItems } from "@/app/data/NavItems";
import NextArrow from "@/public/icons/NextArrow";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const NavBreadcrumbs = () => {
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
				<a
					className={`hover:underline ${
						last
							? "text-black dark:text-white"
							: "text-zinc-500 dark:text-zinc-200"
					}`}
					href={to}
				>
					<div className="flex items-center">
						{Icon && (
							<div>
								<Icon />
							</div>
						)}
						<p className="px-1 text-xs sm:text-sm">{t(value)}</p>
					</div>
				</a>
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

export default NavBreadcrumbs;
