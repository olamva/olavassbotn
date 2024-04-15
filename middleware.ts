import createMiddleware from "next-intl/middleware";

export default createMiddleware({
	locales: ["no", "en"],

	defaultLocale: "no",
});

export const config = {
	matcher: ["/", "/(no|en)/:path*"],
};
