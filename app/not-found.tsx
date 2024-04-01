import { Home } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

export default function NotFound() {
	return (
		<html lang="en">
			<body>
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
					<Button href="/" size="large" startIcon={<Home />}>
						Return Home
					</Button>
				</Box>
			</body>
		</html>
	);
}
