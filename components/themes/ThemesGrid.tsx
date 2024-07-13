import { papers } from "@/app/data/ThemesData";

const ThemesGrid = () => {
	return papers.map((paper, index) => (
		<div key={index}>
			<div
				className={`${paper.color} ${
					paper.textColor ?? ""
				} p-4 mb-4 flex justify-center items-center border dark:border-zinc-900`}
			>
				<p className="text-xs sm:text-sm md:text-base text-center">
					{paper.label}
				</p>
			</div>
		</div>
	));
};

export default ThemesGrid;
