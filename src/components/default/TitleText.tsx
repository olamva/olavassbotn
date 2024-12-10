import { ReactNode } from "react";

export const TitleDivider = () => (
	<hr className="m-auto w-[80%] border-black dark:border-white" />
);

const TitleText = ({ t }: { t: (text: string) => ReactNode }) => (
	<h1 className="mb-4 text-center text-[2.5rem] font-light sm:text-5xl md:text-[4rem] lg:text-[5rem]">
		{t("title")}
	</h1>
);
export default TitleText;
