"use client";
import { useToggleStates } from "@/contexts/ToggleStatesProvider";
import { Search } from "@mui/icons-material";
import { IconButton, useMediaQuery, useTheme } from "@mui/material";
import { ReactNode } from "react";

interface SearchFieldMobileProps {
	children: ReactNode;
}
const SearchFieldMobile = ({ children }: SearchFieldMobileProps) => {
	const { setOpenMenu } = useToggleStates();
	const theme = useTheme();
	const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	return !smallScreen ? (
		<>{children}</>
	) : (
		<IconButton onClick={() => setOpenMenu(true)} sx={{ padding: "4px" }}>
			<Search
				sx={{
					color: "primary.contrastText",
					fontSize: "20px",
				}}
			/>
		</IconButton>
	);
};

export default SearchFieldMobile;
