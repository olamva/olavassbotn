import Refresh from "@/assets/Refresh";
import Button from "@/components/default/Button";

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
	<div className="bg-primary flex animate-slideVertical flex-col items-center rounded-lg p-8">
		{dialogText}
		{displayWord && (
			<span className="bg-default rounded px-1 font-mono">{word}</span>
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
