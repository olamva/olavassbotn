import { NavItem } from "@/app/types/nav";
import Apps from "@/assets/Apps";
import Assignment, { AssignmentOutlined } from "@/assets/Assignment";
import { HelpOutlined } from "@/assets/Help";
import Home, { HomeOutlined } from "@/assets/Home";
import Palette, { PaletteOutlined } from "@/assets/Palette";
import Person, { PersonOutlined } from "@/assets/Person";
import Work, { WorkOutlined } from "@/assets/Work";

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
		icon: WorkOutlined,
		filledIcon: Work,
		link: "/about-me/experience",
	},
	{
		label: "wordle",
		icon: Apps,
		filledIcon: Apps,
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
		icon: HelpOutlined,
		filledIcon: HelpOutlined,
		isFooter: true,
	},
];
