// TeamDetails.ts
export interface TeamDetail {
	id: string;
	name: string;
	role: string;
	location: string;
	expertise: string;
	experience: { years: string; position: string }[];
	email: string;
	phone: string;
	image: string;
	socials: {
		twitter: string;
		instagram: string;
		linkedin: string;
	};
}

// Pre-fetched from randomuser.me to make it static
export const teamDetails: TeamDetail[] = [
	{
		id: 'team-01',
		name: 'Alex Rivera',
		role: 'Design Lead',
		location: 'San Francisco | USA',
		expertise: 'User interface design with a focus on interactive experiences and motion design.',
		experience: [
			{ years: '2016 - 2020', position: 'Senior Designer at PixelPerfect' },
			{ years: '2020 - Present', position: 'Design Lead at glint studio' }
		],
		email: 'alex.rivera@example.com',
		phone: '(555) 123-4567',
		image: 'https://randomuser.me/api/portraits/men/32.jpg',
		socials: {
			twitter: 'https://twitter.com',
			instagram: 'https://instagram.com',
			linkedin: 'https://linkedin.com'
		}
	},
	{
		id: 'team-02',
		name: 'Jamie Chen',
		role: 'UX Researcher',
		location: 'Singapore | Singapore',
		expertise: 'Conducting user interviews and creating research-backed design solutions.',
		experience: [
			{ years: '2017 - 2019', position: 'UX Intern at TechVision' },
			{ years: '2019 - Present', position: 'UX Researcher at glint studio' }
		],
		email: 'jamie.chen@example.com',
		phone: '(555) 234-5678',
		image: 'https://randomuser.me/api/portraits/women/44.jpg',
		socials: {
			twitter: 'https://twitter.com',
			instagram: 'https://instagram.com',
			linkedin: 'https://linkedin.com'
		}
	},
	{
		id: 'team-03',
		name: 'Sam Taylor',
		role: 'Frontend Developer',
		location: 'Berlin | Germany',
		expertise: 'Building responsive web applications with modern JavaScript frameworks.',
		experience: [
			{ years: '2015 - 2018', position: 'Web Developer at CodeCraft' },
			{ years: '2018 - Present', position: 'Frontend Developer at glint studio' }
		],
		email: 'sam.taylor@example.com',
		phone: '(555) 345-6789',
		image: 'https://randomuser.me/api/portraits/men/22.jpg',
		socials: {
			twitter: 'https://twitter.com',
			instagram: 'https://instagram.com',
			linkedin: 'https://linkedin.com'
		}
	},
	{
		id: 'team-04',
		name: 'Morgan Lee',
		role: 'UI Designer',
		location: 'Seoul | South Korea',
		expertise: 'Creating visual systems and design languages for digital products.',
		experience: [
			{ years: '2018 - 2020', position: 'Graphic Designer at VisualArts' },
			{ years: '2020 - Present', position: 'UI Designer at glint studio' }
		],
		email: 'morgan.lee@example.com',
		phone: '(555) 456-7890',
		image: 'https://randomuser.me/api/portraits/women/63.jpg',
		socials: {
			twitter: 'https://twitter.com',
			instagram: 'https://instagram.com',
			linkedin: 'https://linkedin.com'
		}
	},
	{
		id: 'team-05',
		name: 'Jordan Smith',
		role: 'Motion Designer',
		location: 'Toronto | Canada',
		expertise: 'Creating animations and interactive transitions for digital interfaces.',
		experience: [
			{ years: '2016 - 2019', position: 'Animator at MotionStudio' },
			{ years: '2019 - Present', position: 'Motion Designer at glint studio' }
		],
		email: 'jordan.smith@example.com',
		phone: '(555) 567-8901',
		image: 'https://randomuser.me/api/portraits/men/45.jpg',
		socials: {
			twitter: 'https://twitter.com',
			instagram: 'https://instagram.com',
			linkedin: 'https://linkedin.com'
		}
	},
	{
		id: 'team-06',
		name: 'Taylor Wong',
		role: 'Product Manager',
		location: 'Vancouver | Canada',
		expertise: 'Coordinating product development and aligning design with business objectives.',
		experience: [
			{ years: '2014 - 2018', position: 'Project Manager at TechSolutions' },
			{ years: '2018 - Present', position: 'Product Manager at glint studio' }
		],
		email: 'taylor.wong@example.com',
		phone: '(555) 678-9012',
		image: 'https://randomuser.me/api/portraits/women/28.jpg',
		socials: {
			twitter: 'https://twitter.com',
			instagram: 'https://instagram.com',
			linkedin: 'https://linkedin.com'
		}
	},
	{
		id: 'team-07',
		name: 'Casey Martinez',
		role: 'Backend Developer',
		location: 'Madrid | Spain',
		expertise: 'Building robust server architectures and database systems.',
		experience: [
			{ years: '2015 - 2019', position: 'Software Engineer at DataSystems' },
			{ years: '2019 - Present', position: 'Backend Developer at glint studio' }
		],
		email: 'casey.martinez@example.com',
		phone: '(555) 789-0123',
		image: 'https://randomuser.me/api/portraits/men/67.jpg',
		socials: {
			twitter: 'https://twitter.com',
			instagram: 'https://instagram.com',
			linkedin: 'https://linkedin.com'
		}
	},
	{
		id: 'team-08',
		name: 'Robin Patel',
		role: 'Content Strategist',
		location: 'London | UK',
		expertise: 'Developing content frameworks and information architecture for digital platforms.',
		experience: [
			{ years: '2017 - 2020', position: 'Copywriter at ContentCraft' },
			{ years: '2020 - Present', position: 'Content Strategist at glint studio' }
		],
		email: 'robin.patel@example.com',
		phone: '(555) 890-1234',
		image: 'https://randomuser.me/api/portraits/women/33.jpg',
		socials: {
			twitter: 'https://twitter.com',
			instagram: 'https://instagram.com',
			linkedin: 'https://linkedin.com'
		}
	},
	{
		id: 'team-09',
		name: 'Avery Johnson',
		role: '3D Artist',
		location: 'Melbourne | Australia',
		expertise: 'Creating immersive 3D environments and visual assets for digital experiences.',
		experience: [
			{ years: '2016 - 2018', position: '3D Modeler at GameWorks' },
			{ years: '2018 - Present', position: '3D Artist at glint studio' }
		],
		email: 'avery.johnson@example.com',
		phone: '(555) 901-2345',
		image: 'https://randomuser.me/api/portraits/men/55.jpg',
		socials: {
			twitter: 'https://twitter.com',
			instagram: 'https://instagram.com',
			linkedin: 'https://linkedin.com'
		}
	},
	{
		id: 'team-10',
		name: 'Riley Kim',
		role: 'QA Specialist',
		location: 'Stockholm | Sweden',
		expertise: 'Testing digital products and ensuring high-quality user experiences.',
		experience: [
			{ years: '2017 - 2019', position: 'QA Tester at BugFree' },
			{ years: '2019 - Present', position: 'QA Specialist at glint studio' }
		],
		email: 'riley.kim@example.com',
		phone: '(555) 012-3456',
		image: 'https://randomuser.me/api/portraits/women/90.jpg',
		socials: {
			twitter: 'https://twitter.com',
			instagram: 'https://instagram.com',
			linkedin: 'https://linkedin.com'
		}
	},
	{
		id: 'team-11',
		name: 'Jesse Garcia',
		role: 'Creative Director',
		location: 'Mexico City | Mexico',
		expertise: 'Providing creative vision and direction for design projects across the studio.',
		experience: [
			{ years: '2012 - 2017', position: 'Art Director at CreativeHouse' },
			{ years: '2017 - Present', position: 'Creative Director at glint studio' }
		],
		email: 'jesse.garcia@example.com',
		phone: '(555) 234-5678',
		image: 'https://randomuser.me/api/portraits/men/29.jpg',
		socials: {
			twitter: 'https://twitter.com',
			instagram: 'https://instagram.com',
			linkedin: 'https://linkedin.com'
		}
	},
	{
		id: 'team-12',
		name: 'Quinn Ahmed',
		role: 'Project Coordinator',
		location: 'Dubai | UAE',
		expertise: 'Managing project timelines and facilitating communication between teams.',
		experience: [
			{ years: '2018 - 2020', position: 'Office Manager at GlobalTech' },
			{ years: '2020 - Present', position: 'Project Coordinator at glint studio' }
		],
		email: 'quinn.ahmed@example.com',
		phone: '(555) 345-6789',
		image: 'https://randomuser.me/api/portraits/women/75.jpg',
		socials: {
			twitter: 'https://twitter.com',
			instagram: 'https://instagram.com',
			linkedin: 'https://linkedin.com'
		}
	}
];
