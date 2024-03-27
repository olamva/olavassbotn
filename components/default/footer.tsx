"use client";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
export default function Footer() {
	const theme = useTheme();
	const socials: SocialLink[] = [
		{
			icon: GitHub,
			link: "https://github.com/olamva",
		},
		{
			icon: LinkedIn,
			link: "https://www.linkedin.com/olavassbotn/",
		},
	];
	return (
		<Box
			component="footer"
			sx={{
				py: 5,
				m: "auto",
				width: "100%",
				backgroundColor: theme.palette.primary.main,
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "row",
				}}
			>
				{socials.map((social, index) => (
					<Link
						key={index}
						href={social.link}
						sx={{
							color: "inherit",
							textDecoration: "none",
							display: "flex",
							alignItems: "center",
							mr: 2,
						}}
					>
						<social.icon sx={{ color: "white" }} fontSize="large" />
					</Link>
				))}
			</Box>
		</Box>
	);
}
