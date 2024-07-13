"use client";

import { ColorsContext } from "@/contexts/ColorsContext";
import Backspace from "@/public/icons/Backspace";
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
			div.classList.remove(
				"wordle-letter-blank",
				"wordle-yellow",
				"wordle-gray"
			);
			div.classList.add("wordle-green");
		} else if (yellowLetters.includes(letter)) {
			div.classList.remove(
				"wordle-letter-blank",
				"wordle-green",
				"wordle-gray"
			);
			div.classList.add("wordle-yellow");
		} else if (grayLetters.includes(letter)) {
			div.classList.remove(
				"wordle-letter-blank",
				"wordle-green",
				"wordle-yellow"
			);
			div.classList.add("wordle-gray");
		}
	}, [greenLetters, yellowLetters, grayLetters, letter]);

	return (
		<div
			className="wordle-letter-blank rounded h-12 sm:h-12 md:h-16 min-w-8 sm:min-w-12 md:min-w-16 w-fit items-center justify-center flex text-2xl p-2 cursor-pointer select-none font-extralight"
			onClick={handleClick}
			ref={divRef}
		>
			{letter === "Backspace" ? <Backspace size="32px" /> : letter}
		</div>
	);
};

export default OnscreenLetter;
