export const locales = ["no", "en"] as const;
export type Locale = (typeof locales)[number];

type LandingContent = {
	meta: {
		title: string;
		description: string;
	};
	subtitle: string[];
	nav: {
		work: string;
		background: string;
		projects: string;
	};
	hero: {
		summary: string;
		downloadCv: string;
	};
	work: {
		title: string;
		items: {
			role: string;
			company: string;
			period: string;
			highlights: string[];
		}[];
	};
	background: {
		title: string;
		sections: {
			title: string;
			items: {
				title: string;
				subtitle: string;
				period: string;
			}[];
		}[];
	};
	projects: {
		title: string;
		linkLabel: string;
		items: {
			title: string;
			description: string;
			stack: string;
			link: string;
		}[];
	};
	contact: {
		title: string;
	};
};

const BIRTHDAY = new Date(2003, 6, 10);

const getAge = (): number => {
	const now = new Date();
	let age = now.getFullYear() - BIRTHDAY.getFullYear();
	const hasHadBirthdayThisYear =
		now.getMonth() > BIRTHDAY.getMonth() ||
		(now.getMonth() === BIRTHDAY.getMonth() &&
			now.getDate() >= BIRTHDAY.getDate());
	if (!hasHadBirthdayThisYear) {
		age--;
	}
	return age;
};

