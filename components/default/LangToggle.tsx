"use client";
import NOFlag from "@/public/NO.png";
import UKFlag from "@/public/UK.png";
import { Button } from "@mui/material";
import { useTranslation } from "next-i18next";
import Image, { StaticImageData } from "next/image";
import React from "react";
const LangToggle: React.FC = () => {
	const { i18n } = useTranslation();
	const toggleLanguage = () => {
		const nextLanguage = i18n.language === "en" ? "no" : "en";
		i18n.changeLanguage(nextLanguage);
	};
	const languages: { [key: string]: StaticImageData } = {
		en: UKFlag,
		no: NOFlag,
	};
	const flagSrc = languages[i18n.language];
	return (
		<>
			{flagSrc && (
				<Button onClick={toggleLanguage}>
					<Image
						src={flagSrc}
						alt="Toggle Language"
						width={27}
						height={27}
					/>
				</Button>
			)}
		</>
	);
};
export default LangToggle;
