import { contactLinks, socialLinks } from "@/app/data/FooterData";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="py-4 sm:py-8 m-auto w-full bg-primary-main flex justify-center items-center flex-wrap">
			<div className="flex flex-col sm:flex-row items-center mr-4 sm:mr-0">
				{socialLinks.map((social, index) => (
					<Link
						key={index}
						href={social.link}
						className={`no-underline flex items-center px-0 sm:px-2
							${index !== socialLinks.length - 1 ? "mb-4" : "mb-0"}
						sm:mb-0`}
					>
						<social.icon />
					</Link>
				))}
			</div>
			<div className="flex flex-col sm:flex-row items-start">
				{contactLinks.map((contact, index) => (
					<Link
						key={index}
						href={contact.link}
						className={`no-underline flex items-center px-0 sm:px-2
							${index !== contactLinks.length - 1 ? "mb-4" : "mb-0"}
						sm:mb-0`}
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
