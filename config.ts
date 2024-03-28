import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "no"] as const;

export const pathnames = {
	"/": "/",
	"/pathnames": {
		en: "/pathnames",
		no: "/veinavn",
	},
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
