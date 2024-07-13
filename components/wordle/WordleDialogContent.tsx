import Button from "@/components/default/Button";
import Refresh from "@/public/icons/Refresh";

interface WordleDialogContentProps {
	dialogText: string;
	displayWord: boolean;
	word: string;
}
const WordleDialogContent = ({
	dialogText,
	displayWord,
	word,
}: WordleDialogContentProps) => (
	<div className="bg-primary-main items-center flex rounded-lg p-8 flex-col animate-slideVertical">
		{dialogText}
		{displayWord && (
			<span className="font-mono bg-zinc-800 rounded px-1">{word}</span>
		)}
		<div className="h-4" />
		<Button onClick={() => location.reload()}>
			Reset?
			<div className="w-2" />
			<Refresh />
		</Button>
	</div>
);

export default WordleDialogContent;
