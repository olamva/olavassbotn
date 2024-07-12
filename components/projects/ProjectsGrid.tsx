import Button from "@/components/default/Button";
import Paper from "@/components/default/Paper";
import GameButton from "@/components/game/GameButton";
import { GitHub } from "@mui/icons-material";
import { useTranslations } from "next-intl";

const ProjectsGrid = () => {
	const t = useTranslations("Projects");
	return (
		<div className="grid gap-3 my-4 grid-cols-2">
			{t.raw("projects").map(
				(
					section: {
						title: string;
						description: string;
						mobileDescription?: string;
						githubLink?: string;
						projectID?: string;
					},
					index: number
				) => (
					<div className="col-span-2 sm:col-span-1" key={index}>
						<Paper>
							<h5 className="text-base sm:text-2xl md:text-[2rem] mb-3">
								{section.title}
							</h5>
							<div className="hidden sm:block">
								<p className="text-xs sm:text-sm md:text-base">
									{section.description}
								</p>
							</div>
							<div className="block sm:hidden">
								<p className="text-xs sm:text-sm md:text-base">
									{section.mobileDescription ??
										section.description}
								</p>
							</div>
							{section.mobileDescription && <GameButton />}
							{section.githubLink && (
								<a
									className="w-fit self-center"
									href={`https://github.com/olamva/${section.projectID}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button>
										<GitHub />
										<p className="pl-1">
											{section.githubLink}
										</p>
									</Button>
								</a>
							)}
						</Paper>
					</div>
				)
			)}
		</div>
	);
};

export default ProjectsGrid;
