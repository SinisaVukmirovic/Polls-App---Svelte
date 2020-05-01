<script>
    // transitions
    import { fade, slide, scale } from 'svelte/transition';
    // animation for smoothly reordering poll cards when one is deleted
    import { flip } from 'svelte/animate';

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
    <!-- {#each $PollStore as poll (poll.id)} -->
        <!-- <div>{poll.question}</div> -->

        <!-- poll details component and voting functionality event forwarding --> 
        <!-- <PollDetails {poll} on:vote /> -->

        <!-- using store and data in components, no need to pass it here anymore -->
        <!-- transition makes it work in both ways, in and out -->
        <!-- <div transition:fade> -->
        <!-- to make it so that it animates only individual item, we add local -->
        <!-- <div in:fade out:scale|local animate:flip={{duration: 200}}>
            <PollDetails {poll} />
        </div> -->
    <!-- {/each} -->

    <!-- animation was throwing an error if it was with something else in each block for some reason -->
    <!-- An element that use the animate directive must be the sole child of a keyed each block -->
    {#each $PollStore as poll (poll.id)}
        <div in:fade out:scale|local animate:flip={{duration: 500}}>
            <PollDetails {poll} />
        </div>
    {/each}
</div>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1.5rem;
    }
</style>