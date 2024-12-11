"use client";
import { useToggleStates } from "@/contexts/ToggleStatesProvider";
import Link from "next/link";
import {
	Dispatch,
	LegacyRef,
	ReactElement,
	ReactNode,
	SetStateAction,
	useState,
} from "react";

interface MenuItemProps {
	icon: ReactElement;
	onClick?: () => void;
	href?: string;
	children: ReactNode;
	flatIndex: number;
	selectedIndex: number;
	setSelectedIndex: Dispatch<SetStateAction<number>>;
	clearInputField: () => void;
	innerRef: (element: HTMLButtonElement | HTMLAnchorElement | null) => void;
	ignoreMouse: boolean;
}

export const MenuItemLink = ({
	icon,
	href,
	children,
	flatIndex,
	selectedIndex,
	setSelectedIndex,
	clearInputField,
	innerRef,
	ignoreMouse,
}: MenuItemProps) => {
	const { setOpenMenu } = useToggleStates();
	const [mouseEntered, setMouseEntered] = useState<boolean>(false);

	const handleMouseEnter = () => {
		if (!mouseEntered && !ignoreMouse) {
			setSelectedIndex(flatIndex);
			setMouseEntered(true);
		}
	};

	const handleMouseLeave = () => setMouseEntered(false);

	return (
		<Link
			className={`flex w-full select-none items-center px-3 py-2 transition-all ${
				flatIndex === selectedIndex
					? "bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-10"
					: ""
			}`}
			href={href ?? ""}
			onClick={() => {
				setOpenMenu(false);
				clearInputField();
			}}
			ref={innerRef as LegacyRef<HTMLAnchorElement>}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{icon}
			<div className="w-1" />
			{children}
		</Link>
	);
};

export const MenuItemButton = ({
	icon,
	onClick,
	children,
	flatIndex,
	selectedIndex,
	setSelectedIndex,
	clearInputField,
	innerRef,
	ignoreMouse,
}: MenuItemProps) => {
	const { setOpenMenu } = useToggleStates();
	const [mouseEntered, setMouseEntered] = useState<boolean>(false);

	const handleMouseEnter = () => {
		if (!mouseEntered && !ignoreMouse) {
			setSelectedIndex(flatIndex);
			setMouseEntered(true);
		}
	};

	const handleMouseLeave = () => setMouseEntered(false);

	return (
		<button
			className={`flex w-full select-none items-center px-3 py-2 transition-all ${
				flatIndex === selectedIndex
					? "bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-10"
					: ""
			}`}
			onClick={() => {
				if (onClick) onClick();
				setOpenMenu(false);
				clearInputField();
			}}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			ref={innerRef as LegacyRef<HTMLButtonElement>}
		>
			{icon}
			<div className="w-1" />
			{children}
		</button>
	);
};
