import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function Home() {
	const t = useTranslations("HomePage");
	return (
		<>
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
				fontWeight={400}
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
				fontWeight={100}
				gutterBottom
			>
				{t("subtitle")}
			</Typography>
		</>
	);
}
