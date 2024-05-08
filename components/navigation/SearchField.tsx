"use client";
import { useColorMode } from "@/contexts/ThemeModeProvider";
import { useToggleStates } from "@/contexts/ToggleStatesProvider";
import { KeyboardControlKey, Search } from "@mui/icons-material";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import {
	Box,
	Button,
	IconButton,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslations } from "next-intl";

const SearchField = () => {
	const { setOpenMenu, isMac } = useToggleStates();
	const t = useTranslations("NavItems");
	const theme = useTheme();
	const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const { mode } = useColorMode();

	const OUTER_BORDER_RADIUS = 3;
	const INNER_BORDER_RADIUS = 1;
	const FONT_SIZE = 12;
	return smallScreen ? (
		<IconButton onClick={() => setOpenMenu(true)} sx={{ padding: "4px" }}>
			<Search
				sx={{
					color: "primary.contrastText",
					fontSize: "15px",
				}}
			/>
		</IconButton>
	) : (
		<Button
			sx={{
				textTransform: "none",
				borderRadius: OUTER_BORDER_RADIUS,
				padding: 0.5,
			}}
			onClick={() => setOpenMenu(true)}
		>
			<Box
				bgcolor={"primary.main"}
				display="flex"
				flexDirection="row"
				padding={1}
				borderRadius={OUTER_BORDER_RADIUS}
				alignItems="center"
			>
				<Search
					sx={{
						color: "primary.contrastText",
						mx: 0.3,
						fontSize: FONT_SIZE * 1.5,
					}}
				/>
				<Typography
					color={"primary.contrastText"}
					mx={0.3}
					fontSize={FONT_SIZE}
				>
					{t("search-field")}
				</Typography>
				<Box
					bgcolor={mode == "dark" ? "primary.dark" : "primary.light"}
					display="flex"
					flexDirection="row"
					px={0.7}
					py={0.3}
					borderRadius={INNER_BORDER_RADIUS}
					sx={{
						border: "1px solid",
						borderColor: "primary.light",
					}}
					mx={0.3}
					alignItems={"center"}
				>
					{isMac ? (
						<KeyboardCommandKeyIcon
							sx={{
								color: "primary.contrastText",
								fontSize: FONT_SIZE,
							}}
						/>
					) : (
						<KeyboardControlKey
							sx={{
								color: "primary.contrastText",
								fontSize: FONT_SIZE,
							}}
						/>
					)}

					<Typography
						color="primary.contrastText"
						fontSize={FONT_SIZE}
					>
						K
					</Typography>
				</Box>
			</Box>
		</Button>
	);
};
export default SearchField;
