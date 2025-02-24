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

export async function fetchTestimonials(count = 3) {
	loading.set(true);
	const res = await fetch(`https://randomuser.me/api/?results=${count}`);
	const data = await res.json();

	const mappedData = data.results.map((user: any) => ({
		id: user.login.uuid,
		name: `${user.name.first} ${user.name.last}`,
		image: user.picture.medium,
		location: `${user.location.city}, ${user.location.country}`,
		message: 'This service was amazing! Highly recommended.'
	}));

	testimonials.set(mappedData);
	loading.set(false);
}
