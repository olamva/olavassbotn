"use client";
import { useDevMode } from "@/contexts/DevModeProvider";
import { Typography } from "@mui/material";
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
		<Typography
			variant="h3"
			align="center"
			mt={30}
			width={"80%"}
			mx={"auto"}
		>
			{t("accessDenied")}
		</Typography>
	);
};

export default DevGate;
