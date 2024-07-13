"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../default/Button";

const PlayWordleButton = () => {
	const t = useTranslations("Projects");
	const pathname = usePathname();

	return (
		<Link href={`${pathname}/wordle`}>
			<Button>{t("playWordle")}</Button>
		</Link>
	);
};

export default PlayWordleButton;
