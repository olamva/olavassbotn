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
			} border-black sm:min-w-4 sm:flex-grow-0 dark:border-white`}
		/>
		<div className="mx-2 w-fit">{children}</div>
		<hr
			className={`${
				index & 1 ? "min-w-4" : "flex-grow"
			} border-black sm:flex-grow dark:border-white`}
		/>
	</div>
);

export default AlternatingDivider;
