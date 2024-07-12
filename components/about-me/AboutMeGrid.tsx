import AlternatingDivider from "@/components/about-me/AlternatingDivider";
import { useTranslations } from "next-intl";

const AboutMeGrid = () => {
	const t = useTranslations("About Me");
	return (
		<div className="grid gap-3 grid-cols-2">
			{t
				.raw("sections")
				.map(
					(
						section: { title: string; content: string },
						index: number
					) => (
						<div className="col-span-2 sm:col-span-1 mb-8">
							<AlternatingDivider index={index}>
								<p className="text-base sm:text-2xl md:text-[2rem]">
									{section.title}
								</p>
							</AlternatingDivider>
							<div className="flex flex-col h-full p-6 bg-primary-main border border-zinc-300 dark:border-zinc-800 rounded">
								<p className="flex-grow text-xs sm:text-sm md:text-base">
									{section.content}
								</p>
							</div>
						</div>
					)
				)}
		</div>
	);
};
export default AboutMeGrid;
