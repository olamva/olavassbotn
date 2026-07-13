export const locales = ["no", "en"] as const;
export type Locale = (typeof locales)[number];

export type WorkItem = {
	role: string;
	company: string;
	period: string;
	highlights: string[];
};

export type ProjectItem = {
	title: string;
	description: string;
	stack: string;
	link: string;
	linkLabel: string;
};

export type BackgroundItem = {
	title: string;
	subtitle: string;
	period: string;
};

type LandingContent = {
	name: string;
	occupation: string;
	nav: {
		work: string;
		background: string;
		projects: string;
		languageSwitch: string;
	};
	hero: {
		summary: string;
		downloadCv: string;
	};
	work: {
		title: string;
		items: WorkItem[];
	};
	background: {
		title: string;
		educationTitle: string;
		leadershipTitle: string;
		education: BackgroundItem[];
		leadership: BackgroundItem[];
	};
	projects: {
		title: string;
		items: ProjectItem[];
	};
	contact: {
		title: string;
		email: string;
		linkedin: string;
		github: string;
	};
};

export const landingContentByLocale: Record<Locale, LandingContent> = {
	en: {
		name: "Ola Munthe Vassbotn",
		occupation: "Full-stack Developer · Informatics Student",
		nav: {
			work: "Work",
			background: "Background",
			projects: "Projects",
			languageSwitch: "NO",
		},
		hero: {
			summary:
				"I build thoughtful full-stack products with React and TypeScript, and I am currently pursuing an MSc in Informatics focused on databases and search at NTNU.",
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
						"Worked as a full-stack developer in a consulting environment.",
						"Contributed to production-oriented solutions with modern web tooling.",
					],
				},
				{
					role: "Full-stack Developer",
					company: "Bekk, Oslo",
					period: "Summer 2025",
					highlights: [
						"Improved customer experience at Møller Digital with a new React frontend and C# backend integration.",
						"Helped streamline sales workflows and reduce manual effort.",
					],
				},
				{
					role: "Full-stack Developer",
					company: "Vitalthings, Trondheim",
					period: "Aug 2024 – Dec 2024 (part-time) · Summer 2024",
					highlights: [
						"Worked across frontend and backend for the Somnofy web application.",
						"Shipped features in collaboration with product and engineering teams.",
					],
				},
			],
		},
		background: {
			title: "Education & Leadership",
			educationTitle: "Education",
			leadershipTitle: "Leadership",
			education: [
				{
					title: "NTNU, Trondheim",
					subtitle: "MSc in Informatics – Databases and Search",
					period: "Aug 2025 – Present",
				},
				{
					title: "NTNU, Trondheim",
					subtitle: "BSc in Informatics",
					period: "Aug 2022 – Jun 2025",
				},
			],
			leadership: [
				{
					title: "Online Student Association",
					subtitle: "Deputy Leader of the Association",
					period: "Mar 2025 – Present",
				},
				{
					title: "Online Student Association",
					subtitle:
						"Deputy Leader & Booking Manager, Academic & Course Committee",
					period: "Feb 2024 – Feb 2025",
				},
			],
		},
		projects: {
			title: "Selected projects",
			items: [
				{
					title: "Y – Twitter clone",
					description:
						"A social feed application built as a team project with core feed and interaction functionality.",
					stack: "React · TypeScript · Vite · MongoDB · GraphQL",
					link: "https://github.com/olamva/Y",
					linkLabel: "View on GitHub",
				},
				{
					title: "Flashy – Quizlet clone",
					description:
						"A collaborative learning app where users create and practice flashcards with quiz flows.",
					stack: "React · TypeScript · Next.js · Mantine · Firebase",
					link: "https://github.com/olamva/flashy",
					linkLabel: "View on GitHub",
				},
			],
		},
		contact: {
			title: "Get in touch",
			email: "ola@vassbotn.com",
			linkedin: "LinkedIn",
			github: "GitHub",
		},
	},
	no: {
		name: "Ola Munthe Vassbotn",
		occupation: "Fullstack-utvikler · Informatikkstudent",
		nav: {
			work: "Erfaring",
			background: "Bakgrunn",
			projects: "Prosjekter",
			languageSwitch: "EN",
		},
		hero: {
			summary:
				"Jeg bygger gode fullstack-løsninger med React og TypeScript, og tar nå en master i informatikk med fokus på databaser og søk ved NTNU.",
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
						"Jobbet som fullstack-utvikler i et konsulentmiljø.",
						"Bidro i leveranser av produksjonsnære løsninger med moderne webteknologi.",
					],
				},
				{
					role: "Fullstack-utvikler",
					company: "Bekk, Oslo",
					period: "Sommer 2025",
					highlights: [
						"Forbedret kundeopplevelsen hos Møller Digital med nytt React-frontend koblet til C#-backend.",
						"Hjalp salgsmiljøet med en mer effektiv arbeidsflyt.",
					],
				},
				{
					role: "Fullstack-utvikler",
					company: "Vitalthings, Trondheim",
					period: "Aug 2024 – Des 2024 (deltid) · Sommer 2024",
					highlights: [
						"Jobbet både frontend og backend i Somnofy-webappen.",
						"Leverte funksjonalitet i tett samarbeid med produkt og utvikling.",
					],
				},
			],
		},
		background: {
			title: "Utdanning og verv",
			educationTitle: "Utdanning",
			leadershipTitle: "Verv",
			education: [
				{
					title: "NTNU, Trondheim",
					subtitle: "Master i informatikk – databaser og søk",
					period: "Aug 2025 – Nå",
				},
				{
					title: "NTNU, Trondheim",
					subtitle: "Bachelor i informatikk",
					period: "Aug 2022 – Jun 2025",
				},
			],
			leadership: [
				{
					title: "Linjeforeningen Online",
					subtitle: "Nestleder i foreningen",
					period: "Mar 2025 – Nå",
				},
				{
					title: "Linjeforeningen Online",
					subtitle: "Nestleder og bookingansvarlig, Fag- og kurskomitéen",
					period: "Feb 2024 – Feb 2025",
				},
			],
		},
		projects: {
			title: "Utvalgte prosjekter",
			items: [
				{
					title: "Y – Twitter-klone",
					description:
						"En sosial feed-applikasjon laget i team med kjernestøtte for feed og interaksjoner.",
					stack: "React · TypeScript · Vite · MongoDB · GraphQL",
					link: "https://github.com/olamva/Y",
					linkLabel: "Se på GitHub",
				},
				{
					title: "Flashy – Quizlet-klone",
					description:
						"En læringsapp der brukere lager og øver på flashcards med quiz-flyt.",
					stack: "React · TypeScript · Next.js · Mantine · Firebase",
					link: "https://github.com/olamva/flashy",
					linkLabel: "Se på GitHub",
				},
			],
		},
		contact: {
			title: "Kontakt",
			email: "ola@vassbotn.com",
			linkedin: "LinkedIn",
			github: "GitHub",
		},
	},
};
