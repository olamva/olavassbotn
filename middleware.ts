import createMiddleware from "next-intl/middleware";

export default createMiddleware({
	locales: ["no", "en"],

	// If Accept-Language header in HTTP request is anything
	// other than "no", this is automatically ignored.
	defaultLocale: "no",
});

export const config = {
	matcher: ["/", "/(no|en)/:path*"],
};
