"use client";
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
		<div
			onClick={toggleDarkMode}
			className="p-1 text-black dark:text-white rounded-full cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors h-fit"
		>
			<div className="hidden dark:block">
				<DarkMode size="20px" />
			</div>
			<div className="block dark:hidden">
				<LightMode size="20px" />
			</div>
		</div>
	);
}
export default ThemeToggle;
