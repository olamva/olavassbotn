import AlternatingDivider from "@/components/about-me/AlternatingDivider";
import Paper from "@/components/default/Paper";
import { useTranslations } from "next-intl";
const AboutMeGrid = () => {
	const t = useTranslations("About Me");
	return (
		<div className="grid grid-cols-2 gap-3">
			{t
				.raw("sections")
				.map(
					(
						section: { title: string; content: string },
						index: number,
					) => (
						<div
							className="col-span-2 mb-8 sm:col-span-1"
							key={index}
						>
							<AlternatingDivider index={index}>
								<p className="text-base sm:text-2xl md:text-[2rem]">
									{section.title}
								</p>
							</AlternatingDivider>
							<Paper>
								<p className="flex-grow text-xs sm:text-sm md:text-base">
									{section.content}
								</p>
							</Paper>
						</div>
					),
				)}
		</div>
	);
};
export default AboutMeGrid;
