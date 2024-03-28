import NOFlag from "@/public/NO.png";
import UKFlag from "@/public/UK.png";
import { Button } from "@mui/material";
import { useLocale } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const LangToggle: React.FC = () => {
	const locale = useLocale();
	const router = useRouter();
	const toggleLanguage = () => {
		// if the locale is "en", set router to "/no" else set it to "/en"
		router.push(locale === "en" ? "/no" : "/en");
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
