import { contactLinks, socialLinks } from "@/app/data/FooterData";
import { Box, Link, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("sm"));
	return (
		<Box
			component="footer"
			sx={{
				py: matches ? 2 : 4,
				m: "auto",
				width: "100%",
				backgroundColor: "primary.main",
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
					flexDirection: matches ? "column" : "row",
					alignItems: "center",
					mr: matches ? 4 : 0,
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
							px: matches ? 0 : 2,
							mb:
								matches && index !== socialLinks.length - 1
									? 2
									: 0,
						}}
					>
						<social.icon
							sx={{
								color: "primary.contrastText",
								fontSize: {
									xs: "1.5rem",
									sm: "1.75rem",
									md: "2rem",
								},
							}}
						/>
					</Link>
				))}
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: matches ? "column" : "row",
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
							px: matches ? 0 : 2,
							mb:
								matches && index !== contactLinks.length - 1
									? 2
									: 0,
						}}
					>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<contact.icon
								sx={{
									color: "primary.contrastText",
									mr: 1,
									fontSize: {
										xs: "1.5rem",
										sm: "1.75rem",
										md: "2rem",
									},
								}}
							/>
							{contact.label && (
								<Typography
									sx={{
										color: "primary.contrastText",
										fontSize: {
											xs: "0.75rem",
											sm: "0.875rem",
											md: "1rem",
										},
									}}
								>
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
