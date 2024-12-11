import { Experience } from "@/types/default";
import Image from "next/image";
import Link from "next/link";

const ExperienceCard = ({ experience }: { experience: Experience }) => (
	<div className="bg-primary my-2 h-fit w-full rounded shadow sm:my-0">
		<Link className="w-full" href={experience.href}>
			<div className="flex cursor-pointer p-6">
				{experience.imgs.length && (
					<div className="mr-6 flex flex-col items-center justify-center gap-3">
						{experience.imgs.map((img, imgIndex) => (
							<div className="size-8" key={imgIndex}>
								<div className="aspect-w-1 aspect-h-1 relative hidden h-full w-full dark:block">
									<Image
										fill
										src={img.src}
										alt={img.alt}
										className="object-contain"
									/>
								</div>
								<div className="aspect-w-1 aspect-h-1 relative h-full w-full dark:hidden">
									<Image
										fill
										src={img.darkSrc ?? img.src}
										alt={img.alt}
										className="object-contain"
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

export default ExperienceCard;
