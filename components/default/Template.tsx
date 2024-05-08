import Footer from "@/components/default/Footer";
import NavBar from "@/components/navigation/NavBar";
import NavDrawer from "@/components/navigation/NavDrawer";
import NavMenu from "@/components/navigation/NavMenu";
import { Box } from "@mui/material";

export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<>
			<NavMenu />
			<NavDrawer />
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					minHeight: "100svh",
				}}
			>
				<Box
					component="main"
					sx={{
						flexGrow: 1,
					}}
				>
					<NavBar />
					{children}
				</Box>
				<Footer />
			</Box>
		</>
	);
}
