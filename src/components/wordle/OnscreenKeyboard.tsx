import OnscreenLetter from "@/components/wordle/OnscreenLetter";
import { keys } from "@/data/wordle/WordleConstants";

const OnscreenKeyboard = () => (
	<div className="mb-6 flex justify-center">
		<div className="flex flex-col items-center">
			{keys.map((row, i) => (
				<div key={i} className="mt-1 flex gap-1">
					{row.map((letter) => (
						<OnscreenLetter key={letter} letter={letter} />
					))}
				</div>
			))}
		</div>
	</div>
);

export default OnscreenKeyboard;
