"use client";
import onlineLogo from "@/public/Online_bla_o.svg";
import fagkomLogoDark from "@/public/fagkomDark.png";
import fagkomLogoLight from "@/public/fagkomLight.png";
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
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

const listItems = {
	0: [
		{
			src: fagkomLogoLight,
			darkSrc: fagkomLogoDark,
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
			src: pythonLogo,
			alt: "Python logo",
			href: "https://www.python.org/",
		},
	],
	3: [
		{
			src: reactLogo,
			alt: "React logo",
			href: "https://reactjs.org/",
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
	darkSrc?: StaticImageData | string;
	alt: string;
	href?: string;
}

const ExperienceGrid = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("sm"));
	const t = useTranslations("experience");
	let experienceList: Experience[] = [];
	Object.keys(listItems).forEach((key) => {
		const numericKey = parseInt(key) as keyof typeof listItems;
		const item = listItems[numericKey];
		const experience: Experience = {
			title: t(`${key}.title`),
			imgs: item.map((img: ImportedImage) => ({
				src: img.src,
				darkSrc: img.darkSrc,
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
		<Box p={2} maxWidth={matches ? "80%" : "65%"} m={"auto"}>
			<Masonry
				columns={matches ? 1 : 2}
				sx={{ m: 0, width: "100%" }}
				spacing={2}
			>
				{experienceList.map((item, index) => (
					<Card
						key={index}
						sx={{
							backgroundColor: theme.palette.primary.main,
						}}
					>
						<CardContent
							sx={{
								padding: "24px",
								"&:last-child": {
									paddingBottom: "24px",
								},
								display: "flex",
								lineHeight: "1.5",
							}}
						>
							{item.imgs.length > 0 ? (
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										justifyContent: "center",
										marginRight: "24px",
									}}
								>
									{item.imgs.map((img, imgIndex) => (
										<Box
											key={imgIndex}
											sx={{
												width: 30,
												height: 30,
												paddingTop: "100%",
												position: "relative",
											}}
										>
											<Image
												src={
													theme.palette.mode == "dark"
														? img.src
														: img.darkSrc ?? img.src
												}
												alt={img.alt}
												onClick={() => {
													img.href &&
														(window.location.href =
															img.href);
												}}
												style={{
													position: "absolute",
													top: 0,
													left: 0,
													width: "100%",
													height: "100%",
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
										</Box>
									))}
								</Box>
							) : null}
							{/* Box aligns text */}
							<Box
								sx={{
									my: "auto",
									// textAlign: "center",
								}}
							>
								<Typography
									fontWeight={"bold"}
									variant="body1"
									color={theme.palette.primary.contrastText}
									sx={{
										fontSize: {
											xs: "0.75rem",
											sm: "0.875rem",
											md: "1rem",
										},
									}}
								>
									{item.title}
								</Typography>
								{item.description && (
									<>
										<Divider
											sx={{
												my: 1,
												mx: "auto",
												width: "100%",
											}}
										/>
										<Typography
											sx={{
												fontSize: {
													xs: "0.75rem",
													sm: "0.875rem",
													md: "1rem",
												},
											}}
										>
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
