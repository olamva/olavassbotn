"use client";

import Backspace from "@/assets/Backspace";
import { ColorsContext } from "@/contexts/ColorsContext";
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
				"wordle-gray",
			);
			div.classList.add("wordle-green");
		} else if (yellowLetters.includes(letter)) {
			div.classList.remove(
				"wordle-letter-blank",
				"wordle-green",
				"wordle-gray",
			);
			div.classList.add("wordle-yellow");
		} else if (grayLetters.includes(letter)) {
			div.classList.remove(
				"wordle-letter-blank",
				"wordle-green",
				"wordle-yellow",
			);
			div.classList.add("wordle-gray");
		} else {
			div.classList.remove(
				"wordle-green",
				"wordle-yellow",
				"wordle-gray",
			);
			div.classList.add("wordle-letter-blank");
		}
	}, [greenLetters, yellowLetters, grayLetters, letter]);

	return (
		<div
			className="wordle-letter-blank button-hover flex h-12 w-fit min-w-8 cursor-pointer select-none items-center justify-center rounded p-2 text-2xl font-extralight sm:h-12 sm:min-w-12 md:h-16 md:min-w-16"
			onClick={handleClick}
			ref={divRef}
		>
			{letter === "Backspace" ? <Backspace size="32px" /> : letter}
		</div>
	);
};

export default OnscreenLetter;
