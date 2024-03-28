import "@/app/globals.css";
import Template from "@/components/default/template";
import theme from "@/public/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

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
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<body>
						<Template>{children}</Template>
					</body>
				</ThemeProvider>
			</NextIntlClientProvider>
		</html>
	);
}
