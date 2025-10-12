<script lang="ts">
	import "../app.css";
	import logo from "$lib/assets/asymm1024.png";
	import github from "$lib/assets/github.svg";
	import linkedin from "$lib/assets/linkedin.svg";
	import BurgerMenu from "$lib/components/BurgerMenu.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" sizes="any" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />

	<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />

	<link rel="manifest" href="/site.webmanifest" />

	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<div class="site">
	<header>
		<a href="/">
			<img src={logo} alt="logo" class="logo" />
		</a>
		<nav>
			<a href="https://github.com/gjace" target="_blank">
				<img src={github} alt="github" class="icon" />
			</a>
			<a
				href="https://www.linkedin.com/in/giacomo-panzacchi"
				target="_blank"
			>
				<img src={linkedin} alt="linkedin" class="icon" />
			</a>
			<BurgerMenu />
		</nav>
	</header>

	<main>
		{@render children?.()}
	</main>
</div>

<style>
	.site {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		margin: 0 auto; /* center the site horizontally */
		max-width: 960px; /* keep content narrow on large screens */
		padding: 1rem;
	}

	header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		height: 40px;
	}
	nav {
		display: flex;
		gap: 1rem;
	}
	.icon {
		height: 24px;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		width: 100%;
	}
</style>
