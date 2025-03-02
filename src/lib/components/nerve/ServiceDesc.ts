import { writable } from 'svelte/store';

export type ServiceDesc = {
	catchphrase: string;
	heading: string;
	description: string;
};

export const serviceDescriptions = writable<ServiceDesc[]>([
	{
		catchphrase: 'Build & Integrate',
		heading: 'Make faster app',
		description:
			'Accelerate your development cycle with our specialized UI/UX design expertise. We build intuitive interfaces and seamlessly integrate them into your existing systems for rapid deployment.'
	},
	{
		catchphrase: 'Collaborate & Share',
		heading: 'Iterate together',
		description:
			'Experience a truly collaborative design process. We work closely with your team, sharing insights and iterating on feedback to ensure your vision comes to life exactly as you imagined.'
	},
	{
		catchphrase: 'Optimize & Scale',
		heading: 'Grow efficiently',
		description:
			'Future-proof your digital presence with scalable design solutions. We optimize your app architecture and user flows to handle growing user bases and evolving business needs without compromising performance.'
	}
]);
