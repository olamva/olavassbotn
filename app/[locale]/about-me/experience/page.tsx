import TitleText, { TitleDivider } from "@/components/default/TitleText";
import ExperienceGrid from "@/components/experience/ExperienceGrid";
import { useTranslations } from "next-intl";
export default function Projects() {
	const t = useTranslations("Experience");
	return (
		<div className="m-6">
			<TitleText t={t} />
			<TitleDivider />
			<ExperienceGrid />
		</div>
	);
}
