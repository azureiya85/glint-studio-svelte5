// Milestone.ts
export interface Milestone {
	year: string;
	title: string;
	description: string;
	icon: string;
}

export const milestones: Milestone[] = [
	{
		year: '2018',
		title: 'Our Beginning',
		description:
			'Started in a tiny apartment with just two designers and a vision to make the web more human',
		icon: 'mdi:rocket-launch'
	},
	{
		year: '2020',
		title: 'Growth & Change',
		description: 'Expanded to a team of 12 and moved to our first official studio space',
		icon: 'mdi:office-building'
	},
	{
		year: '2022',
		title: 'Going Global',
		description: 'Launched our international presence with clients across 20+ countries',
		icon: 'mdi:earth'
	},
	{
		year: '2024',
		title: 'Today',
		description: 'Award-winning team of 30+ creatives dedicated to reimagining digital experiences',
		icon: 'mdi:trophy-award'
	}
];
