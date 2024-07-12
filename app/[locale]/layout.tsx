import ApplicationShell from "@/components/default/ApplicationShell";
import Footer from "@/components/default/Footer";
import NavBar from "@/components/navigation/NavBar";
import NavDrawer from "@/components/navigation/NavDrawer";
import NavMenu from "@/components/navigation/NavMenu";
import "@/public/globals.css";
import { CssBaseline, PaletteMode } from "@mui/material";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
	const savedTheme = (savedMode?.value ?? "dark") as PaletteMode;

	const devMode = cookieStore.get("devMode");
	const devModeValue = devMode?.value === "true";
	return (
		<html lang={locale} className={savedTheme === "dark" ? savedTheme : ""}>
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</head>
			<NextIntlClientProvider locale={locale} messages={messages}>
				<Analytics />
				<SpeedInsights />
				<ApplicationShell
					savedMode={savedTheme}
					savedDevMode={devModeValue}
				>
					<CssBaseline />
					<body className="text-black dark:text-white">
						<NavMenu />
						<NavDrawer />
						<div className="flex flex-col min-h-svh">
							<main className="flex-grow">
								<NavBar />
								{children}
							</main>
							<Footer />
						</div>
					</body>
				</ApplicationShell>
			</NextIntlClientProvider>
		</html>
	);
}
