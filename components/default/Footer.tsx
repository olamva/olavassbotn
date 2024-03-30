import { contactLinks, socialLinks } from "@/app/data/StaticData";
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
								index == contactLinks.length - 1 && matches
									? 0
									: 2,
						}}
					>
						<social.icon
							sx={{
								color: theme.palette.primary.contrastText,
							}}
							fontSize="large"
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
								index == contactLinks.length - 1 && matches
									? 0
									: 2,
						}}
					>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<contact.icon
								sx={{
									color: theme.palette.primary.contrastText,
									mr: 1,
								}}
								fontSize="large"
							/>
							{contact.label && (
								<Typography
									sx={{
										color: theme.palette.primary
											.contrastText,
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
