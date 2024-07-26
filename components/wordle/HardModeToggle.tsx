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

	const toggleClasses = isHardMode
		? "wordle-green"
		: "bg-zinc-500 dark:bg-zinc-600";
	const childClasses = isHardMode ? "ml-auto mr-[1px]" : "ml-[1px] mr-auto";

	return (
		<div
			className="m-1 ml-auto flex w-fit cursor-pointer select-none items-center justify-center font-extralight"
			onClick={toggleHardMode}
		>
			Hard mode?
			<div
				className={`h-5 w-9 rounded-full border border-zinc-200 dark:border-zinc-700 ${toggleClasses} mx-1 flex items-center transition-colors`}
				ref={toggleRef}
			>
				<div
					className={`m-0 size-4 rounded-full bg-zinc-100 transition-all dark:bg-zinc-800 ${childClasses}`}
				/>
			</div>
		</div>
	);
};

export default HardModeToggle;
