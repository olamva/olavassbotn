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
	Work,
	WorkOutline,
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
		label: "about-me",
		icon: PersonOutlined,
		filledIcon: Person,
		link: "/about-me",
	},
	{
		label: "projects",
		icon: AssignmentOutlined,
		filledIcon: Assignment,
		link: "/projects",
	},
	{
		label: "experience",
		icon: WorkOutline,
		filledIcon: Work,
		link: "/experience",
	},
	{
		label: "themes",
		icon: PaletteOutlined,
		filledIcon: Palette,
		link: "/themes",
		requiresAdmin: true,
	},
	{
		label: "contribute",
		link: "https://github.com/olamva/olavassbotn",
		icon: HelpOutline,
		filledIcon: Help,
		isFooter: true,
	},
];
