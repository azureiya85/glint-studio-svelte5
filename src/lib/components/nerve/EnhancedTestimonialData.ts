import { writable } from 'svelte/store';

export type EnhancedTestimonial = {
	id: string;
	name: string;
	image: string;
	location: string;
	company: string;
	position: string;
	message: string;
	projectType: string;
	rating: number;
};

export const enhancedTestimonials = writable<EnhancedTestimonial[]>([
	{
		id: '1',
		name: 'Sarah Johnson',
		image: 'https://randomuser.me/api/portraits/women/68.jpg',
		location: 'San Francisco | USA',
		company: 'HealthTech Innovations',
		position: 'Chief Product Officer',
		message:
			"Working with this design team transformed our healthcare app completely. We had a complex user flow for patient data management that was causing significant drop-offs. Their Rapid UI Development service delivered a completely reimagined interface in just two weeks that reduced our abandonment rate by 64%. The collaborative workshops helped align our entire team around a user-centered approach that we've now adopted company-wide.",
		projectType: 'Healthcare App Redesign',
		rating: 5
	},
	{
		id: '2',
		name: 'Michael Chen',
		image: 'https://randomuser.me/api/portraits/men/22.jpg',
		location: 'Toronto | Canada',
		company: 'FinStep',
		position: 'Founder & CEO',
		message:
			'As a fintech startup, we needed a design system that could scale with our rapidly growing user base while maintaining compliance with financial regulations. The Scalable Design Systems package was exactly what we needed. Not only did they create a beautiful, consistent interface, but they also built a component library that our developers continue to leverage a year later. Every dollar invested in this service has saved us at least three in development costs.',
		projectType: 'Fintech Platform Launch',
		rating: 5
	},
	{
		id: '3',
		name: 'Elena Rodriguez',
		image: 'https://randomuser.me/api/portraits/women/45.jpg',
		location: 'Barcelona | Spain',
		company: 'EduLearn Solutions',
		position: 'Head of Product Design',
		message:
			"Our e-learning platform needed a complete overhaul to improve user engagement. The team's Collaborative Design service brought our stakeholders together and delivered a solution that increased course completion rates by 45%. Their attention to detail and ability to translate our vision into a functional, beautiful UI was outstanding.",
		projectType: 'E-Learning Platform Revamp',
		rating: 4
	},
	{
		id: '4',
		name: 'James Wilson',
		image: 'https://randomuser.me/api/portraits/men/44.jpg',
		location: 'Melbourne | Australia',
		company: 'RetailSync',
		position: 'Digital Transformation Lead',
		message:
			'The Complete Design Solution package was exactly what our retail business needed during our digital transformation. Moving from a legacy system to a modern omnichannel platform seemed overwhelming until we partnered with this team. They structured the process brilliantly, from initial user research through to final implementation. The scalable architecture they designed has easily accommodated our 300% growth in mobile users, and the system continues to perform flawlessly during seasonal peaks.',
		projectType: 'Retail Digital Transformation',
		rating: 5
	},
	{
		id: '5',
		name: 'Aisha Patel',
		image: 'https://randomuser.me/api/portraits/women/37.jpg',
		location: 'Mumbai | India',
		company: 'TravelEase',
		position: 'Product Manager',
		message:
			'Our travel booking app had decent engagement but poor conversion rates. The UX audit conducted as part of the Rapid UI Development service identified critical friction points we had completely missed. Within a month, we had a revamped booking flow that increased conversions by 78%. What impressed me most was how they balanced beautiful design with performance optimization for users in regions with limited connectivity - truly demonstrating an understanding of our global user base.',
		projectType: 'Travel App Optimization',
		rating: 5
	},
	{
		id: '6',
		name: 'Thomas Mueller',
		image: 'https://randomuser.me/api/portraits/men/32.jpg',
		location: 'Berlin | Germany',
		company: 'IndustrialIoT',
		position: 'CTO',
		message:
			"Designing interfaces for industrial IoT applications presents unique challenges, requiring both technical precision and user-friendly interactions. The Growth & Scale Package allowed us to develop a monitoring dashboard that our factory operators could actually use without extensive training. The modular design system they created has been instrumental as we've expanded to new facilities, allowing us to maintain consistency while accommodating site-specific requirements. Three years later, we still leverage the component library for all new features.",
		projectType: 'Industrial IoT Dashboard',
		rating: 5
	}
]);

export const loading = writable(false);

export async function fetchEnhancedTestimonials() {
	loading.set(true);
	// In a real implementation, you would fetch from an API
	// This is simulating an API call
	return new Promise<void>((resolve) => {
		setTimeout(() => {
			// Data is already set in the writable store
			loading.set(false);
			resolve();
		}, 500);
	});
}
