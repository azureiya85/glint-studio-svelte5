import { writable } from 'svelte/store';

export type EnhancedServiceDesc = {
	catchphrase: string;
	heading: string;
	description: string;
	pricing: {
		monthly: number;
		yearly: number;
		features: string[];
	};
};

export const enhancedServiceDescriptions = writable<EnhancedServiceDesc[]>([
	{
		catchphrase: 'Build & Integrate',
		heading: 'Rapid UI Development',
		description:
			'Transform your ideas into fully-functional prototypes in record time. Our dedicated UI/UX team specializes in rapid development cycles that convert concepts into interactive interfaces within days, not months. We seamlessly integrate with your existing systems using modern frameworks and design systems, ensuring consistent user experiences across all touchpoints while maintaining your brand identity.',
		pricing: {
			monthly: 349,
			yearly: 3499,
			features: [
				'Initial consultation and requirement analysis',
				'Rapid prototype development within 7-14 days',
				'Component-based design system creation',
				'Seamless integration with existing platforms',
				'Cross-platform consistency assurance',
				'Post-deployment support (30 days)'
			]
		}
	},
	{
		catchphrase: 'Collaborate & Share',
		heading: 'Collaborative Design Process',
		description:
			'Experience design as a partnership, not just a service. Our collaborative approach puts your team at the center of the design process through facilitated workshops, regular feedback sessions, and transparent project management. We utilize cutting-edge collaborative tools that enable real-time feedback and iteration, making design decisions together while leveraging our expertise to guide the process toward optimal user experiences.',
		pricing: {
			monthly: 299,
			yearly: 2999,
			features: [
				'Facilitated design thinking workshops',
				'Stakeholder interviews and alignment sessions',
				'Shared design workspace with real-time collaboration',
				'Weekly sprint reviews and feedback integration',
				'Comprehensive documentation of design decisions',
				'Knowledge transfer sessions for your team'
			]
		}
	},
	{
		catchphrase: 'Optimize & Scale',
		heading: 'Scalable Design Systems',
		description:
			'Future-proof your digital products with scalable design systems built for growth. We analyze your current and future user needs to create flexible architectures that accommodate expanding feature sets and growing user bases. Our approach focuses on modular components, consistent design patterns, and performance optimization to ensure your interfaces remain responsive and effective even as your business scales exponentially.',
		pricing: {
			monthly: 499,
			yearly: 4999,
			features: [
				'Comprehensive UX audit and performance analysis',
				'Scalable design system development',
				'Component library creation with documentation',
				'User flow optimization for growth scenarios',
				'Performance benchmarking and optimization',
				'Quarterly review and system updates'
			]
		}
	}
]);

export const combinedPackages = writable([
	{
		title: 'Development & Collaboration Bundle',
		description:
			'Combine rapid development with collaborative processes for the perfect balance of speed and alignment.',
		services: ['Rapid UI Development', 'Collaborative Design Process'],
		savings: '15%',
		monthlyPrice: 549,
		yearlyPrice: 5499,
		features: [
			'All features from both included services',
			'Dedicated project manager',
			'Priority support response',
			'Extended post-deployment support (60 days)'
		]
	},
	{
		title: 'Growth & Scale Package',
		description:
			'Pair collaborative design with scalable systems for long-term success as your user base grows.',
		services: ['Collaborative Design Process', 'Scalable Design Systems'],
		savings: '15%',
		monthlyPrice: 679,
		yearlyPrice: 6799,
		features: [
			'All features from both included services',
			'Quarterly growth strategy sessions',
			'Advanced analytics integration',
			'Annual design system review and update'
		]
	},
	{
		title: 'Complete Design Solution',
		description:
			'Our comprehensive package includes all three services for the ultimate design partnership.',
		services: ['Rapid UI Development', 'Collaborative Design Process', 'Scalable Design Systems'],
		savings: '25%',
		monthlyPrice: 859,
		yearlyPrice: 8599,
		features: [
			'All features from all three services',
			'Executive strategy sessions',
			'Dedicated design team',
			'24/7 priority support',
			'Unlimited revisions during development',
			'Quarterly business review and roadmap planning'
		]
	}
]);
