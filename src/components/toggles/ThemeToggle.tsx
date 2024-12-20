"use client";
import DarkMode from "@/assets/DarkMode";
import LightMode from "@/assets/LightMode";
import ToggleButton from "@/components/toggles/ToggleButton";
import { useEffect } from "react";

export const setCookie = (name: string, value: string, days?: number) => {
	let expires = "";
	if (days) {
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

export const getCookie = (name: string) => {
	const nameEQ = name + "=";
	const ca = document.cookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === " ") c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) === 0)
			return c.substring(nameEQ.length, c.length);
	}
	return null;
};

const ThemeToggle = () => {
	useEffect(() => {
		const themeMode = getCookie("themeMode");
		if (themeMode) {
			document.documentElement.classList.toggle(
				"dark",
				themeMode === "dark",
			);
		}
	}, []);

	const toggleTheme = () => {
		const isDarkMode = document.documentElement.classList.toggle("dark");
		setCookie("themeMode", isDarkMode ? "dark" : "light", 7);
	};

	return (
		<ToggleButton onClick={toggleTheme}>
			<div className="hidden dark:block">
				<DarkMode size="20px" />
			</div>
			<div className="block dark:hidden">
				<LightMode size="20px" />
			</div>
		</ToggleButton>
	);
};

export default ThemeToggle;
