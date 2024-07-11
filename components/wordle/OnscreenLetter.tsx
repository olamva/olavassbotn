"use client";

import { ColorsContext } from "@/contexts/ColorsContext";
import Backspace from "@/public/icons/backspace";
import { MouseEvent, useContext, useEffect, useRef } from "react";

const OnscreenLetter = ({ letter }: { letter: string }) => {
	const divRef = useRef<HTMLDivElement>(null);

	const handleClick = (e: MouseEvent) => {
		e.preventDefault();
		const event = new KeyboardEvent("keydown", { key: letter });
		document.dispatchEvent(event);
	};

	const { greenLetters, yellowLetters, grayLetters } =
		useContext(ColorsContext);

	useEffect(() => {
		const div = divRef.current;
		if (letter === "Backspace" || letter === "Enter" || div === null) {
			return;
		}
		if (greenLetters.includes(letter)) {
			div.classList.remove("bg-zinc-700", "bg-yellow-500", "bg-zinc-800");
			div.classList.add("bg-green-500");
		} else if (yellowLetters.includes(letter)) {
			div.classList.remove("bg-zinc-700", "bg-green-500", "bg-zinc-800");
			div.classList.add("bg-yellow-500");
		} else if (grayLetters.includes(letter)) {
			div.classList.remove(
				"bg-zinc-700",
				"bg-green-500",
				"bg-yellow-500"
			);
			div.classList.add("bg-zinc-800");
		}
	}, [greenLetters, yellowLetters, grayLetters, letter]);

	return (
		<div
			className="bg-zinc-700 rounded h-12 md:h-16 min-w-8 md:min-w-16 w-fit text-white items-center justify-center flex text-2xl p-2 cursor-pointer select-none"
			onClick={handleClick}
			ref={divRef}
		>
			{letter === "Backspace" ? <Backspace /> : letter}
		</div>
	);
};

export default OnscreenLetter;
