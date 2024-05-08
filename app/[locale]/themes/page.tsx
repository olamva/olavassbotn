import DevGate from "@/components/default/DevGate";
import ThemesGrid from "@/components/themes/ThemesGrid";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function Themes() {
	const t = useTranslations("Themes");

	return (
		<DevGate>
			<Box p={2} maxWidth={"65%"} m={"auto"}>
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
					<ThemesGrid />
				</Grid>
			</Box>
		</DevGate>
	);
}
