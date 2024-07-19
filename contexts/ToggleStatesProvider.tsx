"use client";
import { FC, ReactNode, createContext, useContext } from "react";
interface ToggleStatesContextType {
	setOpenDrawer: (newOpen: boolean) => void;
	openDrawer: boolean;
	setOpenMenu: (currentValue: boolean) => void;
	openMenu: boolean;
	override: boolean;
	setOverride: (value: boolean) => void;
}
const ToggleStatesContext = createContext<ToggleStatesContextType>({
	setOpenDrawer: () => {},
	openDrawer: false,
	setOpenMenu: () => {},
	openMenu: false,
	override: false,
	setOverride: () => {},
});
interface ToggleStatesProviderProps {
	children: ReactNode;
	setOpenDrawer: (newOpen: boolean) => void;
	openDrawer: boolean;
	setOpenMenu: (currentValue: boolean) => void;
	openMenu: boolean;
	override: boolean;
	setOverride: (value: boolean) => void;
}
export const useToggleStates = () => useContext(ToggleStatesContext);
const ToggleStatesProvider: FC<ToggleStatesProviderProps> = ({
	children,
	setOpenDrawer,
	openDrawer,
	setOpenMenu,
	openMenu,
	override,
	setOverride,
}: ToggleStatesProviderProps) => {
	return (
		<ToggleStatesContext.Provider
			value={{
				setOpenDrawer,
				openDrawer,
				setOpenMenu,
				openMenu,
				override,
				setOverride,
			}}
		>
			{children}
		</ToggleStatesContext.Provider>
	);
};
export default ToggleStatesProvider;
