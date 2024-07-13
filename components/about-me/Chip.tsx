import { ReactNode } from "react";

const Chip = ({ children }: { children: ReactNode }) => (
	<button className="py-1 px-2 border border-zinc-300 dark:border-zinc-500 rounded-full text-sm text-center select-none hover:bg-black dark:hover:bg-white dark:hover:bg-opacity-10 hover:bg-opacity-5 transition-all mx-2">
		{children}
	</button>
);

export default Chip;
