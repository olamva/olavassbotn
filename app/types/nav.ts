import { JSX } from "react";

export type NavItem = {
	label: string;
	link: string;
	icon: () => JSX.Element;
	filledIcon: () => JSX.Element;
	requiresAdmin?: boolean;
	isFooter?: boolean;
};
