"use client";
import {
	Dispatch,
	FC,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useMemo,
} from "react";
interface DevModeContextType {
	toggleDevMode: () => void;
	devMode: boolean;
}
const DevModeContext = createContext<DevModeContextType>({
	toggleDevMode: () => {},
	devMode: false,
});
interface DevModeProviderProps {
	children: ReactNode;
	mode: boolean;
	setMode: Dispatch<SetStateAction<boolean>>;
}
export const useDevMode = () => useContext(DevModeContext);
const DevModeProvider: FC<DevModeProviderProps> = ({
	children,
	mode,
	setMode,
}: DevModeProviderProps) => {
	const devMode = useMemo(
		() => ({
			toggleDevMode: () => {
				setMode((prevMode) => !prevMode);
			},
			devMode: mode,
		}),
		[mode, setMode]
	);
	return (
		<DevModeContext.Provider value={devMode}>
			{children}
		</DevModeContext.Provider>
	);
};
export default DevModeProvider;
