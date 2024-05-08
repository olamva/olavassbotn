"use client";
import NOFlag from "@/public/flags/NO.png";
import USFlag from "@/public/flags/US.png";
import { IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLocale } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { usePathname, useRouter } from "next/navigation";

const LangToggle = () => {
	const router = useRouter();
	const pathname = usePathname();
	const locale = useLocale();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const toggleLanguage = () => {
		const newLocale = locale === "no" ? "en" : "no";
		const newPathname = "/" + newLocale + pathname.slice(3);
		router.push(newPathname);
		router.refresh(); // ! without this extra refresh, the theme toggle completely breaks apart when changing the language
	};

	const languages: { [key: string]: StaticImageData } = {
		en: USFlag,
		no: NOFlag,
	};
	const flagSrc = languages[locale];
	return (
		<IconButton
			onClick={toggleLanguage}
			sx={{
				background: "none",
				border: "none",
				cursor: "pointer",
				minWidth: "0",
				"& .MuiButton-startIcon": {
					margin: "0",
				},
				"& .MuiButton-endIcon": {
					margin: "0",
				},
				padding: "4px",
			}}
		>
			<Image
				src={flagSrc}
				alt="Toggle Language"
				width={isMobile ? 15 : 20}
				height={isMobile ? 15 : 20}
				style={{
					borderRadius: "50%",
				}}
			/>
		</IconButton>
	);
};
export default LangToggle;
