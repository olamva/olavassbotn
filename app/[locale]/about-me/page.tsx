"use client";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
export default function AboutMe() {
	const theme = useTheme();
	return (
		<Container maxWidth="lg">
			<Box sx={{ my: 4 }}>
				<Typography
					variant="h1"
					align="center"
					sx={{
						color: theme.palette.primary.contrastText,
						fontSize: {
							xs: "2.5rem", // smaller screens
							sm: "3rem", // small screens
							md: "4rem", // medium screens
							lg: "5rem", // large screens
						},
						mb: 4,
					}}
				>
					About Me
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<Paper
							elevation={3}
							sx={{
								p: 3,
								backgroundColor: theme.palette.primary.light,
							}}
						>
							<Typography variant="h5" gutterBottom>
								Who I Am
							</Typography>
							<Typography variant="body1">
								I&apos;m a passionate web developer with a focus
								on creating engaging and accessible user
								experiences. With a background in both design
								and development, I bring a unique perspective to
								my projects, ensuring they are both
								aesthetically pleasing and functionally robust.
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} md={6}>
						<Paper elevation={3} sx={{ p: 3 }}>
							<Typography variant="h5" gutterBottom>
								My Skills
							</Typography>
							<Typography variant="body1">
								I specialize in React with TypeScript,
								leveraging frameworks like Next.js for
								server-side rendering and SEO benefits. My
								toolset includes Material UI for designing
								responsive and theme-consistent UIs, along with
								a strong foundation in HTML, CSS, and
								JavaScript.
							</Typography>
						</Paper>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}
