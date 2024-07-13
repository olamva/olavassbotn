"use client";
import SnakeGame from "@/components/snakeGame/SnakeGame";
import { useToggleStates } from "@/contexts/ToggleStatesProvider";
import { FC, useEffect, useState } from "react";

interface InputDetectorProps {
	sequenceToCheck: string;
}
const InputDetector: FC<InputDetectorProps> = ({ sequenceToCheck }) => {
	const [keySequence, setKeySequence] = useState<string[]>([]);
	const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
	const { override, setOverride } = useToggleStates();
	useEffect(() => {
		const keyDownHandler = (event: KeyboardEvent) => {
			setKeySequence((prevSequence) =>
				[...prevSequence, event.key].slice(-10)
			);
		};
		window.addEventListener("keydown", keyDownHandler);
		return () => {
			window.removeEventListener("keydown", keyDownHandler);
		};
	}, [sequenceToCheck.length]);
	useEffect(() => {
		if (isDialogOpen) return;
		if (keySequence.join("") === sequenceToCheck) {
			setIsDialogOpen(true);
		}
	}, [keySequence, sequenceToCheck, isDialogOpen]);
	useEffect(() => {
		if (override) {
			setIsDialogOpen(true);
		}
	}, [override]);
	return (
		isDialogOpen && (
			<SnakeGame
				open={isDialogOpen}
				onClose={() => {
					setIsDialogOpen(false);
					setOverride(false);
					setKeySequence([]);
				}}
			/>
		)
	);
};
export default InputDetector;
