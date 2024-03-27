import theme from "@/public/theme";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import fagkomLogo from "@/public/fagkom.png";
import onlineLogo from "@/public/Online_bla_o.svg";
import Image from "next/image";

const AchievementsGrid = () => {
	return (
		<Box sx={{ flexGrow: 1 }} padding={2} maxWidth={500} mx={"auto"}>
			<Grid container spacing={2}>
				<Grid item xs={5}>
					<Card
						sx={{
							backgroundColor: theme.palette.secondary.main,
						}}
					>
						<CardContent>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
								}}
							>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										marginRight: 1,
									}}
								>
									<Image
										src={fagkomLogo}
										alt="Fagkom Online sin logo."
										height={30}
										width={30}
										style={{ marginBottom: "5px" }}
									/>
									<Image
										src={onlineLogo}
										alt="Linjeforeningen Online sin logo"
										height={30}
										width={30}
										style={{ marginTop: "5px" }}
									/>
								</Box>
								<Typography variant="body1">
									Nestleder av Fagkom Online
								</Typography>
							</Box>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={7}>
					<Card
						sx={{
							backgroundColor: theme.palette.secondary.main,
						}}
					>
						<CardContent>
							<Typography variant="body1">thingo</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={4}>
					<Card
						sx={{
							backgroundColor: theme.palette.secondary.main,
						}}
					>
						<CardContent>
							<Typography variant="body1">thingo</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={8}>
					<Card
						sx={{
							backgroundColor: theme.palette.secondary.main,
						}}
					>
						<CardContent>
							<Typography variant="body1">thingo</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
};

export default AchievementsGrid;
