"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";
interface LanguageContextType {
	language: string;
	setLanguage: (language: string) => void;
}
const LanguageContext = createContext<LanguageContextType>({
	language: "en",
	setLanguage: () => {},
});
export const useLanguage = () => useContext(LanguageContext);
interface LanguageProviderProps {
	children: ReactNode;
}
export const LanguageProvider: React.FC<LanguageProviderProps> = ({
	children,
}) => {
	const [language, setLanguage] = useState("en");
	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};
