import { NavItem } from "@/app/types/nav";
import {
	Assignment,
	AssignmentOutlined,
	Help,
	HelpOutline,
	Home,
	HomeOutlined,
	Palette,
	PaletteOutlined,
	Person,
	PersonOutlined,
} from "@mui/icons-material";

export const navItems: NavItem[] = [
	{
		label: "home",
		icon: HomeOutlined,
		filledIcon: Home,
		link: "",
	},
	{ label: "Divider1", isDivider: true },
	{
		label: "projects",
		icon: AssignmentOutlined,
		filledIcon: Assignment,
		link: "/projects",
	},
	{
		label: "about-me",
		icon: PersonOutlined,
		filledIcon: Person,
		link: "/about-me",
	},
	{
		label: "themes",
		icon: PaletteOutlined,
		filledIcon: Palette,
		link: "/themes",
	},
	{
		label: "contribute",
		link: "https://github.com/olamva/olavassbotn",
		icon: HelpOutline,
		filledIcon: Help,
		isFooter: true,
	},
];
