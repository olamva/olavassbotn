import { ReactNode } from "react";

interface ToggleButtonProps {
	onClick: () => void;
	children: ReactNode;
}
const ToggleButton = ({ onClick, children }: ToggleButtonProps) => (
	<button
		onClick={onClick}
		className="sm:button-hover button-hover-mobile h-fit select-none rounded-full p-1 transition-colors"
	>
		{children}
	</button>
);

export default ToggleButton;
