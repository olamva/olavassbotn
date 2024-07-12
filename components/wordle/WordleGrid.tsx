import { AMT_COLS, AMT_ROWS } from "@/app/data/WordleConstants";
import { RefObject } from "react";

const WordleGrid = ({ divRef }: { divRef: RefObject<HTMLDivElement> }) => {
	return (
		<div className="grid grid-cols-5 gap-2 w-fit" ref={divRef}>
			{Array.from({ length: AMT_COLS * AMT_ROWS }, (_, i) => (
				<div
					key={i}
					className="border border-zinc-500 dark:border-zinc-600 rounded size-16  items-center justify-center flex text-4xl "
				/>
			))}
		</div>
	);
};

export default WordleGrid;