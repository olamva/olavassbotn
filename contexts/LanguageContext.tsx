// "use client";
// import i18n from "@/app/i18n";
// import React, {
// 	ReactNode,
// 	createContext,
// 	useContext,
// 	useEffect,
// 	useState,
// } from "react";
// interface LanguageContextType {
// 	language: string;
// 	setLanguage: (language: string) => void;
// }
// const LanguageContext = createContext<LanguageContextType>({
// 	language: "en",
// 	setLanguage: () => {},
// });
// export const useLanguage = () => useContext(LanguageContext);
// interface LanguageProviderProps {
// 	children: ReactNode;
// }
// export const LanguageProvider: React.FC<LanguageProviderProps> = ({
// 	children,
// }) => {
// 	const [language, setLanguage] = useState(i18n.language);
// 	useEffect(() => {
// 		const changeLanguage = (lng: string) => {
// 			i18n.changeLanguage(lng);
// 			setLanguage(lng);
// 		};
// 		changeLanguage(language);
// 	}, [language]);
// 	return (
// 		<LanguageContext.Provider value={{ language, setLanguage }}>
// 			{children}
// 		</LanguageContext.Provider>
// 	);
// };
