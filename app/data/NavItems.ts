import { NavItem } from "@/app/types/nav";
import Home from "@/public/icons/Home";
import {
	Assignment,
	AssignmentOutlined,
	Help,
	HelpOutline,
	HomeOutlined,
	Palette,
	PaletteOutlined,
	Person,
	PersonOutlined,
	Work,
	WorkOutline,
} from "@mui/icons-material";
import AppsIcon from "@mui/icons-material/Apps";

export const navItems: NavItem[] = [
	{
		label: "home",
		icon: HomeOutlined,
		filledIcon: Home,
		link: "",
	},
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
		link: "/about-me/projects",
	},
	{
		label: "experience",
		icon: WorkOutline,
		filledIcon: Work,
		link: "/about-me/experience",
	},
	{
		label: "wordle",
		icon: AppsIcon,
		filledIcon: AppsIcon,
		link: "/about-me/projects/wordle",
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
