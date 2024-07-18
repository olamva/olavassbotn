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

	const handleMouseLeave = () => {
		setMouseEntered(false);
	};

	return (
		<Link
			className={`flex py-2 px-3 items-center transition-all w-full select-none ${
				flatIndex === selectedIndex
					? "bg-black dark:bg-white dark:bg-opacity-10 bg-opacity-5"
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

	const handleMouseLeave = () => {
		setMouseEntered(false);
	};

	return (
		<button
			className={`flex py-2 px-3 items-center transition-all w-full select-none ${
				flatIndex === selectedIndex
					? "bg-black dark:bg-white dark:bg-opacity-10 bg-opacity-5"
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
