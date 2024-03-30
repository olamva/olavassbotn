import { konamiCode } from "@/app/data/SiteWideData";
import Footer from "@/components/default/Footer";
import InputDetector from "@/components/game/InputDetector";
import NavBar from "@/components/navigation/NavBar";
import { Box } from "@mui/material";

export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<>
			<InputDetector sequenceToCheck={konamiCode} />
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
