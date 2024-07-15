import { ReactNode } from "react";

interface ToggleButtonProps {
	onClick: () => void;
	children: ReactNode;
}
const ToggleButton = ({ onClick, children }: ToggleButtonProps) => (
	<button
		onClick={onClick}
		className="p-1 rounded-full sm:button-hover button-hover-mobile transition-colors h-fit select-none"
	>
		{children}
	</button>
);

export default ToggleButton;
