import { ReactNode } from "react";

interface ButtonProps {
	onClick?: () => void;
	children: ReactNode;
	mobileOnly?: boolean;
}
const Button = ({ onClick, children, mobileOnly }: ButtonProps) => (
	<button
		className={`bg-default border-zinc-300 dark:border-zinc-800 rounded shadow mt-4 self-center py-2 px-3 select-none sm:hover:bg-black sm:dark:hover:bg-white sm:dark:hover:bg-opacity-5 sm:hover:bg-opacity-5 active:bg-black dark:active:bg-white dark:active:bg-opacity-5 active:bg-opacity-5 transition-all flex justify-center items-center ${
			mobileOnly ? "sm:hidden" : ""
		}`}
		onClick={onClick}
	>
		{children}
	</button>
);

export default Button;
