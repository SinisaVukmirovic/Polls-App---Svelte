<script>
	// components
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	// create form
	import CreateForm from './components/CreateForm.svelte';

	// tabs
	import Tabs from './shared/Tabs.svelte';

	import PollList from './components/PollList.svelte';

	// tabs
	let tabs = ['Current Polls', 'Add New Poll'];
	let activeTab = 'Current Polls';

	const tabChange = (e) => {
		console.log(e.detail);

		activeTab = e.detail;
	};

	// substituting data below with data from store

	// adding new polls
	// let polls = [{
	// 	id: 1,
	// 	question: 'JavaScript or Python?',
	// 	answerA: 'JavaScript',
	// 	answerB: 'Python',
	// 	votesA: 17,
	// 	votesB: 8
	// }];

	const handleAdd = (e) => {
		const poll = e.detail;

		polls = [poll, ...polls];
		console.log(polls);

		activeTab = 'Current Polls';
	};

	// voting functionality (forwarded event)
	const handleVote = (e) => {
		// console.log(e.detail);
		const { id, option } = e.detail;

		let copiedPolls = [...polls];

		// finding the poll that was clicked on / voted on
		let upvotedPoll = copiedPolls.find(poll => poll.id == id);

		// upvoting option that was voted for
		if (option === 'a') {
			upvotedPoll.votesA++;
		}
		if (option === 'b') {
			upvotedPoll.votesB++;
		}

		polls = copiedPolls;
	};
</script>

<Header />

<main>
	<!-- tabs -->
	<Tabs {activeTab} {tabs} on:tabChange={tabChange} />

	{#if activeTab === 'Current Polls'}
		<!-- <p>Polls list component goes here</p> -->
		<!-- <PollList {polls} on:vote={handleVote} /> -->
		<!-- now using data from store -->
		<PollList on:vote={handleVote} />
	{:else if activeTab === 'Add New Poll'}
		<CreateForm on:addPoll={handleAdd} />
	{/if}
</main>

<Footer />

<style>
	main {
		max-width: 50rem;
		margin: 2rem auto;
	}
</style>