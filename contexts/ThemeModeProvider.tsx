"use client";
import { PaletteMode } from "@mui/material";
import { ReactNode, createContext, useContext, useMemo, useState } from "react";
interface ColorModeContextType {
	toggleColorMode: () => void;
	mode: PaletteMode;
}
const ColorModeContext = createContext<ColorModeContextType>({
	toggleColorMode: () => {},
	mode: "light",
});

interface ThemeModeProviderProps {
	children: ReactNode;
}
export const useColorMode = () => useContext(ColorModeContext);
const ThemeModeProvider: React.FC<ThemeModeProviderProps> = ({ children }) => {
	const [mode, setMode] = useState<PaletteMode>("light");
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) =>
					prevMode === "light" ? "dark" : "light"
				);
				console.log("mode", mode);
			},
			mode,
		}),
		[mode]
	);
	return (
		<ColorModeContext.Provider value={colorMode}>
			{children}
		</ColorModeContext.Provider>
	);
};
export default ThemeModeProvider;
