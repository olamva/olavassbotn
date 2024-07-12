import { ReactNode } from "react";

export const TitleDivider = () => (
	<hr className="w-[80%] m-auto border-black dark:border-white" />
);

const TitleText = ({ t }: { t: (text: string) => ReactNode }) => (
	<h1 className="text-center mb-4 text-[2.5rem] sm:text-5xl md:text-[4rem] lg:text-[5rem] font-light">
		{t("title")}
	</h1>
);
export default TitleText;