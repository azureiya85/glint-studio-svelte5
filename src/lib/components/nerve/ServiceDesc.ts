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
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.'
	},
	{
		catchphrase: 'Collaborate & Share',
		heading: 'Iterate together',
		description:
			'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	},
	{
		catchphrase: 'Optimize & Scale',
		heading: 'Grow efficiently',
		description:
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
	}
]);
