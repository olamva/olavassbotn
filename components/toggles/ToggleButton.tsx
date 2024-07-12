import { ReactNode } from "react";

interface ToggleButtonProps {
	onClick: () => void;
	children: ReactNode;
}
const ToggleButton = ({ onClick, children }: ToggleButtonProps) => (
	<div
		onClick={onClick}
		className="p-1  rounded-full cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors h-fit select-none"
	>
		{children}
	</div>
);

export default ToggleButton;
