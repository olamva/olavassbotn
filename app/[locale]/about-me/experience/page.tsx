import ExperienceGrid from "@/components/experience/ExperienceGrid";
import { Box, Container, Divider, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
export default function Projects() {
	const t = useTranslations("Experience");
	return (
		<>
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
					<Box
						p={2}
						sx={{
							maxWidth: {
								xs: "100%",
								sm: "100%",
								md: "80%",
							},
						}}
						m={"auto"}
					>
						<ExperienceGrid />
					</Box>
				</Box>
			</Container>
		</>
	);
}
