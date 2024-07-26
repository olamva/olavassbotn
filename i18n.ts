import { locales } from "@/config";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ locale }) => {
	if (!locales.includes(locale)) notFound();

	return {
		messages: (await import(`@/public/locales/${locale}/translation.json`))
			.default,
	};
});
