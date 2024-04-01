"use client";
import {
	Box,
	Container,
	Divider,
	Grid,
	Paper,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslations } from "next-intl";
export default function AboutMe() {
	const theme = useTheme();
	const t = useTranslations("About Me");
	const matches = useMediaQuery(theme.breakpoints.up("md"));
	return (
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
				<Grid container spacing={3} mb={7}>
					{t
						.raw("sections")
						.map(
							(
								section: { title: string; content: string },
								index: number
							) => (
								<Grid item xs={12} md={6} key={index} mb={4}>
									<Divider
										textAlign={
											matches
												? "left"
												: index % 2
												? "right"
												: "left"
										}
										sx={{
											"&::before, &::after": {
												borderColor:
													"primary.contrastText",
											},
										}}
									>
										<Typography
											color="primary.contrastText"
											sx={{
												fontSize: {
													xs: "1rem",
													sm: "1.5rem",
													md: "2rem",
												},
											}}
										>
											{section.title}
										</Typography>
									</Divider>
									<Paper
										elevation={3}
										sx={{
											display: "flex",
											flexDirection: "column",
											height: "100%",
											p: 3,
											backgroundColor: "primary.main",
										}}
									>
										<Typography
											variant="body1"
											color="primary.contrastText"
											sx={{
												flexGrow: 1,
												fontSize: {
													xs: "0.75rem",
													sm: "0.875rem",
													md: "1rem",
												},
											}}
										>
											{section.content}
										</Typography>
									</Paper>
								</Grid>
							)
						)}
				</Grid>
			</Box>
		</Container>
	);
}
