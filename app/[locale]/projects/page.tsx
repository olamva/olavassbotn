import {
	Box,
	Container,
	Divider,
	Grid,
	Paper,
	Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";

export default function Home() {
	const t = useTranslations("Projects");
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
				<Divider
					sx={{
						width: "80%",
						margin: "auto",
						backgroundColor: "primary.contrastText",
					}}
				/>
				<Grid container spacing={3} my={2}>
					{t
						.raw("projects")
						.map(
							(
								section: { title: string; description: string },
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
											backgroundColor: "primary.main",
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
											{section.description}
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
