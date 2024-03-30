import SnakeGame from "@/components/home/SnakeGame";
import { FC, useEffect, useState } from "react";

interface InputDetectorProps {
	sequenceToCheck: string;
}
const InputDetector: FC<InputDetectorProps> = ({ sequenceToCheck }) => {
	const [keySequence, setKeySequence] = useState<string[]>([]);
	const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
	useEffect(() => {
		const keyDownHandler = (event: KeyboardEvent) => {
			setKeySequence((prevSequence) => [
				...prevSequence.slice(-(sequenceToCheck.length - 1)),
				event.key,
			]);
		};
		window.addEventListener("keydown", keyDownHandler);
		return () => {
			window.removeEventListener("keydown", keyDownHandler);
		};
	}, [sequenceToCheck.length]);
	useEffect(() => {
		if (keySequence.join("") === sequenceToCheck && !isDialogOpen) {
			setIsDialogOpen(true);
		}
	}, [keySequence, sequenceToCheck, isDialogOpen]);
	return (
		<>
			{isDialogOpen && (
				<SnakeGame
					open={isDialogOpen}
					onClose={() => {
						setIsDialogOpen(false);
						setKeySequence([]);
					}}
				/>
			)}
		</>
	);
};
export default InputDetector;
