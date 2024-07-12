import ExperienceCard from "@/components/experience/ExperienceCard";
import { useExperienceList } from "@/hooks/useExperienceList";

const ExperienceGrid = () => {
	const experienceList = useExperienceList();
	return (
		<div className="mt-4 m-auto max-w-full md:max-w-[80%] grid gap-2 w-full grid-cols-1 sm:grid-cols-2">
			{experienceList.map((item, index) => (
				<ExperienceCard key={index} experience={item} />
			))}
		</div>
	);
};
export default ExperienceGrid;
