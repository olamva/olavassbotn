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
						xs: "3rem",
						sm: "4rem",
						md: "6rem",
						lg: "8rem",
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
						xs: "1.25rem",
						sm: "1.5rem",
						md: "1.75rem",
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
