import { Experience } from "@/app/types/default";
import Image from "next/image";
import Link from "next/link";

const ExperienceCard = ({ experience }: { experience: Experience }) => {
	return (
		<div className="bg-primary my-2 h-fit w-full rounded shadow sm:my-0">
			<Link className="w-full" href={experience.href}>
				<div className="flex cursor-pointer p-6">
					{experience.imgs.length && (
						<div className="mr-6 flex flex-col items-center justify-center">
							{experience.imgs.map((img, imgIndex) => (
								<div
									key={imgIndex}
									className={`size-[30px] ${
										experience.imgs.length > 1 &&
										imgIndex !== experience.imgs.length - 1
											? "mb-[10px]"
											: ""
									} ${
										experience.imgs.length > 1 &&
										imgIndex !== 0
											? "mt-[10px]"
											: ""
									}`}
								>
									<div className="hidden dark:block">
										<Image
											src={img.src}
											alt={img.alt}
											className="m-auto"
										/>
									</div>
									<div className="dark:hidden">
										<Image
											src={img.darkSrc ?? img.src}
											alt={img.alt}
											className="m-auto"
										/>
									</div>
								</div>
							))}
						</div>
					)}
					<div className="my-auto text-xs sm:text-sm md:text-base">
						<p className="font-bold">{experience.title}</p>
						{experience.description && (
							<>
								<hr className="mx-auto my-1 w-full border-zinc-400" />
								{experience.description}
							</>
						)}
					</div>
				</div>
			</Link>
		</div>
	);
};

export default ExperienceCard;
