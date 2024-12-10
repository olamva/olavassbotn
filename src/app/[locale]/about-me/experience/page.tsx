import TitleText, { TitleDivider } from "@/components/default/TitleText";
import ExperienceGrid from "@/components/experience/ExperienceGrid";
import { useTranslations } from "next-intl";

const Projects = () => {
	const t = useTranslations("Experience");
	return (
		<div className="m-6">
			<TitleText t={t} />
			<TitleDivider />
			<ExperienceGrid />
		</div>
	);
};

export default Projects;
