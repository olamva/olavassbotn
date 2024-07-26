import Button from "@/components/default/Button";
import Paper from "@/components/default/Paper";
import PlaySnakeButton from "@/components/projects/PlaySnakeButton";
import PlayWordleButton from "@/components/projects/PlayWordleButton";
import GitHub from "@/public/icons/GitHub";
import { useTranslations } from "next-intl";
import Link from "next/link";

const ProjectsGrid = () => {
	const t = useTranslations("Projects");
	return (
		<div className="my-4 grid grid-cols-2 gap-3">
			{t.raw("projects").map(
				(
					section: {
						title: string;
						description?: string;
						snakeGame?: string;
						wordleGame?: string;
						githubLink?: string;
						projectID?: string;
					},
					index: number,
				) => (
					<div className="col-span-2 sm:col-span-1" key={index}>
						<Paper>
							<h5 className="mb-3 text-base font-bold sm:text-lg md:text-xl">
								{section.title}
							</h5>
							{/* {section.description && (
								<p className="text-xs sm:text-sm md:text-base">
									{section.description}
								</p>
							)} */}
							{section.snakeGame && <PlaySnakeButton />}
							{section.wordleGame && <PlayWordleButton />}
							{section.githubLink && (
								<Link
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
								</Link>
							)}
						</Paper>
					</div>
				),
			)}
		</div>
	);
};

export default ProjectsGrid;
