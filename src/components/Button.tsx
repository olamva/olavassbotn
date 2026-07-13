import type { ReactNode } from "react";
import React from "react";

interface ButtonProps {
	onClick?: () => void;
	children: ReactNode;
	mobileOnly?: boolean;
}
const Button = ({ onClick, children, mobileOnly }: ButtonProps) => (
	<button
		className={`mt-4 flex select-none items-center justify-center self-center rounded border border-slate-300 bg-slate-50 px-3 py-2 shadow-sm transition hover:border-slate-400 hover:bg-white ${
			mobileOnly ? "sm:hidden" : ""
		}`}
		onClick={onClick}
	>
		{children}
	</button>
);

export default Button;
