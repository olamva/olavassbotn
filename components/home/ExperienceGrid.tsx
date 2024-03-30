"use client";
import onlineLogo from "@/public/Online_bla_o.svg";
import fagkomLogoDark from "@/public/fagkomDark.png";
import fagkomLogoLight from "@/public/fagkomLight.png";
import javaLogo from "@/public/java.webp";
import nextLogo from "@/public/next-js.svg";
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
import Link from "next/link";

const listItems = [
	{
		href: "https://online.ntnu.no/",
		imgs: [
			{
				src: fagkomLogoLight,
				darkSrc: fagkomLogoDark,
				alt: "Fagkom Online sin logo",
			},
			{
				src: onlineLogo,
				alt: "Online sin logo",
			},
		],
	},
	{
		href: "https://www.java.com/",
		imgs: [
			{
				src: javaLogo,
				alt: "Java logo",
			},
		],
	},
	{
		href: "https://www.python.org/",
		imgs: [
			{
				src: pythonLogo,
				alt: "Python logo",
			},
		],
	},
	{
		href: "https://reactjs.org/",
		imgs: [
			{
				src: reactLogo,
				alt: "React logo",
			},
		],
	},
	{
		href: "https://nextjs.org/",
		imgs: [
			{
				src: nextLogo,
				alt: "Next.JS logo",
			},
		],
	},
];

interface Experience {
	title: string;
	description?: string;
	imgs: ImportedImage[];
	href?: string;
}

interface ImportedImage {
	src: StaticImageData | string;
	darkSrc?: StaticImageData | string;
	alt: string;
}

const ExperienceGrid = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("sm"));
	const t = useTranslations("experience");
	let experienceList: Experience[] = [];
	listItems.forEach((item, index) => {
		const imgs = item.imgs;
		const experience: Experience = {
			title: t(`${index}.title`),
			imgs: imgs.map((img: ImportedImage) => ({
				src: img.src,
				darkSrc: img.darkSrc,
				alt: img.alt,
			})),
		};
		const hasDescription = t(`${index}.hasDescription`);
		if (hasDescription == "true") {
			experience.description = t(`${index}.description`);
		}
		const href = item.href;
		if (href) {
			experience.href = href;
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
						elevation={3}
					>
						<Link style={{ width: "100%" }} href={item.href || ""}>
							<CardContent
								sx={{
									padding: "24px",
									"&:last-child": {
										paddingBottom: "24px",
									},
									display: "flex",
									lineHeight: "1.5",
									cursor: item.href ? "pointer" : "default",
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
														theme.palette.mode ==
														"dark"
															? img.src
															: img.darkSrc ??
															  img.src
													}
													alt={img.alt}
													style={{
														position: "absolute",
														top: 0,
														left: 0,
														width: "100%",
														height: "100%",
														marginBottom:
															item.imgs.length >
																1 &&
															imgIndex !==
																item.imgs
																	.length -
																	1
																? "10px"
																: "0px",
														marginTop:
															item.imgs.length >
																1 &&
															imgIndex !== 0
																? "10px"
																: "0px",
													}}
												/>
											</Box>
										))}
									</Box>
								) : null}
								<Box
									sx={{
										my: "auto",
									}}
								>
									<Typography
										fontWeight="bold"
										variant="body1"
										color={
											theme.palette.primary.contrastText
										}
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
												color={
													theme.palette.primary
														.contrastText
												}
											>
												{item.description}
											</Typography>
										</>
									)}
								</Box>
							</CardContent>
						</Link>
					</Card>
				))}
			</Masonry>
		</Box>
	);
};

export default ExperienceGrid;
