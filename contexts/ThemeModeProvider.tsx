"use client";
import { PaletteMode } from "@mui/material";
import {
	Dispatch,
	FC,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useMemo,
} from "react";
interface ColorModeContextType {
	toggleColorMode: () => void;
	mode?: PaletteMode;
}
const ColorModeContext = createContext<ColorModeContextType>({
	toggleColorMode: () => {},
});
interface ThemeModeProviderProps {
	children: ReactNode;
	mode: PaletteMode;
	setMode: Dispatch<SetStateAction<PaletteMode>>;
}
export const useColorMode = () => useContext(ColorModeContext);
const ThemeModeProvider: FC<ThemeModeProviderProps> = ({
	children,
	mode,
	setMode,
}: ThemeModeProviderProps) => {
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
			},
			mode,
		}),
		[setMode, mode]
	);
	return (
		<ColorModeContext.Provider value={colorMode}>
			{children}
		</ColorModeContext.Provider>
	);
};
export default ThemeModeProvider;
