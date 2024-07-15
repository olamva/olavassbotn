import { ReactNode } from "react";

interface ToggleButtonProps {
	onClick: () => void;
	children: ReactNode;
}
const ToggleButton = ({ onClick, children }: ToggleButtonProps) => (
	<button
		onClick={onClick}
		className="p-1 rounded-full sm:hover:bg-zinc-200 dark:sm:hover:bg-zinc-700 active:bg-zinc-200 dark:active:bg-zinc-700 transition-colors h-fit select-none"
	>
		{children}
	</button>
);

export default ToggleButton;
