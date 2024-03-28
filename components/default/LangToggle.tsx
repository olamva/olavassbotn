import NOFlag from "@/public/NO.png";
import UKFlag from "@/public/UK.png";
// TODO swap out UK flag with US flag
import { Button } from "@mui/material";
import { useLocale } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const LangToggle: React.FC = () => {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();
	const toggleLanguage = () => {
		const newLocale = locale === "en" ? "no" : "en";
		const newPathname = "/" + newLocale + pathname.slice(3);
		router.push(newPathname);
	};

	const languages: { [key: string]: StaticImageData } = {
		en: UKFlag,
		no: NOFlag,
	};
	const flagSrc = languages[locale];
	return (
		<Button
			onClick={toggleLanguage}
			sx={{
				background: "none",
				border: "none",
				cursor: "pointer",
				padding: "0",
				minWidth: "0",
				"& .MuiButton-startIcon": {
					margin: "0",
				},
				"& .MuiButton-endIcon": {
					margin: "0",
				},
			}}
		>
			<Image
				src={flagSrc}
				alt="Toggle Language"
				width={27}
				height={27}
				style={{
					borderRadius: "50%",
				}}
			/>
		</Button>
	);
};
export default LangToggle;
