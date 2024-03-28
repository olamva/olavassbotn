import "@/app/globals.css";
import ApplicationShell from "@/components/default/ApplicationShell";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { ReactNode } from "react";
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
