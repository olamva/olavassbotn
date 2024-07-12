"use client";
import ToggleButton from "@/components/toggles/ToggleButton";
import { useColorMode } from "@/contexts/ThemeModeProvider";
import DarkMode from "@/public/icons/DarkMode";
import LightMode from "@/public/icons/LightMode";
function ThemeToggle() {
	const { toggleColorMode } = useColorMode();

	const toggleDarkMode = () => {
		document.documentElement.classList.toggle("dark");
		toggleColorMode();
	};

	// TODO - Remove deprecated dark mode functionality

	return (
		<ToggleButton onClick={toggleDarkMode}>
			<div className="hidden dark:block">
				<DarkMode size="20px" />
			</div>
			<div className="block dark:hidden">
				<LightMode size="20px" />
			</div>
		</ToggleButton>
	);
}
export default ThemeToggle;
