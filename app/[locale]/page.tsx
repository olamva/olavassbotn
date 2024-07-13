import { useTranslations } from "next-intl";

export default function Landing() {
	const t = useTranslations("HomePage");
	return (
		<div className="mt-[10svh] ">
			<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[900] text-center">
				{t("title")}
			</h1>
			<h2 className="text-center text-xl md:text-3xl lg:text-5xl font-[50]">
				{t("subtitle")}
			</h2>
		</div>
	);
}
