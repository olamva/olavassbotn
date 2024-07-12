import DevGate from "@/components/default/DevGate";
import TitleText from "@/components/default/TitleText";
import ThemesGrid from "@/components/themes/ThemesGrid";
import { useTranslations } from "next-intl";

export default function Themes() {
	const t = useTranslations("Themes");

	return (
		<DevGate>
			<div className="p-4 max-w-[65%] m-auto">
				<TitleText t={t} />
				<hr className="w-[80%] mx-auto border-black dark:border-white" />
				<div className="grid gap-4 my-4">
					<ThemesGrid />
				</div>
			</div>
		</DevGate>
	);
}
