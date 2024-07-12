import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { JSX } from "react";

export type NavItem = {
	label: string;
	link: string;
	icon:
		| (OverridableComponent<SvgIconTypeMap<unknown, "svg">> & {
				muiName: string;
		  })
		| (() => JSX.Element);
	filledIcon:
		| (OverridableComponent<SvgIconTypeMap<unknown, "svg">> & {
				muiName: string;
		  })
		| (() => JSX.Element);
	requiresAdmin?: boolean;
	isFooter?: boolean;
};
