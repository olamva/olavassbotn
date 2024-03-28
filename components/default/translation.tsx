import { useTranslations } from "next-intl";
interface TranslationProps {
	page: string;
	translationKey: string;
}
export default function Translation({
	page,
	translationKey,
}: TranslationProps) {
	const t = useTranslations(page);
	return t(translationKey);
}
