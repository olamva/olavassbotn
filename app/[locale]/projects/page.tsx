"use client";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslations } from "next-intl";

export default function Home() {
	const theme = useTheme();
	const t = useTranslations("Projects");
	return (
		<>
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
			>
				{t("title")}
			</Typography>
			<>
				{t
					.raw("projects")
					.map(
						(
							section: { title: string; description: string },
							index: number
						) => (
							<>
								<Typography
									key={index}
									variant="h5"
									color={theme.palette.primary.contrastText}
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
								<Typography
									sx={{
										fontSize: {
											xs: "0.75rem",
											sm: "0.875rem",
											md: "1rem",
										},
										color: theme.palette.primary
											.contrastText,
									}}
								>
									{section.description}
								</Typography>
							</>
						)
					)}
			</>
		</>
	);
}
