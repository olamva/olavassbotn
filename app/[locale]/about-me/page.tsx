import AboutMeGrid from "@/components/about-me/AboutMeGrid";
import SubPageChips from "@/components/about-me/SubPageChips";
import TitleText from "@/components/default/TitleText";
import { useTranslations } from "next-intl";

export default function AboutMe() {
	const t = useTranslations("About Me");
	return (
		<div className="max-w-full px-6">
			<div className="my-8">
				<TitleText t={t} />
				<SubPageChips />
				<AboutMeGrid />
			</div>
		</div>
	);
}
