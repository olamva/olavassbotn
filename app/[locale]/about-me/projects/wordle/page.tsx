"use client";

import HardModeToggle from "@/components/wordle/HardModeToggle";
import OnscreenKeyboard from "@/components/wordle/OnscreenKeyboard";
import Wordle from "@/components/wordle/Wordle";
import { ColorsProvider } from "@/contexts/ColorsContext";
import { useEffect, useState } from "react";

const WordlePage = () => {
	const [isHardMode, setIsHardMode] = useState<boolean>(false);

	useEffect(() => {
		const savedHardMode = localStorage.getItem("isHardMode");
		if (savedHardMode !== null) setIsHardMode(JSON.parse(savedHardMode));
	}, []);

	return (
		<ColorsProvider>
			<HardModeToggle
				isHardMode={isHardMode}
				setIsHardMode={setIsHardMode}
			/>
			<div className="flex justify-center text-5xl font-[50]">Wordle</div>
			<div className="my-2 flex items-center justify-center">
				<Wordle isHardMode={isHardMode} />
			</div>
			<OnscreenKeyboard />
		</ColorsProvider>
	);
};

export default WordlePage;
