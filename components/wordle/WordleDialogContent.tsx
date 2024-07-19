import Button from "@/components/default/Button";
import Refresh from "@/public/icons/Refresh";

interface WordleDialogContentProps {
	dialogText: string;
	displayWord: boolean;
	word: string;
	reset: () => void;
}
const WordleDialogContent = ({
	dialogText,
	displayWord,
	word,
	reset,
}: WordleDialogContentProps) => (
	<div className="bg-primary items-center flex rounded-lg p-8 flex-col animate-slideVertical">
		{dialogText}
		{displayWord && (
			<span className="font-mono bg-default rounded px-1">{word}</span>
		)}
		<div className="h-4" />
		<Button onClick={reset}>
			Reset?
			<div className="w-2" />
			<Refresh />
		</Button>
	</div>
);

export default WordleDialogContent;
