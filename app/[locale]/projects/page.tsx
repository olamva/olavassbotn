"use client";
import { konamiCode } from "@/app/data/ProjectsData";
import InputDetector from "@/components/game/InputDetector";
import {
	Box,
	Button,
	Container,
	Divider,
	Grid,
	Paper,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";
export default function Projects() {
	const t = useTranslations("Projects");
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const [override, setOverride] = useState<boolean>(false);
	return (
		<>
			<InputDetector
				sequenceToCheck={konamiCode}
				override={override}
				setOverride={setOverride}
			/>
			<Container maxWidth="lg">
				<Box sx={{ my: 4 }}>
					<Typography
						variant="h1"
						align="center"
						sx={{
							color: "primary.contrastText",
							fontSize: {
								xs: "2.5rem",
								sm: "3rem",
								md: "4rem",
								lg: "5rem",
							},
						}}
						gutterBottom
					>
						{t("title")}
					</Typography>
					<Divider
						sx={{
							width: "80%",
							margin: "auto",
							backgroundColor: "primary.contrastText",
						}}
					/>
					<Grid container spacing={3} my={2}>
						{t.raw("projects").map(
							(
								section: {
									title: string;
									description: string;
									mobileDescription?: string;
								},
								index: number
							) => (
								<Grid item xs={12} md={6} key={index}>
									<Paper
										elevation={3}
										sx={{
											display: "flex",
											flexDirection: "column",
											height: "100%",
											p: 3,
											backgroundColor: "primary.dark",
										}}
									>
										<Typography
											variant="h5"
											color={"primary.contrastText"}
											sx={{
												fontSize: {
													xs: "1rem",
													sm: "1.5rem",
													md: "2rem",
												},
											}}
											gutterBottom
										>
											{section.title}
										</Typography>
										<Typography
											sx={{
												fontSize: {
													xs: "0.75rem",
													sm: "0.875rem",
													md: "1rem",
												},
												color: "primary.contrastText",
											}}
										>
											{isMobile
												? section.mobileDescription ??
												  section.description
												: section.description}
										</Typography>
										{isMobile && index === 1 && (
											<Button
												variant="contained"
												color="primary"
												sx={{
													mt: 2,
													alignSelf: "center",
												}}
												onClick={() => {
													setOverride(true);
												}}
											>
												Play Snake Game
											</Button>
										)}
									</Paper>
								</Grid>
							)
						)}
					</Grid>
				</Box>
			</Container>
		</>
	);
}
