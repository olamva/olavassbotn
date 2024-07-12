import { ReactNode } from "react";

interface ChipProps {
	children: ReactNode;
	onClick?: () => void;
}
const Chip = ({ children, onClick }: ChipProps) => (
	<div
		className="py-1 px-2 border border-zinc-300 dark:border-zinc-500 rounded-full text-sm text-center cursor-pointer select-none hover:bg-black dark:hover:bg-white dark:hover:bg-opacity-5 hover:bg-opacity-5 transition-all mx-2"
		onClick={onClick}
	>
		{children}
	</div>
);

export default Chip;
