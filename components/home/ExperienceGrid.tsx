"use client";
import onlineLogo from "@/public/Online_bla_o.svg";
import fagkomLogo from "@/public/fagkom.png";
import javaLogo from "@/public/java.webp";
import nextjsLogo from "@/public/next-js.svg";
import pythonLogo from "@/public/python.webp";
import reactLogo from "@/public/react.png";
import Masonry from "@mui/lab/Masonry";
import {
	Box,
	Card,
	CardContent,
	Divider,
	Typography,
	useTheme,
} from "@mui/material";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

const listItems = {
	0: [
		{
			src: fagkomLogo,
			alt: "Fagkom Online sin logo",
			href: "https://old.online.ntnu.no/wiki/online/historie/fagkom/",
		},
		{
			src: onlineLogo,
			alt: "Online sin logo",
			href: "https://online.ntnu.no/",
		},
	],
	1: [
		{
			src: javaLogo,
			alt: "Java logo",
			href: "https://www.java.com/",
		},
	],
	2: [
		{
			src: reactLogo,
			alt: "React logo",
			href: "https://reactjs.org/",
		},
	],
	3: [
		{
			src: pythonLogo,
			alt: "Python logo",
			href: "https://www.python.org/",
		},
	],
	4: [
		{
			src: nextjsLogo,
			alt: "Next.JS logo",
			href: "https://nextjs.org/",
		},
	],
};

interface Experience {
	title: string;
	description?: string;
	imgs: ImportedImage[];
}

interface ImportedImage {
	src: StaticImageData | string;
	alt: string;
	href?: string;
}

const ExperienceGrid = () => {
	const theme = useTheme();
	const t = useTranslations("experience");
	let experienceList: Experience[] = [];
	Object.keys(listItems).forEach((key) => {
		const numericKey = parseInt(key) as keyof typeof listItems;
		const item = listItems[numericKey];
		const experience: Experience = {
			title: t(`${key}.title`),
			imgs: item.map((img: ImportedImage) => ({
				src: img.src,
				alt: img.alt,
				href: img.href,
			})),
		};
		const hasDescription = t(`${key}.hasDescription`);
		if (hasDescription == "true") {
			experience.description = t(`${key}.description`);
		}
		experienceList.push(experience);
	});

	return (
		<Box p={2} maxWidth="50%" m={"auto"}>
			<Masonry columns={2} spacing={2}>
				{experienceList.map((item, index) => (
					<Card
						key={index}
						sx={{
							backgroundColor: theme.palette.secondary.main,
						}}
					>
						<CardContent
							sx={{
								padding: "16px",
								"&:last-child": {
									paddingBottom: "16px",
								},
								display: "flex",
								alignItems: "center",
							}}
						>
							{item.imgs.length > 0 ? (
								// Box stacks images
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									{item.imgs.map((img, imgIndex) => (
										<Image
											key={imgIndex}
											src={img.src}
											alt={img.alt}
											onClick={() => {
												img.href &&
													(window.location.href =
														img.href);
											}}
											height={30}
											width={30}
											style={{
												cursor: img.href
													? "pointer"
													: "default",
												marginBottom:
													item.imgs.length > 1 &&
													imgIndex !==
														item.imgs.length - 1
														? "10px"
														: "0px",
												marginTop:
													item.imgs.length > 1 &&
													imgIndex !== 0
														? "10px"
														: "0px",
											}}
										/>
									))}
								</Box>
							) : null}
							{/* Box aligns text */}
							<Box sx={{ margin: "auto" }}>
								<Typography fontWeight={"bold"} variant="body1">
									{item.title}
								</Typography>

								{item.description && (
									<>
										<Divider
											sx={{
												my: 1,
												width: "100%",
											}}
										/>
										<Typography variant="body1">
											{item.description}
										</Typography>
									</>
								)}
							</Box>
						</CardContent>
					</Card>
				))}
			</Masonry>
		</Box>
	);
};

export default ExperienceGrid;
