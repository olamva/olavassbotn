import "@/app/globals.css";
import ApplicationShell from "@/components/default/ApplicationShell";
import { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
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
	const messages = useMessages();
	return (
		<html lang={locale}>
			<NextIntlClientProvider locale={locale} messages={messages}>
				<ApplicationShell>{children}</ApplicationShell>
			</NextIntlClientProvider>
		</html>
	);
}
