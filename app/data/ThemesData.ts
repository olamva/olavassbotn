import { ThemesPaper } from "@/app/types/default";

export const papers: ThemesPaper[] = [
	{
		label: "Primary Main",
		color: "bg-primary-main",
	},
	{
		label: "Primary Dark",
		color: "bg-primary-dark",
	},
	{
		label: "Primary Light",
		color: "bg-primary-light",
	},
	{
		label: "Primary Contrast Text",
		color: "bg-black dark:bg-white",
		textColor: "text-white dark:text-black",
	},
	{
		label: "Background Default",
		color: "bg-default",
	},
];
