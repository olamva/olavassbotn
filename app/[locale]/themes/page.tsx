import DevGate from "@/components/default/DevGate";
import TitleText, { TitleDivider } from "@/components/default/TitleText";
import ThemesGrid from "@/components/themes/ThemesGrid";
import { useTranslations } from "next-intl";

export default function Themes() {
	const t = useTranslations("Themes");

	return (
		<DevGate>
			<div className="m-auto max-w-[65%] p-4">
				<TitleText t={t} />
				<TitleDivider />
				<div className="my-4 grid gap-4">
					<ThemesGrid />
				</div>
			</div>
		</DevGate>
	);
}
