import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
export default function Home() {
	const t = useTranslations("HomePage");
	return (
		<Box mt={20}>
			<Typography
				variant="h1"
				align="center"
				sx={{
					color: "primary.contrastText",
					fontSize: {
						xs: "2rem",
						sm: "3rem",
						md: "5rem",
						lg: "6rem",
					},
				}}
				fontWeight={900}
			>
				{t("title")}
			</Typography>
			<Typography
				variant="h4"
				align="center"
				sx={{
					color: "primary.contrastText",
					fontSize: {
						xs: "0.75rem",
						sm: "1rem",
						md: "1.5rem",
						lg: "2rem",
					},
				}}
				fontWeight={50}
				gutterBottom
			>
				{t("subtitle")}
			</Typography>
		</Box>
	);
}
