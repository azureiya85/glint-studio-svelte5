<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import MobileMenu from './MobileMenu.svelte';
	import { authStore } from '$lib/stores/auth';
	import { cart, showPopup } from '$lib/stores/cart';
	import type { CartItem } from '$lib/stores/cart';

	let scrolled = $state(false);
	let mobileMenuOpen = $state(false);
	let isAuthenticated = $derived(!!$authStore);
	let cartItems = $derived($cart);
	let itemCount = $derived(cartItems.length);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function togglePopup() {
		$showPopup = !$showPopup;
	}

	function removeFromCart(itemId: string) {
		$cart = $cart.filter((item) => item.id !== itemId);
		if ($cart.length === 0) {
			$showPopup = false;
		}
	}

	async function handleLogout() {
		await authStore.logout();
	}

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class="fixed top-0 left-0 w-full px-10 py-6 flex justify-between items-center transition-all duration-300 z-[50]"
	class:backdrop-blur-lg={scrolled}
	class:bg-opacity-80={scrolled}
>
	<div class="flex items-center gap-3">
		<a href="/" class="flex items-center gap-2">
			<Icon icon="mdi:palette" class="text-secondary-500 text-2xl" />
			<span class="text-white text-xl font-semibold tracking-wide">glint</span>
		</a>
	</div>

	<nav class="hidden md:flex items-center gap-6">
		<a href="/blog" class="nav-link">Blog</a>
		<a href="/pricing" class="nav-link">Pricing</a>
		<a href="/protected/test" class="nav-link">Test</a>
		<span class="text-white opacity-50">|</span>

		{#if isAuthenticated}
			<span class="nav-link">Hello, {$authStore?.username}</span>
			<button
				onclick={handleLogout}
				class="px-6 py-2 bg-primary-800 border border-tertiary-900 hover:bg-secondary-700 text-white rounded-3xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
			>
				Sign Out
			</button>
		{:else}
			<a href="/login" class="nav-link">Login</a>
			<a
				href="/register"
				class="px-6 py-2 bg-primary-800 border border-tertiary-900 hover:bg-secondary-600 text-white rounded-3xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
			>
				Sign Up
			</a>
		{/if}

		{#if itemCount > 0}
			<button class="relative text-white text-2xl" onclick={togglePopup}>
				<Icon icon="mdi:cart-variant" />
				<span
					class="absolute -top-2 -right-2 bg-secondary-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
				>
					{itemCount}
				</span>
			</button>
		{/if}
	</nav>

	<button class="md:hidden text-white text-2xl" onclick={toggleMobileMenu}>
		<Icon icon="mdi:menu" />
	</button>

	{#if mobileMenuOpen}
		<MobileMenu on:close={toggleMobileMenu} />
	{/if}
</header>

{#if $showPopup && itemCount > 0}
	<div
		class="fixed top-16 right-4 w-80 bg-primary-800 rounded-xl shadow-xl z-[60] border border-tertiary-600 p-4"
	>
		{#each cartItems as item}
			<div class="flex items-center justify-between mb-2">
				<div class="flex items-center gap-2">
					<Icon icon={item.icon} class="text-secondary-500 w-5 h-5" />
					<span class="font-bold text-primary-50"
						>{item.name} ({item.isMonthly ? 'monthly' : 'yearly'})</span
					>
				</div>
				<div class="flex items-center gap-2">
					<span class="text-primary-200">${item.price}</span>
					<button
						onclick={() => removeFromCart(item.id)}
						class="text-tertiary-400 hover:text-tertiary-300 transition-colors"
						aria-label={`Remove ${item.name} from cart`}
					>
						<Icon icon="mdi:trash-can-outline" class="w-5 h-5" />
					</button>
				</div>
			</div>
		{/each}

		<hr class="border-t border-tertiary-600 my-3" />

		<div class="flex justify-between mb-2">
			<span class="text-sm text-primary-300">Subtotal</span>
			<span class="font-bold text-primary-50">
				${cartItems.reduce((sum: number, item: CartItem) => sum + item.price, 0)}
			</span>
		</div>

		<div class="flex justify-between mb-2">
			<span class="text-sm text-primary-300">Tax (12%)</span>
			<span class="font-bold text-primary-50">
				${(cartItems.reduce((sum: number, item: CartItem) => sum + item.price, 0) * 0.12).toFixed(
					2
				)}
			</span>
		</div>

		<div class="flex justify-between mb-3">
			<span class="text-sm text-primary-300">Total</span>
			<span class="font-bold text-primary-50">
				${(cartItems.reduce((sum: number, item: CartItem) => sum + item.price, 0) * 1.12).toFixed(
					2
				)}
			</span>
		</div>

		<hr class="border-t border-tertiary-600 mb-3" />

		<button
			class="w-full py-2 rounded-full text-white font-medium transition-colors duration-300"
			class:bg-gray-600={!isAuthenticated}
			class:bg-secondary-600={isAuthenticated}
			class:hover:bg-secondary-500={isAuthenticated}
			disabled={!isAuthenticated}
		>
			Checkout
		</button>

		{#if !isAuthenticated}
			<div class="text-center mt-2 text-sm text-primary-300">
				<p>You need to sign in to checkout</p>
				<p>
					Don't have an account?
					<a href="/login" class="font-bold underline">Sign in</a> or
					<a href="/register" class="font-bold underline">Sign up</a>
				</p>
			</div>
		{/if}
	</div>
{/if}

<style>
	a.nav-link {
		@apply text-primary-50 text-lg hover:text-secondary-400 transition-colors;
	}
</style>
