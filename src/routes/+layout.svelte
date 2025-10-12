<script lang="ts">
	import "../app.css";
	import favicon from "$lib/assets/favicon.svg";
	import logo from "$lib/assets/asymm1024.png";
	import github from "$lib/assets/github.svg";
	import linkedin from "$lib/assets/linkedin.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="container">
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
		</nav>
	</header>

	<main>
		{@render children?.()}
	</main>
</div>

<style>
	.container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
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
	}
</style>
