import ApplicationShell from "@/components/default/ApplicationShell";
import Footer from "@/components/default/Footer";
import Drawer from "@/components/navigation/Drawer";
import NavBar from "@/components/navigation/NavBar";
import SearchMenu from "@/components/navigation/SearchMenu";
import InputDetector from "@/components/snakeGame/InputDetector";
import { konamiCode } from "@/data/ProjectsData";
import "@/globals.css";
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

const LocaleLayout = ({
	children,
	params: { locale },
}: {
	children: ReactNode;
	params: { locale: string };
}) => {
	unstable_setRequestLocale(locale);
	const messages = useMessages();
	const cookieStore = cookies();
	const savedMode = cookieStore.get("themeMode");

	const devMode = cookieStore.get("devMode");
	const devModeValue = devMode?.value === "true";
	return (
		<html lang={locale} className={savedMode?.value ?? "dark"}>
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</head>
			<NextIntlClientProvider locale={locale} messages={messages}>
				<Analytics />
				<SpeedInsights />
				<ApplicationShell savedDevMode={devModeValue}>
					<body className="bg-default font-light text-black transition-colors dark:text-white">
						<SearchMenu />
						<Drawer />
						<div className="flex min-h-svh flex-col">
							<main className="flex-grow">
								<NavBar />
								{children}
							</main>
							<Footer />
							<InputDetector sequenceToCheck={konamiCode} />
						</div>
					</body>
				</ApplicationShell>
			</NextIntlClientProvider>
		</html>
	);
};

export default LocaleLayout;
