"use client";
import Button from "@/components/default/Button";
import { useToggleStates } from "@/contexts/ToggleStatesProvider";
import { useTranslations } from "next-intl";

const GameButton = () => {
	const { setOverride } = useToggleStates();
	const t = useTranslations("Projects");
	return (
		<Button
			mobileOnly
			onClick={() => {
				setOverride(true);
			}}
		>
			{t("playSnake")}
		</Button>
	);
};

export default GameButton;
