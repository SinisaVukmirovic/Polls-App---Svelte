<script>
	// components
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	// create form
	import CreateForm from './components/CreateForm.svelte';

	// tabs
	import Tabs from './shared/Tabs.svelte';

	// tabs
	let tabs = ['Current Polls', 'Add New Poll'];
	let activeTab = 'Current Polls';

	const tabChange = (e) => {
		console.log(e.detail);

		activeTab = e.detail;
	};
</script>

<Header />

<main>
	<!-- tabs -->
	<Tabs {activeTab} {tabs} on:tabChange={tabChange} />

	{#if activeTab === 'Current Polls'}
		<p>Polls list component goes here</p>
	{:else if activeTab === 'Add New Poll'}
		<CreateForm />
	{/if}
</main>

<Footer />

<style>
	main {
		max-width: 50rem;
		margin: 2rem auto;
	}
</style>