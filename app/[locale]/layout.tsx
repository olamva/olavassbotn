import "@/app/globals.css";
import ApplicationShell from "@/components/default/ApplicationShell";
import Footer from "@/components/default/Footer";
import NavBar from "@/components/navigation/NavBar";
import NavDrawer from "@/components/navigation/NavDrawer";
import NavMenu from "@/components/navigation/NavMenu";
import { Box, CssBaseline, PaletteMode } from "@mui/material";
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
		<html lang={locale}>
			<NextIntlClientProvider locale={locale} messages={messages}>
				<Analytics />
				<SpeedInsights />
				<ApplicationShell
					savedMode={savedTheme}
					savedDevMode={devModeValue}
				>
					<CssBaseline />
					<body>
						<NavMenu />
						<NavDrawer />
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								minHeight: "100svh",
							}}
						>
							<Box
								component="main"
								sx={{
									flexGrow: 1,
								}}
							>
								<NavBar />
								{children}
							</Box>
							<Footer />
						</Box>
					</body>
				</ApplicationShell>
			</NextIntlClientProvider>
		</html>
	);
}
