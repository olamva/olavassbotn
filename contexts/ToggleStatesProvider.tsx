"use client";
import { ReactNode, createContext, useContext } from "react";
interface ToggleStatesContextType {
	toggleDrawer: (newOpen: boolean) => () => void;
	openDrawer: boolean;
	setOpenMenu: (currentValue: boolean) => void;
	openMenu: boolean;
	isMac: boolean;
}
const ToggleStatesContext = createContext<ToggleStatesContextType>({
	toggleDrawer: () => () => {},
	openDrawer: false,
	setOpenMenu: () => {},
	openMenu: false,
	isMac: false,
});
interface ToggleStatesProviderProps {
	children: ReactNode;
	toggleDrawer: (newOpen: boolean) => () => void;
	openDrawer: boolean;
	setOpenMenu: (currentValue: boolean) => void;
	openMenu: boolean;
	isMac: boolean;
}
export const useToggleStates = () => useContext(ToggleStatesContext);
const ToggleStatesProvider: React.FC<ToggleStatesProviderProps> = ({
	children,
	toggleDrawer,
	openDrawer,
	setOpenMenu,
	openMenu,
	isMac,
}) => {
	return (
		<ToggleStatesContext.Provider
			value={{ toggleDrawer, openDrawer, setOpenMenu, openMenu, isMac }}
		>
			{children}
		</ToggleStatesContext.Provider>
	);
};
export default ToggleStatesProvider;
