// src/lib/stores/cart.ts
import { writable } from 'svelte/store';

export interface CartItem {
	id: string;
	name: string;
	price: number;
	isMonthly: boolean;
	icon: string;
}

export const cart = writable<CartItem[]>([]);
export const showPopup = writable(false);
