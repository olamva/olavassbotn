import { JSX, ReactElement } from "react";

export type NavItem = {
	label: string;
	link: string;
	icon: ({ size }: { size?: string }) => JSX.Element;
	filledIcon: ({ size }: { size?: string }) => JSX.Element;
	requiresAdmin?: boolean;
	isFooter?: boolean;
};

export type SearchMenuItem = {
	label: string;
	darkModeLabel?: string;
	icon: ReactElement;
	href?: string;
	onClick?: () => void;
};

export type SearchMenuGroup = {
	title: string;
	items: SearchMenuItem[];
};
