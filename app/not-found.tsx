import "@/public/globals.css";
import Home from "@/public/icons/Home";
import Link from "next/link";

export default function NotFound() {
	return (
		<html lang="en" className="dark">
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</head>
			<body className="bg-[rgb(240, 241, 231)] dark:bg-[rgb(15, 15, 15)]">
				<div className="mt-20 flex flex-col items-center gap-8">
					<p className="text-6xl">404: Page Not Found</p>
					<p>Could not find requested resource</p>

					<Link
						className="flex w-fit cursor-pointer select-none items-end hover:underline"
						href="/"
					>
						<Home />
						<div className="ml-1">Return Home</div>
					</Link>
				</div>
			</body>
		</html>
	);
}
