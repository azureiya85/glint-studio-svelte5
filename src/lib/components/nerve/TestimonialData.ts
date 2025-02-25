import { writable } from 'svelte/store';

export type Testimonial = {
	id: string;
	name: string;
	image: string;
	location: string;
	message: string;
};

export const testimonials = writable<Testimonial[]>([]);
export const loading = writable(false);

const messages = [
	"Absolutely phenomenal service! I couldn't be happier.",
	'A seamless experience from start to finish. Highly recommended!',
	'The team went above and beyond. Exceeded my expectations!',
	"I've never had such a smooth and professional experience before.",
	'Incredible attention to detail. Will definitely use again!',
	'Outstanding quality and customer service. 10/10!'
];

const getRandomMessage = () => messages[Math.floor(Math.random() * messages.length)];

export async function fetchTestimonials(count = 6) {
	loading.set(true);
	try {
		const res = await fetch(`https://randomuser.me/api/?results=${count}`);
		const data = await res.json();

		const mappedData = data.results.map((user: any) => ({
			id: user.login.uuid,
			name: `${user.name.first} ${user.name.last}`,
			image: user.picture.medium,
			location: `${user.location.city}, ${user.location.country}`,
			message: getRandomMessage()
		}));

		testimonials.set(mappedData);
	} catch (error) {
		console.error('Failed to fetch testimonials, using fallback.', error);
		import('./StaticTestimonialData').then((module) => {
			testimonials.set(module.staticTestimonials);
		});
	}
	loading.set(false);
}
