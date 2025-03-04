<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<footer class="w-full bg-primary-800 pb-4">
	<div class="w-full h-[1px] bg-tertiary-800 mx-auto"></div>
	<div class="grid grid-cols-3 items-center p-6 text-center">
		<!-- Left: Newsletter -->
		<div class="text-left">
			<h1 class="text-2xl font-bold mb-4">Let's keep in touch!</h1>
			<p class="text-xl mb-4">
				Enter your email to stay up to date<br />
				with the latest updates from glint.
			</p>
			<div class="flex space-x-2">
				<input
					type="text"
					placeholder="Enter your email here"
					class="w-2/3 p-2 border border-tertiary-500 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-tertiary-200"
				/>
				<button
					type="button"
					class="w-1/3 rounded-full bg-secondary-700 hover:bg-secondary-500 text-white py-2 border border-tertiary-800 transition-all"
				>
					Subscribe Now
				</button>
			</div>
		</div>
		<!-- Center Placeholder -->
		<div></div>

		<!-- Right: Socials -->
		<div class="text-right">
			<h1 class="text-3xl font-bold">Our Socials</h1>
			<div class="flex justify-end my-4">
				<a href="https://github.com/">
					<Icon
						icon="cib:github"
						class="mr-2 text-primary-100 text-4xl hover:text-secondary-400 transition-all"
						aria-hidden="true"
					/>
				</a>
				<a href="https://discord.com/">
					<Icon
						icon="cib:discord"
						class="mr-2 text-primary-100 text-4xl hover:text-secondary-400 transition-all"
						aria-hidden="true"
					/>
				</a>
				<a href="https://twitter.com/">
					<Icon
						icon="cib:twitter"
						class="mr-2 text-primary-100 text-4xl hover:text-secondary-400 transition-all"
						aria-hidden="true"
					/>
				</a>
				<a href="https://linkedin.com/">
					<Icon
						icon="cib:linkedin-in"
						class="mr-2 text-primary-100 text-4xl hover:text-secondary-400 transition-all"
						aria-hidden="true"
					/>
				</a>
				<a href="https://www.instagram.com/">
					<Icon
						icon="cib:instagram"
						class="mr-2 text-primary-100 text-4xl hover:text-secondary-400 transition-all"
						aria-hidden="true"
					/>
				</a>
			</div>
			<p class=" text-md text-primary-200 mt-2">&copy; glint studio, 2025</p>
		</div>
	</div>
</footer>
