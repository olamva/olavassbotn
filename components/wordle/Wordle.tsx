"use client";

import { AMT_COLS, AMT_ROWS } from "@/app/data/WordleConstants";
import Button from "@/components/default/Button";
import Dialog from "@/components/default/Dialog";
import WordleGrid from "@/components/wordle/WordleGrid";
import { ColorsContext } from "@/contexts/ColorsContext";
import Refresh from "@/public/icons/Refresh";
import allowedGuesses from "@/public/wordle/wordle-allowed-guesses.json";
import answers from "@/public/wordle/wordle-answers-alphabetical.json";
import { useCallback, useContext, useEffect, useRef, useState } from "react";

interface WordleProps {
	isHardMode: boolean;
}
const Wordle = ({ isHardMode }: WordleProps) => {
	const currentRow = useRef<number>(0);
	const currentCol = useRef<number>(0);
	const currentWord = useRef<string[]>([]);
	const [isDone, setIsDone] = useState<boolean>(false);

	const { setGreenLetters, setYellowLetters, setGrayLetters } =
		useContext(ColorsContext);

	const greenLetterPositions = useRef<string[]>([]);
	const yellowLetterPositions = useRef<Set<string>>(new Set());

	const wordToCheck = useRef<string>(
		answers[Math.floor(Math.random() * answers.length)]
	);

	const divRef = useRef<HTMLDivElement>(null);

	const [displayEndScreen, setDisplayEndScreen] = useState<boolean>(false);
	const [endScreenText, setEndScreenText] = useState<string>("");
	const [displayErrorMsg, setDisplayErrorMsg] = useState<boolean>(false);
	const [displayWord, setDisplayWord] = useState<boolean>(false);
	const [errorMsgText, setErrorMsgText] = useState<string>("");

	/**
	 * @returns `-1` if guess is invalid, `0` if guess is incorrect, or `1` if guess is correct
	 */
	const validateGuess = useCallback(
		(guess: string[]) => {
			const guessToCheck = guess.join("");
			if (wordToCheck.current === guessToCheck) return 1;
			if (
				allowedGuesses.includes(guessToCheck) ||
				answers.includes(guessToCheck)
			)
				return 0;
			return -1;
		},
		[wordToCheck]
	);

	const handleErrorMsg = useCallback(() => {
		if (divRef.current === null) return;
		setDisplayErrorMsg(true);
		for (let i = 0; i < AMT_COLS; i++) {
			divRef.current.children[
				currentRow.current * AMT_COLS + i
			].classList.add("animate-wiggle");
		}
		setTimeout(() => {
			if (divRef.current === null) return;
			for (let i = 0; i < AMT_COLS; i++) {
				divRef.current.children[
					currentRow.current * AMT_COLS + i
				].classList.remove("animate-wiggle");
			}
		}, 500);
		setTimeout(() => {
			setDisplayErrorMsg(false);
		}, 1500);
	}, [currentRow]);

	const hardModeCheck = useCallback(() => {
		const unusedLetters = greenLetterPositions.current
			.filter(
				(letter, i) =>
					letter !== undefined && letter !== currentWord.current[i]
			)
			.concat(
				Array.from(yellowLetterPositions.current).filter(
					(letter) => !currentWord.current.includes(letter)
				)
			);
		// remove duplicates
		const uniqueLetters = Array.from(new Set(unusedLetters));

		if (uniqueLetters.length === 0) {
			return true;
		}

		let errorMsg = "YOUR GUESS NEEDS TO USE THE HINTS FOR ";
		uniqueLetters.forEach((letter, i) => {
			errorMsg += i === uniqueLetters.length - 1 ? letter : letter + ", ";
		});
		setErrorMsgText(errorMsg.toUpperCase());
		return false;
	}, [greenLetterPositions, yellowLetterPositions]);

	const handleCheck = useCallback(
		(divs: HTMLCollection) => {
			const validationCheck = validateGuess(currentWord.current);
			if (validationCheck === -1) {
				setErrorMsgText("NOT IN WORD LIST");
				return handleErrorMsg();
			}
			if (isHardMode && !hardModeCheck()) return handleErrorMsg();

			wordToCheck.current.split("").forEach((letter, i) => {
				if (letter === currentWord.current[i]) {
					const box = divs[currentRow.current * AMT_COLS + i];
					box.classList.remove("wordle-yellow");
					box.classList.add("wordle-green");
					greenLetterPositions.current[i] = letter;
					setGreenLetters((prev) => [...prev, letter.toUpperCase()]);
				} else if (currentWord.current.includes(letter)) {
					const indexes = findAllMatchingLetterIndexes(
						currentWord.current,
						letter
					);
					for (const index of indexes) {
						const box = divs[currentRow.current * AMT_COLS + index];
						if (
							box.classList.contains("wordle-yellow") ||
							box.classList.contains("wordle-green")
						) {
							continue;
						}
						box.classList.add("wordle-yellow");
						yellowLetterPositions.current.add(letter);
						setYellowLetters((prev) => [
							...prev,
							letter.toUpperCase(),
						]);
						break;
					}
				}
			});
			for (let i = 0; i < AMT_COLS; i++) {
				const box = divs[currentRow.current * AMT_COLS + i];
				if (
					box.classList.contains("wordle-green") ||
					box.classList.contains("wordle-yellow")
				) {
					continue;
				}
				box.classList.add("wordle-gray");
				const letter = currentWord.current[i].toUpperCase();
				setGrayLetters((prev) => [...prev, letter]);
			}

			if (validationCheck === 1) {
				setEndScreenText("You win!");
				setIsDone(true);
				showEndScreen();
				return;
			}
			if (currentRow.current === AMT_ROWS - 1) {
				setEndScreenText("You lost... The word was ");
				setDisplayWord(true);
				setIsDone(true);
				showEndScreen();
				return;
			}
			currentRow.current++;
			currentCol.current = 0;
			currentWord.current = [];
		},
		[
			currentRow,
			validateGuess,
			wordToCheck,
			handleErrorMsg,
			isHardMode,
			hardModeCheck,
			setGreenLetters,
			setYellowLetters,
			setGrayLetters,
		]
	);

	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (isDone) {
				if (e.key === "Escape") setDisplayEndScreen(false);
				return;
			}
			if (divRef.current === null) return;
			if (e.metaKey || e.shiftKey || e.altKey || e.ctrlKey) return;
			if (displayEndScreen) return;

			const divs = divRef.current.children;
			if (e.key === "Enter") {
				e.preventDefault();
				if (
					currentRow.current < AMT_ROWS &&
					currentWord.current.length === AMT_COLS
				) {
					handleCheck(divs);
				}
				return;
			}

			if (e.key === "Backspace" && currentCol.current > 0) {
				divs[
					currentRow.current * AMT_COLS + currentCol.current - 1
				].innerHTML = "";
				currentWord.current.pop();
				if (currentCol.current > 0) currentCol.current--;
				return;
			}

			if (currentCol.current === AMT_COLS) return;
			const nextDiv =
				divs[currentRow.current * AMT_COLS + currentCol.current];
			if (e.key.length !== 1 || !/[a-zA-Z]/.test(e.key)) return;
			if (currentCol.current === AMT_COLS - 1 && nextDiv.innerHTML !== "")
				return;
			nextDiv.innerHTML = e.key.toUpperCase();
			currentWord.current.push(e.key.toLowerCase());
			if (currentCol.current !== AMT_COLS) currentCol.current++;
		},
		[
			currentCol,
			currentRow,
			currentWord,
			displayEndScreen,
			handleCheck,
			isDone,
		]
	);

	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown]);

	const findAllMatchingLetterIndexes = (
		word: string[],
		letter: string
	): number[] => {
		const indexes: number[] = [];
		word.forEach((char, i) => {
			if (char === letter) {
				indexes.push(i);
			}
		});
		return indexes;
	};

	const showEndScreen = () => {
		setTimeout(() => {
			setDisplayEndScreen(true);
		}, 500);
	};

	return (
		<div className="relative">
			{displayErrorMsg && (
				<div className=" text-center absolute top-[-56px] inset-x-0 wordle-gray w-fit justify-self-center px-2 rounded-md">
					{errorMsgText}
				</div>
			)}
			<WordleGrid divRef={divRef} />
			<Dialog
				open={displayEndScreen}
				setOpen={setDisplayEndScreen}
				blurred
			>
				<div className="bg-primary-main items-center flex rounded-lg p-8 flex-col animate-slideVertical">
					{endScreenText}
					{displayWord && (
						<span className="font-mono bg-zinc-800 rounded px-1">
							{wordToCheck.current.toUpperCase()}
						</span>
					)}
					<div className="h-4" />
					<Button onClick={() => location.reload()}>
						Reset?
						<div className="w-2" />
						<Refresh />
					</Button>
				</div>
			</Dialog>
		</div>
	);
};

export default Wordle;
