import SearchFieldButton from "@/components/navigation/SearchFieldAssets/SearchFieldButton";
import SearchFieldMobile from "@/components/navigation/SearchFieldAssets/SearchFieldMobile";
import SearchShortcut from "@/components/navigation/SearchFieldAssets/SearchShortcut";
import { Search } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const SearchField = () => {
	const t = useTranslations("NavItems");

	const OUTER_BORDER_RADIUS = 3;
	const INNER_BORDER_RADIUS = 1;
	const FONT_SIZE = 12;
	return (
		<SearchFieldMobile>
			<SearchFieldButton outerBorderRadius={OUTER_BORDER_RADIUS}>
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
					<SearchShortcut
						INNER_BORDER_RADIUS={INNER_BORDER_RADIUS}
						FONT_SIZE={FONT_SIZE}
					/>
				</Box>
			</SearchFieldButton>
		</SearchFieldMobile>
	);
};
export default SearchField;
