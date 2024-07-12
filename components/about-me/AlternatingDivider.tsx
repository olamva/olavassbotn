import { ReactNode } from "react";

interface AlternatingDividerProps {
	children: ReactNode;
	index: number;
}
const AlternatingDivider = ({ children, index }: AlternatingDividerProps) => (
	<div className="flex items-center my-2">
		<hr
			className={`${
				index & 1 ? "flex-grow" : "min-w-4"
			} sm:min-w-4 sm:flex-grow-0 border-black dark:border-white`}
		/>
		<div className="w-fit mx-2">{children}</div>
		<hr
			className={`${
				index & 1 ? "min-w-4 " : "flex-grow"
			} sm:flex-grow border-black dark:border-white`}
		/>
	</div>
);

export default AlternatingDivider;
