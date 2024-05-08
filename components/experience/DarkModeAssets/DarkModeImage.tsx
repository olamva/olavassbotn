import { ImportedImage } from "@/app/types/default";
import { useColorMode } from "@/contexts/ThemeModeProvider";
import Image from "next/image";

interface DarkModeImageProps {
	img: ImportedImage;
}
const DarkModeImage = ({ img }: DarkModeImageProps) => {
	const { mode } = useColorMode();
	return (
		<Image
			src={mode == "dark" ? img.src : img.darkSrc ?? img.src}
			alt={img.alt}
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "auto",
			}}
		/>
	);
};

export default DarkModeImage;
