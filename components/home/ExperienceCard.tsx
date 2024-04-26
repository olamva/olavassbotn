import { Experience } from "@/app/types/default";
import { useColorMode } from "@/contexts/ThemeModeProvider";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface ExperienceCardProps {
	experience: Experience;
}
const ExperienceCard = ({ experience }: ExperienceCardProps) => {
	const { mode } = useColorMode();
	return (
		<Card
			sx={{
				backgroundColor:
					mode == "dark" ? "primary.dark" : "primary.light",
			}}
			elevation={3}
		>
			<Link style={{ width: "100%" }} href={experience.href || ""}>
				<CardContent
					sx={{
						padding: "24px",
						"&:last-child": {
							paddingBottom: "24px",
						},
						display: "flex",
						lineHeight: "1.5",
						cursor: experience.href ? "pointer" : "default",
					}}
				>
					{experience.imgs.length && (
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								marginRight: "24px",
							}}
						>
							{experience.imgs.map((img, imgIndex) => (
								<Box
									key={imgIndex}
									sx={{
										width: 30,
										height: 30,
										position: "relative",
										marginBottom:
											experience.imgs.length > 1 &&
											imgIndex !==
												experience.imgs.length - 1
												? "10px"
												: "0px",
										marginTop:
											experience.imgs.length > 1 &&
											imgIndex !== 0
												? "10px"
												: "0px",
									}}
								>
									<Image
										src={
											mode == "dark"
												? img.src
												: img.darkSrc ?? img.src
										}
										alt={img.alt}
										style={{
											position: "absolute",
											top: 0,
											left: 0,
											width: "100%",
											height: "auto",
										}}
									/>
								</Box>
							))}
						</Box>
					)}
					<Box
						sx={{
							my: "auto",
						}}
					>
						<Typography
							fontWeight={700}
							variant="body1"
							color="primary.contrastText"
							sx={{
								fontSize: {
									xs: "0.75rem",
									sm: "0.875rem",
									md: "1rem",
								},
							}}
						>
							{experience.title}
						</Typography>
						{experience.description && (
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
									color="primary.contrastText"
								>
									{experience.description}
								</Typography>
							</>
						)}
					</Box>
				</CardContent>
			</Link>
		</Card>
	);
};

export default ExperienceCard;
