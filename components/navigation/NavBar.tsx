import DrawerToggleButton from "@/components/navigation/DrawerToggleButton";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import SearchField from "@/components/navigation/SearchField";
import LangToggle from "@/components/toggles/LangToggle";
import ThemeToggle from "@/components/toggles/ThemeToggle";
export default function NavBar() {
	return (
		<>
			<div className="flex px-2 pt-2">
				<div className="flex items-center">
					<DrawerToggleButton />
					<div className="mx-1" />
					<Breadcrumbs />
				</div>
				<div className="flex-grow"></div>
				<div className="flex items-center gap-1">
					<SearchField />
					<ThemeToggle />
					<LangToggle />
				</div>
			</div>
		</>
	);
}
