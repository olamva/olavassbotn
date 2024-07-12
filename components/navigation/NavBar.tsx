import DrawerToggleButton from "@/components/navigation/DrawerToggleButton";
import NavBreadcrumbs from "@/components/navigation/NavBreadcrumbs";
import SearchField from "@/components/navigation/SearchField";
import LangToggle from "@/components/toggles/LangToggle";
import ThemeToggle from "@/components/toggles/ThemeToggle";
export default function NavBar() {
	return (
		<>
			<div className="flex px-6 pt-2">
				<div className="flex items-center">
					<DrawerToggleButton />
				</div>
				<div className="flex-grow"></div>
				<div className="flex items-center">
					<SearchField />
					<ThemeToggle />
					<LangToggle />
				</div>
			</div>
			<NavBreadcrumbs />
		</>
	);
}
