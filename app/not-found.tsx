import "@/public/globals.css";
import Home from "@/public/icons/home";

export default function NotFound() {
	return (
		<html lang="en" className="dark">
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</head>
			<body className="bg-[rgb(240, 241, 231)] dark:bg-[rgb(15, 15, 15)] text-black dark:text-white">
				<div className="flex flex-col items-center gap-8 mt-20">
					<p className="text-6xl">404: Page Not Found</p>
					<p>Could not find requested resource</p>

					<a
						className="flex items-end hover:text-gray-400 dark:hover:text-gray-200 w-fit cursor-pointer select-none hover:underline"
						href="/"
					>
						<Home />
						<div className="ml-1">Return Home</div>
					</a>
				</div>
			</body>
		</html>
	);
}
