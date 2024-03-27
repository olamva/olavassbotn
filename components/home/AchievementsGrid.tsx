import onlineLogo from "@/public/Online_bla_o.svg";
import fagkomLogo from "@/public/fagkom.png";
import javaLogo from "@/public/java.webp";
import pythonLogo from "@/public/python.webp";
import reactLogo from "@/public/react.png";
import theme from "@/public/theme";
import Masonry from "@mui/lab/Masonry";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import Image from "next/image";

type Achievement = {
	title: string;
	description?: string;
	imgs: any[];
};

const listItems: Achievement[] = [
	{
		title: "Fagkom Online",
		description: "Nestleder 23/24",
		imgs: [fagkomLogo, onlineLogo],
	},
	{
		title: "Java skills",
		imgs: [javaLogo],
	},
	{
		title: "React skills",
		imgs: [reactLogo],
	},
	{
		title: "Python skills",
		imgs: [pythonLogo],
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
												src={img}
												alt={`${item.title} logo ${
													imgIndex + 1
												}`}
												height={30}
												width={30}
												style={{
													margin:
														imgIndex === 0
															? "0 0 5px 0"
															: "5px 0 0 0",
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
