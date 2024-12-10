import { useTranslations } from "next-intl";

const Landing = () => {
	const t = useTranslations("HomePage");
	return (
		<div className="mt-[10svh]">
			<h1 className="text-center text-5xl font-[900] sm:text-6xl md:text-7xl lg:text-8xl">
				{t("title")}
			</h1>
			<h2 className="text-center text-xl font-[50] md:text-3xl lg:text-5xl">
				{t("subtitle")}
			</h2>
		</div>
	);
};

export default Landing;
