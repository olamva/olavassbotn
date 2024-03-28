// import { useLanguage } from "@/contexts/LanguageContext";
import NOFlag from "@/public/NO.png";
import UKFlag from "@/public/UK.png";
import { Button } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";
const LangToggle: React.FC = () => {
	// const { language, setLanguage } = useLanguage();
	// const toggleLanguage = () => {
	// 	setLanguage(language === "en" ? "no" : "en");
	// };

	const languages: { [key: string]: StaticImageData } = {
		en: UKFlag,
		no: NOFlag,
	};
	// const flagSrc = languages[language];
	return (
		<Button
			// onClick={toggleLanguage}
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
				// src={flagSrc}
				src={NOFlag}
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
