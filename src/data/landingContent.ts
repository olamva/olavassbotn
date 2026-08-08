export const locales = ["no", "en"] as const;
export type Locale = (typeof locales)[number];

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

const no = {
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
					"Bygget et dashboard for Utdanningsdirektoratet for å overvåke Nasjonale Prøver og Kartleggingsprøver, og samlet data som lå spredt på flere ulike kilder.",
					"Jobbet ende til ende i et team på fire: datamodellering og oppsett av database, nye endepunkter i interne API-er eid av andre team, og deploy via Terraform.",
				],
			},
			{
				role: "Fullstack-utvikler",
				company: "Bekk, Oslo",
				period: "Sommer 2025",
				highlights: [
					"Erstattet en manuell prosess hos Møller Digital for å lage plakatene som står foran nye biler i Audi-utstillingslokaler, der selgerne tidligere måtte navigere et utdatert DOS-system for å lage dem.",
					"Eide det meste av frontenden sammen med teamets designer",
				],
			},
			{
				role: "Fullstack-utvikler",
				company: "Vitalthings, Trondheim",
				period: "Aug 2024 - Des 2024 (deltid)",
				highlights: [
					"Fortsatte utviklingen av Somnofy-webappen for søvnmonitorering på deltid ved siden av studiene.",
				],
			},
			{
				role: "Fullstack-utvikler",
				company: "Vitalthings, Trondheim",
				period: "Sommer 2024",
				highlights: [
					"Jobbet både frontend og backend i Somnofy-webappen for søvnmonitorering.",
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
				title: "Diaper Dash",
				description:
					"Et flerspiller Android-spill bygget på en ECS- og MVC-arkitektur i team for faget TDT4240.",
				stack: "Java · LibGDX · Android · Firebase",
				link: "https://github.com/madsab/diaper-dash-domination-derby",
			},
		],
	},
	contact: {
		title: "Kontakt",
	},
};

const en = {
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
					"Built a dashboard for the Norwegian Directorate for Education and Training to monitor national and mapping tests, pulling together data that was spread across several separate sources.",
					"Worked end to end in a team of four: schema modelling and database setup, new endpoints on upstream internal APIs owned by neighbouring teams, and deployment through Terraform.",
				],
			},
			{
				role: "Full-stack Developer",
				company: "Bekk, Oslo",
				period: "Summer 2025",
				highlights: [
					"Replaced a manual process at Møller Digital for producing the posters displayed in front of new cars in Audi showrooms, where staff previously had to navigate an outdated DOS system to produce them previously.",
					"Owned most of the frontend alongside the team's designer",
				],
			},
			{
				role: "Full-stack Developer",
				company: "Vitalthings, Trondheim",
				period: "Aug 2024 - Dec 2024 (part-time)",
				highlights: [
					"Continued developing the Somnofy sleep-monitoring web application part-time alongside my studies.",
				],
			},
			{
				role: "Full-stack Developer",
				company: "Vitalthings, Trondheim",
				period: "Summer 2024",
				highlights: [
					"Worked across frontend and backend for the Somnofy sleep-monitoring web application.",
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
				title: "Diaper Dash",
				description:
					"A multiplayer Android game built on an ECS and MVC architecture as a team project for the course TDT4240.",
				stack: "Java · LibGDX · Android · Firebase",
				link: "https://github.com/madsab/diaper-dash-domination-derby",
			},
		],
	},
	contact: {
		title: "Get in touch",
	},
};

export const landingContentByLocale = {
	no,
	en,
} satisfies Record<Locale, typeof no>;
