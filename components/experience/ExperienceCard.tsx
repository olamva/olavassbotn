import { Experience } from "@/app/types/default";
import Image from "next/image";

const ExperienceCard = ({ experience }: { experience: Experience }) => {
	return (
		<div className="bg-primary-main shadow rounded h-fit w-full">
			<a className="w-full" href={experience.href ?? ""}>
				<div className="p-6 flex cursor-pointer">
					{experience.imgs.length && (
						<div className="flex flex-col items-center justify-center mr-6">
							{experience.imgs.map((img, imgIndex) => (
								<div
									key={imgIndex}
									className={`size-[30px] relative ${
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
											className="absolute inset-0 w-full h-auto"
										/>
									</div>
									<div className="dark:hidden">
										<Image
											src={img.darkSrc ?? img.src}
											alt={img.alt}
											className="absolute inset-0 w-full h-auto"
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
								<hr className="my-1 mx-auto w-full border-zinc-400" />
								{experience.description}
							</>
						)}
					</div>
				</div>
			</a>
		</div>
	);
};

export default ExperienceCard;
