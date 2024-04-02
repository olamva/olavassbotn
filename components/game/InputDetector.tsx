import SnakeGame from "@/components/game/SnakeGame";
import { FC, useEffect, useState } from "react";

interface InputDetectorProps {
	sequenceToCheck: string;
	override?: boolean;
	setOverride?: (override: boolean) => void;
}
const InputDetector: FC<InputDetectorProps> = ({
	sequenceToCheck,
	override,
	setOverride,
}) => {
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
	useEffect(() => {
		if (override) {
			setIsDialogOpen(true);
		}
	}, [override]);
	return (
		<>
			{isDialogOpen && (
				<SnakeGame
					open={isDialogOpen}
					onClose={() => {
						setIsDialogOpen(false);
						setOverride && setOverride(false);
						setKeySequence([]);
					}}
				/>
			)}
		</>
	);
};
export default InputDetector;
