import Link from "next/link";
import { ReactNode } from "react";

interface ChipProps {
	href: string;
	children: ReactNode;
}
const Chip = ({ href, children }: ChipProps) => (
	<Link
		href={href}
		className="button-hover mx-2 select-none rounded-full border border-zinc-300 px-2 py-1 text-center text-sm transition-all dark:border-zinc-500"
	>
		{children}
	</Link>
);

export default Chip;
