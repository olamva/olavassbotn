import { ThemesPaper } from "@/app/types/default";

export const papers: ThemesPaper[] = [
	{ label: "Primary Main", color: "primary.main" },
	{ label: "Primary Dark", color: "primary.dark" },
	{ label: "Primary Light", color: "primary.light" },
	{
		label: "Primary Contrast Text",
		color: "primary.contrastText",
		textColor: "secondary.contrastText",
	},
	{
		label: "Background Default",
		color: "background.default",
	},
];
