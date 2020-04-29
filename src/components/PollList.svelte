<script>
    // life cycle hooks
    // import { onMount, onDestroy } from 'svelte';

    // store
    import PollStore from '../stores/PollStore.js';

    // poll detail component
    import PollDetails from './PollDetails.svelte';

    // commenting out all life cycle methods because we will use automatic
    // sub and unsub scription by refering PollStore store file

    // export let polls = [];

    // subscribing to data in store
    // storing into a variable so that we can use it to unsubscribe later
    // const unSub = PollStore.subscribe(data => {
    //     polls = data;
    // });

    // onMount method (life cycle hook)
    // on Mount life cycle hook happens when a component mount the DOM
    // when it i injected into the DOM
    // onMount(() => {
    //     // maybe get data from data base
    //     console.log('Component mounted');
    // });

    // onDestroy method (life cycle hook)
    // onDestroy life cycle hook fires everytime the component is removed from the DOM
    // onDestroy(() => {
    //     // unsubscribe from the store
    //     console.log('Component destroyed');
    //     // unsubscribing from store
    //     unSub();
    // });
</script>

<!-- MarkUp -->
<div class="poll-list">
    <!-- {#each polls as poll (poll.id)} -->
    <!-- to make subscribe and unsubscribe automatic, 
    <!-- we replace pools variable with referance to store file --> 
    {#each $PollStore as poll (poll.id)}
        <!-- <div>{poll.question}</div> -->

        <!-- poll details component and voting functionality event forwarding --> 
        <!-- <PollDetails {poll} on:vote /> -->

        <!-- using store and data in components, no need to pass it here anymore -->
        <PollDetails {poll} />
    {/each}
</div>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1.5rem;
    }
</style>