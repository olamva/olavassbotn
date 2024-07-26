import { ReactNode } from "react";

interface ButtonProps {
	onClick?: () => void;
	children: ReactNode;
	mobileOnly?: boolean;
}
const Button = ({ onClick, children, mobileOnly }: ButtonProps) => (
	<button
		className={`bg-default sm:button-hover button-hover-mobile mt-4 flex select-none items-center justify-center self-center rounded border-zinc-300 px-3 py-2 shadow transition-all dark:border-zinc-800 ${
			mobileOnly ? "sm:hidden" : ""
		}`}
		onClick={onClick}
	>
		{children}
	</button>
);

export default Button;
