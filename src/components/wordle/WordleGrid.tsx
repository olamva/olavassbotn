import { AMT_COLS, AMT_ROWS } from "@/data/wordle/WordleConstants";
import { RefObject } from "react";

const WordleGrid = ({ divRef }: { divRef: RefObject<HTMLDivElement> }) => (
	<div className="grid w-fit grid-cols-5 gap-2" ref={divRef}>
		{Array.from({ length: AMT_COLS * AMT_ROWS }, (_, i) => (
			<div
				key={i}
				className="flex size-16 select-none items-center justify-center rounded border border-zinc-500 text-4xl dark:border-zinc-600"
			/>
		))}
	</div>
);

export default WordleGrid;
