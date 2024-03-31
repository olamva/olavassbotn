import "@/app/globals.css";
import ApplicationShell from "@/components/default/ApplicationShell";
import { PaletteMode } from "@mui/material";
import { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { cookies } from "next/headers";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Ola Munthe Vassbotn's Portfolio",
	description: "A website designed to show off Ola's skills and projects.",
};

export default function LocaleLayout({
	children,
	params: { locale },
}: {
	children: ReactNode;
	params: { locale: string };
}) {
	unstable_setRequestLocale(locale);
	const messages = useMessages();
	const cookieStore = cookies();
	const savedMode = cookieStore.get("themeMode");
	const savedTheme = (savedMode?.value as PaletteMode) ?? "dark";
	return (
		<html lang={locale}>
			<NextIntlClientProvider locale={locale} messages={messages}>
				<ApplicationShell savedMode={savedTheme}>
					{children}
				</ApplicationShell>
			</NextIntlClientProvider>
		</html>
	);
}
