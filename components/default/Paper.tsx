import { ReactNode } from "react";

const Paper = ({ children }: { children: ReactNode }) => (
	<div className="flex items-center flex-col h-full p-6 bg-primary-main border border-zinc-300 dark:border-zinc-800 rounded">
		{children}
	</div>
);

export default Paper;
