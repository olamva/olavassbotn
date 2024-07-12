"use client";
import { navItems } from "@/app/data/NavItems";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Breadcrumbs, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const NavBreadcrumbs = () => {
	// TODO use the nextarrow svg
	const pathname = usePathname();
	const locale = useLocale();
	const t = useTranslations("NavItems");
	const pathnames = pathname.split("/").filter((x) => x && x != locale);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	pathnames.unshift("home");
	const findNavItem = (path: string) => {
		return navItems.find((item) => item.label === `${path}`);
	};
	return (
		<Breadcrumbs
			separator={<NavigateNextIcon fontSize="small" />}
			aria-label="breadcrumb"
			className="pl-2 sm:pl-6"
		>
			{pathnames.map((value, index) => {
				const last = index === pathnames.length - 1;
				const navItem = findNavItem(value);
				const Icon = navItem?.filledIcon || null;
				const to = `/${locale}${navItem?.link}`;
				return (
					<a
						className={`hover:underline ${
							last ? "text-black dark:text-white" : "text-inherit"
						}`}
						key={index}
						href={to}
					>
						<div className="flex items-center">
							{Icon && (
								<Icon
									style={{
										marginRight: 5,
										fontSize: isMobile ? "1rem" : "1.25rem",
									}}
								/>
							)}
							<p className="text-xs sm:text-sm">{t(value)}</p>
						</div>
					</a>
				);
			})}
		</Breadcrumbs>
	);
};
export default NavBreadcrumbs;
