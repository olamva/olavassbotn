"use client";
import { Email, GitHub, LinkedIn, Phone } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
	const theme = useTheme();
	const socialLinks: SocialLink[] = [
		{
			icon: GitHub,
			link: "https://github.com/olamva",
		},
		{
			icon: LinkedIn,
			link: "https://www.linkedin.com/olavassbotn/",
		},
	];
	const contactLinks: SocialLink[] = [
		{
			icon: Phone,
			link: "tel:+4790778680",
			label: "+47 90 77 86 80",
		},
		{
			icon: Email,
			link: "mailto:ola@vassbotn.com",
			label: "ola@vassbotn.com",
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
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "row",
				flexWrap: "wrap",
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					mr: 4,
				}}
			>
				{socialLinks.map((social, index) => (
					<Link
						key={index}
						href={social.link}
						sx={{
							color: "inherit",
							textDecoration: "none",
							display: "flex",
							alignItems: "center",
							mb: 2,
						}}
					>
						<social.icon sx={{ color: "white" }} fontSize="large" />
					</Link>
				))}
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
				}}
			>
				{contactLinks.map((contact, index) => (
					<Link
						key={index}
						href={contact.link}
						sx={{
							color: "inherit",
							textDecoration: "none",
							display: "flex",
							alignItems: "center",
							mb: 2,
						}}
					>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<contact.icon
								sx={{ color: "white", mr: 1 }}
								fontSize="large"
							/>
							{contact.label && (
								<Typography sx={{ color: "white" }}>
									{contact.label}
								</Typography>
							)}
						</Box>
					</Link>
				))}
			</Box>
		</Box>
	);
}
