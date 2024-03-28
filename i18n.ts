import { locales } from "@/config";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ locale }) => {
	if (!locales.includes(locale as any)) notFound();

	return {
		messages: (
			await (locale === "en"
				? import("@/public/locales/en/translation.json")
				: import(`@/public/locales/${locale}/translation.json`))
		).default,
	};
});
