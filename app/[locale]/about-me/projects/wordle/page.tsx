"use client";

import HardModeToggle from "@/components/wordle/HardModeToggle";
import OnscreenKeyboard from "@/components/wordle/OnscreenKeyboard";
import Wordle from "@/components/wordle/Wordle";
import { ColorsProvider } from "@/contexts/ColorsContext";
import { useEffect, useState } from "react";

export default function WordlePage() {
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
			<div className=" text-5xl font-[50] flex justify-center">
				Wordle
			</div>
			<div className="mt-16 flex justify-center items-center">
				<Wordle isHardMode={isHardMode} />
			</div>
			<OnscreenKeyboard />
		</ColorsProvider>
	);
}