export const landingContentByLocale: Record<Locale, LandingContent> = {
	en: {
		meta: {
			title: "Ola Munthe Vassbotn - Portfolio",
			description:
				"A website to show off Ola Munthe Vassbotn's skills and projects.",
		},
		subtitle: [
			"Full-stack Developer",
			getAge() + " years old",
			"Powered by white monster",
			"Informatics Student",
			"Probably debugging something right now",
			"It works on my machine...",
		],
		nav: {
			work: "Work",
			background: "Background",
			projects: "Projects",
		},
		hero: {
			summary:
				"Currently studying a Master's in Informatics - Databases and Search @ NTNU Trondheim",
			downloadCv: "Download CV",
		},
		work: {
			title: "Work history",
			items: [
				{
					role: "Full-stack Developer",
					company: "Bekk, Oslo",
					period: "Summer 2026",
					highlights: [
						"Worked as a full-stack (mostly backend) developer at the Norwegian Directorate for Education and Training.",
					],
				},
				{
					role: "Full-stack Developer",
					company: "Bekk, Oslo",
					period: "Summer 2025",
					highlights: [
						"Worked as a full-stack (mostly backend) developer at Møller Digital.",
						"Helped streamline sales workflows and reduce manual effort.",
					],
				},
				{
					role: "Full-stack Developer",
					company: "Vitalthings, Trondheim",
					period: "Aug 2024 - Dec 2024 (part-time)",
					highlights: [
						"Continued developing the Somnofy web application part-time alongside my studies.",
					],
				},
				{
					role: "Full-stack Developer",
					company: "Vitalthings, Trondheim",
					period: "Summer 2024",
					highlights: [
						"Worked across frontend and backend for the Somnofy web application.",
					],
				},
			],
		},
		background: {
			title: "Education & Volunteering",
			sections: [
				{
					title: "Education",
					items: [
						{
							title: "NTNU, Trondheim",
							subtitle:
								"Master in Informatics - Databases and Search",
							period: "Aug 2025 - Present",
						},
						{
							title: "NTNU, Trondheim",
							subtitle: "Bachelor in Informatics",
							period: "Aug 2022 - Jun 2025",
						},
					],
				},
				{
					title: "Volunteering",
					items: [
						{
							title: "Online Student Association",
							subtitle: "Deputy Leader of the Association",
							period: "Mar 2025 - Mar 2026",
						},
						{
							title: "Online Student Association",
							subtitle:
								"Deputy Leader & Booking Manager, Academic & Course Committee",
							period: "Feb 2024 - Feb 2025",
						},
					],
				},
			],
		},
		projects: {
			title: "Projects",
			linkLabel: "View on GitHub",
			items: [
				{
					title: "Y - Twitter clone",
					description:
						"A social feed application with fully fledged functionality built as a team project for the course IT2810.",
					stack: "React · TypeScript · Vite · MongoDB · GraphQL",
					link: "https://github.com/olamva/Y",
				},
				{
					title: "Diaper Dash - Android game",
					description:
						"A multiplayer Android game with lobbies, power-ups and leaderboards, built on an entity-component-system architecture as a team project for the course TDT4240.",
					stack: "Java · LibGDX · Android · Firebase",
					link: "https://github.com/madsab/diaper-dash-domination-derby",
				},
			],
		},
		contact: {
			title: "Get in touch",
		},
	},
	no: {
		meta: {
			title: "Ola Munthe Vassbotn - Portefølje",
			description:
				"En nettside som viser frem Ola Munthe Vassbotns ferdigheter og prosjekter.",
		},
		subtitle: [
			"Fullstack-utvikler",
			getAge() + " år gammel",
			"Drevet av hvit monster",
			"Informatikkstudent",
			"Debugger sannsynligvis noe akkurat nå",
			"Det funker på min maskin...",
		],
		nav: {
			work: "Erfaring",
			background: "Bakgrunn",
			projects: "Prosjekter",
		},
		hero: {
			summary:
				"Studerer Master i Informatikk - Databaser og Søk @ NTNU Trondheim",
			downloadCv: "Last ned CV",
		},
		work: {
			title: "Arbeidserfaring",
			items: [
				{
					role: "Fullstack-utvikler",
					company: "Bekk, Oslo",
					period: "Sommer 2026",
					highlights: [
						"Jobbet som fullstack-utvikler (hovedsakelig backend) hos Utdanningsdirektoratet.",
					],
				},
				{
					role: "Fullstack-utvikler",
					company: "Bekk, Oslo",
					period: "Sommer 2025",
					highlights: [
						"Jobbet som fullstack-utvikler (hovedsakelig backend) hos Møller Digital.",
						"Hjalp salgsmiljøet med en mer effektiv arbeidsflyt og mindre manuelt arbeid.",
					],
				},
				{
					role: "Fullstack-utvikler",
					company: "Vitalthings, Trondheim",
					period: "Aug 2024 - Des 2024 (deltid)",
					highlights: [
						"Fortsatte utviklingen av Somnofy-webappen på deltid ved siden av studiene.",
					],
				},
				{
					role: "Fullstack-utvikler",
					company: "Vitalthings, Trondheim",
					period: "Sommer 2024",
					highlights: [
						"Jobbet både frontend og backend i Somnofy-webappen.",
					],
				},
			],
		},
		background: {
			title: "Utdanning og verv",
			sections: [
				{
					title: "Utdanning",
					items: [
						{
							title: "NTNU, Trondheim",
							subtitle: "Master i Informatikk - Databaser og Søk",
							period: "Aug 2025 - Nå",
						},
						{
							title: "NTNU, Trondheim",
							subtitle: "Bachelor i Informatikk",
							period: "Aug 2022 - Jun 2025",
						},
					],
				},
				{
					title: "Verv",
					items: [
						{
							title: "Linjeforeningen Online",
							subtitle: "Nestleder i foreningen",
							period: "Mar 2025 - Mar 2026",
						},
						{
							title: "Linjeforeningen Online",
							subtitle:
								"Nestleder og bookingansvarlig, Fag- og kurskomitéen",
							period: "Feb 2024 - Feb 2025",
						},
					],
				},
			],
		},
		projects: {
			title: "Prosjekter",
			linkLabel: "Se på GitHub",
			items: [
				{
					title: "Y - Twitter-klone",
					description:
						"En sosial feed-applikasjon med all funksjonalitet laget i team for faget IT2810.",
					stack: "React · TypeScript · Vite · MongoDB · GraphQL",
					link: "https://github.com/olamva/Y",
				},
				{
					title: "Diaper Dash - Android-spill",
					description:
						"Et flerspiller Android-spill med lobbyer, power-ups og ledertavler, bygget på en entity-component-system-arkitektur i team for faget TDT4240.",
					stack: "Java · LibGDX · Android · Firebase",
					link: "https://github.com/madsab/diaper-dash-domination-derby",
				},
			],
		},
		contact: {
			title: "Kontakt",
		},
	},
};
