<script>
	// components
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';

	// tabs
	import Tabs from './shared/Tabs.svelte';

	// tabs
	let tabs = ['Current Polls', 'Add New Poll'];
	let activeTab = 'Current Polls';
</script>

<Header />

<main>
	<!-- tabs -->
	<Tabs {activeTab} {tabs}/>
</main>

<Footer />

<style>
	main {
		max-width: 60rem;
		margin: 2rem auto;
	}
</style>