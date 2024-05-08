"use client";
import { ReactNode, createContext, useContext } from "react";
interface ToggleStatesContextType {
	toggleDrawer: (newOpen: boolean) => () => void;
	openDrawer: boolean;
	setOpenMenu: (currentValue: boolean) => void;
	openMenu: boolean;
	isMac: boolean;
	override: boolean;
	setOverride: (value: boolean) => void;
}
const ToggleStatesContext = createContext<ToggleStatesContextType>({
	toggleDrawer: () => () => {},
	openDrawer: false,
	setOpenMenu: () => {},
	openMenu: false,
	isMac: false,
	override: false,
	setOverride: () => {},
});
interface ToggleStatesProviderProps {
	children: ReactNode;
	toggleDrawer: (newOpen: boolean) => () => void;
	openDrawer: boolean;
	setOpenMenu: (currentValue: boolean) => void;
	openMenu: boolean;
	isMac: boolean;
	override: boolean;
	setOverride: (value: boolean) => void;
}
export const useToggleStates = () => useContext(ToggleStatesContext);
const ToggleStatesProvider: React.FC<ToggleStatesProviderProps> = ({
	children,
	toggleDrawer,
	openDrawer,
	setOpenMenu,
	openMenu,
	isMac,
	override,
	setOverride,
}) => {
	return (
		<ToggleStatesContext.Provider
			value={{
				toggleDrawer,
				openDrawer,
				setOpenMenu,
				openMenu,
				isMac,
				override,
				setOverride,
			}}
		>
			{children}
		</ToggleStatesContext.Provider>
	);
};
export default ToggleStatesProvider;
