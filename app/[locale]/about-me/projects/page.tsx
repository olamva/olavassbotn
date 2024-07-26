import TitleText, { TitleDivider } from "@/components/default/TitleText";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import { useTranslations } from "next-intl";

const Projects = () => {
	const t = useTranslations("Projects");
	return (
		<div className="m-6 sm:mx-auto sm:my-6 sm:w-[60%]">
			<TitleText t={t} />
			<TitleDivider />
			<ProjectsGrid />
		</div>
	);
};

export default Projects;
