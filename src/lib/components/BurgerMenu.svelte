<script lang="ts">
	import { fly } from "svelte/transition";
	let open = false;

	function toggleMenu() {
		open = !open;
	}
</script>

<div class="burger-menu">
	<button on:click={toggleMenu} class="burger-button" aria-label="Open menu">
		{#if open}
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M18 6L6 18"
					stroke="black"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M6 6L18 18"
					stroke="black"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		{:else}
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M3 12H21"
					stroke="black"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M3 6H21"
					stroke="black"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M3 18H21"
					stroke="black"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		{/if}
	</button>

	{#if open}
		<div class="menu-items" transition:fly={{ y: -20, duration: 200 }}>
			<a href="/cv" on:click={() => (open = false)}>CV</a>
			<a href="/me" on:click={() => (open = false)}>Me</a>
			<a href="/projects" on:click={() => (open = false)}>Projects</a>
			<a href="/movies" on:click={() => (open = false)}>Movies</a>
		</div>
	{/if}
</div>

<style>
	.burger-menu {
		position: relative;
		display: inline-block;
	}

	.burger-button {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
	}

	.menu-items {
		position: absolute;
		right: 0;
		top: 100%;
		background-color: white;
		border: none;
		border-radius: 4px;
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		z-index: 10;
	}

	.menu-items a {
		text-decoration: none;
		color: black;
		padding: 0.5rem;
		text-align: center;
	}

	.menu-items a:hover {
		background-color: #f0f0f0;
	}
</style>
