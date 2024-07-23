import { ReactNode } from "react";

const Paper = ({ children }: { children: ReactNode }) => (
	<div className="bg-primary flex h-full flex-col items-center rounded border border-zinc-300 p-6 dark:border-zinc-800">
		{children}
	</div>
);

export default Paper;
