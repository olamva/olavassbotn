"use client";

import { Dispatch, SetStateAction, useRef } from "react";

interface HardModeToggleProps {
	isHardMode: boolean;
	setIsHardMode: Dispatch<SetStateAction<boolean>>;
}

const HardModeToggle = ({ isHardMode, setIsHardMode }: HardModeToggleProps) => {
	const toggleRef = useRef<HTMLDivElement>(null);

	const toggleHardMode = () => {
		setIsHardMode((prev) => !prev);
		localStorage.setItem("isHardMode", JSON.stringify(!isHardMode));
	};

	const toggleClasses = isHardMode ? "dark:bg-green-500 bg-green-400" : "bg-zinc-500 dark:bg-zinc-600";
	const childClasses = isHardMode ? "translate-x-full" : "ml-[1px]";

	return (
		<div
			className="text-black dark:text-white font-extralight flex items-center cursor-pointer m-1 select-none w-fit ml-auto"
			onClick={toggleHardMode}
		>
			Hard mode?
			<div
				className={`rounded-lg w-7 h-4 border-zinc-200 dark:border-zinc-700 border ${toggleClasses} ml-2 mr-1 items-center flex transition-colors scale-110 origin-top-right`}
				ref={toggleRef}
			>
				<div
					className={`bg-zinc-100 dark:bg-zinc-800 size-3 rounded-full transition-all transform ${childClasses}`}
				/>
			</div>
		</div>
	);
};

export default HardModeToggle;
