"use client";

import { AMT_COLS, AMT_ROWS } from "@/app/data/WordleConstants";
import Dialog from "@/components/default/Dialog";
import WordleDialogContent from "@/components/wordle/WordleDialogContent";
import WordleGrid from "@/components/wordle/WordleGrid";
import WordleNotifications from "@/components/wordle/WordleNotifications";
import { ColorsContext } from "@/contexts/ColorsContext";
import { useToggleStates } from "@/contexts/ToggleStatesProvider";
import allowedGuesses from "@/public/wordle/wordle-allowed-guesses.json";
import answers from "@/public/wordle/wordle-answers-alphabetical.json";
import { useCallback, useContext, useEffect, useRef, useState } from "react";

const NOTIFICATION_LIFESPAN = 2000;
const ENDSCREEN_DELAY = 1000;
const WIGGLE_ANIMATION_DURATION = 200;

interface WordleProps {
	isHardMode: boolean;
}
const Wordle = ({ isHardMode }: WordleProps) => {
	const currentRow = useRef<number>(0);
	const currentCol = useRef<number>(0);
	const currentWord = useRef<string[]>([]);
	const [isDone, setIsDone] = useState<boolean>(false);
	const { openMenu } = useToggleStates();

	const {
		greenLetters,
		setGreenLetters,
		yellowLetters,
		setYellowLetters,
		grayLetters,
		setGrayLetters,
	} = useContext(ColorsContext);

	const greenLetterPositions = useRef<string[]>([]);
	const yellowLetterPositions = useRef<Set<string>>(new Set());

	const wordToCheck = useRef<string>(
		answers[Math.floor(Math.random() * answers.length)]
	);

	const divRef = useRef<HTMLDivElement>(null);

	const [displayEndScreen, setDisplayEndScreen] = useState<boolean>(false);
	const [endScreenText, setEndScreenText] = useState<string>("");
	const [displayWord, setDisplayWord] = useState<boolean>(false);
	const [notifications, setNotifications] = useState<string[]>([]);

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

	const addErrorNotification = useCallback((text: string) => {
		setNotifications((prev) => [...prev, text]);
		setTimeout(() => {
			setNotifications((prev) => prev.slice(1));
		}, NOTIFICATION_LIFESPAN);
	}, []);

	const errorAnimation = useCallback(() => {
		if (divRef.current === null) return;
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
		}, WIGGLE_ANIMATION_DURATION);
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

		const uniqueLetters = Array.from(new Set(unusedLetters));

		if (uniqueLetters.length === 0) {
			return true;
		}

		let errorMsg = "Your guess needs to use the hints given for ";

		uniqueLetters
			.sort((a, b) => a.localeCompare(b))
			.forEach((letter, i) => {
				errorMsg +=
					i === uniqueLetters.length - 1
						? letter.toUpperCase()
						: letter.toUpperCase() + ", ";
			});
		addErrorNotification(errorMsg);
		return false;
	}, [greenLetterPositions, yellowLetterPositions, addErrorNotification]);

	const handleCheck = useCallback(
		(divs: HTMLCollection) => {
			const validationCheck = validateGuess(currentWord.current);
			if (validationCheck === -1) {
				addErrorNotification("Not in word list");
				return errorAnimation();
			}
			if (isHardMode && !hardModeCheck()) return errorAnimation();

			wordToCheck.current.split("").forEach((letter, i) => {
				if (letter === currentWord.current[i]) {
					const box = divs[currentRow.current * AMT_COLS + i];
					box.classList.remove("wordle-yellow");
					box.classList.add("wordle-green");
					greenLetterPositions.current[i] = letter;
					if (!greenLetters.includes(letter.toUpperCase())) {
						setGreenLetters((prev) => [
							...prev,
							letter.toUpperCase(),
						]);
					}
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
						if (!yellowLetters.includes(letter.toUpperCase())) {
							setYellowLetters((prev) => [
								...prev,
								letter.toUpperCase(),
							]);
						}
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
				if (!grayLetters.includes(letter)) {
					setGrayLetters((prev) => [...prev, letter]);
				}
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
			errorAnimation,
			isHardMode,
			hardModeCheck,
			greenLetters,
			setGreenLetters,
			yellowLetters,
			setYellowLetters,
			grayLetters,
			setGrayLetters,
			addErrorNotification,
		]
	);

	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (openMenu) return;
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
			openMenu,
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
		}, ENDSCREEN_DELAY);
	};

	const reset = () => {
		currentRow.current = 0;
		currentCol.current = 0;
		currentWord.current = [];
		wordToCheck.current =
			answers[Math.floor(Math.random() * answers.length)];

		setIsDone(false);
		setDisplayEndScreen(false);
		setEndScreenText("");
		setDisplayWord(false);
		setNotifications([]);

		greenLetterPositions.current = [];
		yellowLetterPositions.current = new Set();

		setGreenLetters([]);
		setYellowLetters([]);
		setGrayLetters([]);

		if (divRef.current !== null) {
			const divs = divRef.current.children;
			for (let i = 0; i < divs.length; i++) {
				divs[i].classList.remove(
					"wordle-green",
					"wordle-yellow",
					"wordle-gray"
				);
				divs[i].innerHTML = "";
			}
		}
	};

	return (
		<>
			<WordleNotifications notifications={notifications} />
			<WordleGrid divRef={divRef} />
			<Dialog
				open={displayEndScreen}
				setOpen={setDisplayEndScreen}
				blurred
			>
				<WordleDialogContent
					dialogText={endScreenText}
					displayWord={displayWord}
					word={wordToCheck.current.toUpperCase()}
					reset={reset}
				/>
			</Dialog>
		</>
	);
};

export default Wordle;
