import { papers } from "@/data/ThemesData";

const ThemesGrid = () =>
	papers.map((paper, index) => (
		<div key={index}>
			<div
				className={`${paper.color} ${
					paper.textColor ?? ""
				} mb-4 flex items-center justify-center border p-4 dark:border-zinc-900`}
			>
				<p className="text-center text-xs sm:text-sm md:text-base">
					{paper.label}
				</p>
			</div>
		</div>
	));

export default ThemesGrid;
