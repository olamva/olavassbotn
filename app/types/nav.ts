import { JSX } from "react";

export type NavItem = {
	label: string;
	link: string;
	icon: ({ size }: { size?: string }) => JSX.Element;
	filledIcon: ({ size }: { size?: string }) => JSX.Element;
	requiresAdmin?: boolean;
	isFooter?: boolean;
};
