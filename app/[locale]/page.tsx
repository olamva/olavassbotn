import { useTranslations } from "next-intl";

export default function Landing() {
	const t = useTranslations("HomePage");
	return (
		<div className="mt-[10svh] text-black dark:text-white">
			<p className="text-[2rem] sm:text-5xl md:text-[5rem] lg:text-8xl font-[900] text-center">
				{t("title")}
			</p>
			<p className="text-center text-xs sm:text-base md:text-2xl lg:text-[2rem] font-[50]">
				{t("subtitle")}
			</p>
		</div>
	);
}
