import { contactLinks, socialLinks } from "@/app/data/FooterData";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-primary m-auto flex w-full flex-wrap justify-center py-4 sm:py-8">
			<div className="mr-4 flex flex-col sm:mr-0 sm:flex-row">
				{socialLinks.map((social, index) => (
					<Link
						key={index}
						href={social.link}
						className={`px-0 no-underline sm:px-2 ${index !== socialLinks.length - 1 ? "mb-4" : "mb-0"} sm:mb-0`}
					>
						<social.icon />
					</Link>
				))}
			</div>
			<div className="flex flex-col sm:flex-row">
				{contactLinks.map((contact, index) => (
					<Link
						key={index}
						href={contact.link}
						className={`px-0 no-underline sm:px-2 ${index !== contactLinks.length - 1 ? "mb-4" : "mb-0"} sm:mb-0`}
					>
						<div className="flex items-center">
							<contact.icon />
							{contact.label && (
								<p className="pl-1 text-[0.75rem] sm:text-[0.875rem] md:text-[1rem]">
									{contact.label}
								</p>
							)}
						</div>
					</Link>
				))}
			</div>
		</footer>
	);
}
