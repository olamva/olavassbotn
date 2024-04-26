import { Search } from "@mui/icons-material";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import { Box, Button, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

interface SearchFieldProps {
	setOpen: (open: boolean) => void;
}
const SearchField = ({ setOpen }: SearchFieldProps) => {
	const t = useTranslations("NavItems");
	const OUTER_BORDER_RADIUS = 3;
	const INNER_BORDER_RADIUS = 1;
	const FONT_SIZE = 12;
	return (
		<Button
			sx={{
				textTransform: "none",
				borderRadius: OUTER_BORDER_RADIUS,
				padding: 0.5,
			}}
			onClick={() => setOpen(true)}
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
					bgcolor={"primary.dark"}
					display="flex"
					flexDirection="row"
					px={1}
					py={0.3}
					borderRadius={INNER_BORDER_RADIUS}
					sx={{
						border: "1px solid",
						borderColor: "primary.contrastText",
					}}
					mx={0.3}
					alignItems={"center"}
				>
					<KeyboardCommandKeyIcon
						sx={{
							color: "primary.contrastText",
							fontSize: FONT_SIZE,
						}}
					/>
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