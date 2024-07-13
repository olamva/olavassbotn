import Link from "next/link";
import { JSX, ReactNode } from "react";

interface LinkProps {
	href: string;
	textColor: string;
	darkTextColor: string;
	Icon?: (() => JSX.Element) | null;
	children: ReactNode;
}
const CustomLink = ({
	href,
	textColor,
	darkTextColor,
	Icon,
	children,
}: LinkProps) => {
	console.log("darkTextColor", darkTextColor);
	return (
		<Link
			className={`text-${textColor} dark:text-${darkTextColor}`}
			href={href}
		>
			<div className="flex items-center">
				{Icon && <Icon />}
				<div
					className={`from-${textColor} to-${textColor} dark:from-${darkTextColor} dark:to-${darkTextColor} bg-left-bottom bg-gradient-to-r bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-500 ease-out`}
				>
					{children}
				</div>
			</div>
		</Link>
	);
};

export default CustomLink;
