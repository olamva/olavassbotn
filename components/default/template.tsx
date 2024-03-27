import Footer from "@/components/default/footer";
import NavBar from "@/components/navigation/NavBar";
import { Box } from "@mui/material";

export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					minHeight: "100vh",
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
