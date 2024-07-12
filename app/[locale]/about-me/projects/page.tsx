import TitleText, { TitleDivider } from "@/components/default/TitleText";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import { useTranslations } from "next-intl";
export default function Projects() {
	const t = useTranslations("Projects");
	return (
		<div className="my-8 px-6">
			<TitleText t={t} />
			<TitleDivider />
			<ProjectsGrid />
		</div>
	);
}
