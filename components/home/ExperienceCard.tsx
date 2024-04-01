import { Experience } from "@/app/types/default";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";

interface ExperienceCardProps {
	experience: Experience;
}
const ExperienceCard = ({ experience }: ExperienceCardProps) => {
	const theme = useTheme();
	return (
		<Card
			sx={{
				backgroundColor: "primary.main",
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
					{experience.imgs.length > 0 ? (
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
										paddingTop: "100%",
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
											theme.palette.mode == "dark"
												? img.src
												: img.darkSrc ?? img.src
										}
										alt={img.alt}
										style={{
											position: "absolute",
											top: 0,
											left: 0,
											width: "100%",
											height: "100%",
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
