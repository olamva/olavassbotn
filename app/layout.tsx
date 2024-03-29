import "@/app/globals.css";
import ApplicationShell from "@/components/default/ApplicationShell";
import { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Ola Munthe Vassbotn's Portfolio",
	description: "A website designed to show off Ola's skills and projects.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	const messages = useMessages();
	unstable_setRequestLocale("en");
	return (
		<html lang="en">
			<NextIntlClientProvider locale="en" messages={messages}>
				<ApplicationShell>{children}</ApplicationShell>
			</NextIntlClientProvider>
		</html>
	);
}
