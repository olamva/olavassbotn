"use client";
import { navItems } from "@/app/data/NavItems";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
	Box,
	Breadcrumbs,
	Link,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const NavBreadcrumbs = () => {
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
		>
			{pathnames.map((value, index) => {
				const last = index === pathnames.length - 1;
				const navItem = findNavItem(value);
				const Icon = navItem?.filledIcon || null;
				const to = `/${locale}${navItem?.link}`;
				return (
					<Link
						underline="hover"
						color={last ? "primary.contrastText" : "inherit"}
						href={to}
						key={to}
					>
						<Box display="flex" alignItems="center">
							{Icon && (
								<Icon
									style={{
										marginRight: 5,
										fontSize: isMobile ? "1rem" : "1.25rem",
									}}
								/>
							)}
							<Typography
								fontSize={isMobile ? "0.75rem" : "default"}
							>
								{t(value)}
							</Typography>
						</Box>
					</Link>
				);
			})}
		</Breadcrumbs>
	);
};
export default NavBreadcrumbs;
