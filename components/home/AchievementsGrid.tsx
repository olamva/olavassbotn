import onlineLogo from "@/public/Online_bla_o.svg";
import fagkomLogo from "@/public/fagkom.png";
import javaLogo from "@/public/java.webp";
import pythonLogo from "@/public/python.webp";
import reactLogo from "@/public/react.png";
import theme from "@/public/theme";
import Masonry from "@mui/lab/Masonry";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import Image from "next/image";

const listItems: Achievement[] = [
	{
		title: "Fagkom Online",
		description: "Nestleder 23/24",
		imgs: [
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
	},
	{
		title: "Java skills",
		imgs: [
			{ src: javaLogo, alt: "Java logo", href: "https://www.java.com/" },
		],
	},
	{
		title: "React skills",
		imgs: [
			{ src: reactLogo, alt: "React logo", href: "https://reactjs.org/" },
		],
	},
	{
		title: "Python skills",
		imgs: [
			{
				src: pythonLogo,
				alt: "Python logo",
				href: "https://www.python.org/",
			},
		],
	},
];

const AchievementsGrid = () => {
	return (
		<Box sx={{ flexGrow: 1 }} padding={2} maxWidth={500} mx={"auto"}>
			<Masonry columns={2} spacing={2}>
				{listItems.map((item, index) => (
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
							}}
						>
							{item.imgs.length > 0 ? (
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
									}}
								>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											marginRight: 3,
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
													margin:
														imgIndex === 0
															? "0 0 5px 0"
															: "5px 0 0 0",
													cursor: img.href
														? "pointer"
														: "default",
												}}
											/>
										))}
									</Box>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
										}}
									>
										<Typography fontWeight={"bold"}>
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
												<Typography>
													{item.description}
												</Typography>
											</>
										)}
									</Box>
								</Box>
							) : (
								<>
									<Typography fontWeight={"bold"}>
										{item.title}
									</Typography>
									{item.description && (
										<>
											<Divider
												sx={{ my: 1, width: "100%" }}
											/>
											<Typography>
												{item.description}
											</Typography>
										</>
									)}
								</>
							)}
						</CardContent>
					</Card>
				))}
			</Masonry>
		</Box>
	);
};

export default AchievementsGrid;
