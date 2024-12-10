"use client";
import { useDevMode } from "@/contexts/DevModeProvider";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

interface DevGateProps {
	children: ReactNode;
}
const DevGate = ({ children }: DevGateProps) => {
	const { devMode } = useDevMode();
	const t = useTranslations("DevMode");
	return devMode ? (
		<>{children}</>
	) : (
		<h3 className="mx-auto mt-60 w-[80%] text-center text-5xl">
			{t("accessDenied")}
		</h3>
	);
};

export default DevGate;
