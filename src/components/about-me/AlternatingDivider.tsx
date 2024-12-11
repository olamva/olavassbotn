import { ReactNode } from "react";

interface AlternatingDividerProps {
	children: ReactNode;
	index: number;
}
const AlternatingDivider = ({ children, index }: AlternatingDividerProps) => (
	<div className="my-2 flex items-center">
		<hr
			className={`${
				index & 1 ? "flex-grow" : "min-w-4"
			} border-black dark:border-white sm:min-w-4 sm:flex-grow-0`}
		/>
		<div className="mx-2 w-fit">{children}</div>
		<hr
			className={`${
				index & 1 ? "min-w-4" : "flex-grow"
			} border-black dark:border-white sm:flex-grow`}
		/>
	</div>
);

export default AlternatingDivider;
