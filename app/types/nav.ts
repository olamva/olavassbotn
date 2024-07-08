import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type NavItem = {
	label: string;
	link?: string;
	icon?: OverridableComponent<SvgIconTypeMap<unknown, "svg">> & {
		muiName: string;
	};
	filledIcon?: OverridableComponent<SvgIconTypeMap<unknown, "svg">> & {
		muiName: string;
	};
	requiresAdmin?: boolean;
	isDivider?: boolean;
	isFooter?: boolean;
};
