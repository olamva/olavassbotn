"use client";
import {
	Box,
	Container,
	Divider,
	Grid,
	Paper,
	Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslations } from "next-intl";
export default function AboutMePage() {
	const theme = useTheme();
	const t = useTranslations("About Me");
	return (
		<Container maxWidth="lg">
			<Box sx={{ my: 4 }}>
				<Typography
					variant="h1"
					align="center"
					sx={{
						color: theme.palette.primary.contrastText,
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
						backgroundColor: theme.palette.primary.contrastText,
					}}
				/>
				<Grid container spacing={3} my={2}>
					{t
						.raw("sections")
						.map(
							(
								section: { title: string; content: string },
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
											backgroundColor:
												theme.palette.secondary.main,
										}}
									>
										<Typography
											variant="h5"
											gutterBottom
											color={
												theme.palette.secondary
													.contrastText
											}
											sx={{
												fontSize: {
													xs: "1rem",
													sm: "1.5rem",
													md: "2rem",
												},
											}}
											fontWeight={700}
										>
											{section.title}
										</Typography>
										<Typography
											variant="body1"
											color={
												theme.palette.secondary
													.contrastText
											}
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
