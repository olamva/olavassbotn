"use client";
import { Home } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLocale } from "next-intl";

export default function NotFound() {
	const locale = useLocale();
	const theme = useTheme();
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "2rem",
				marginTop: "5rem",
			}}
		>
			<Typography variant="h2">404: Page Not Found</Typography>
			<Typography variant="body1">
				Could not find requested resource
			</Typography>
			<Button
				href={"/" + locale}
				size="large"
				startIcon={
					<Home sx={{ color: theme.palette.secondary.main }} />
				}
				sx={{
					backgroundColor: theme.palette.primary.main,
					color: theme.palette.primary.contrastText,
				}}
			>
				Return Home
			</Button>
		</Box>
	);
}
