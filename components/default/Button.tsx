import { ReactNode } from "react";

interface ButtonProps {
	onClick?: () => void;
	children: ReactNode;
	mobileOnly?: boolean;
}
const Button = ({ onClick, children, mobileOnly }: ButtonProps) => (
	<button
		className={`bg-default border-zinc-300 dark:border-zinc-800 rounded shadow mt-4 self-center py-2 px-3 select-none hover:bg-black dark:hover:bg-white dark:hover:bg-opacity-5 hover:bg-opacity-5 transition-all flex justify-center ${
			mobileOnly && "sm:hidden"
		}`}
		onClick={onClick}
	>
		{children}
	</button>
);

export default Button;
