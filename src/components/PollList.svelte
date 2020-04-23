<script>
    // poll detail component
    import PollDetails from './PollDetails.svelte';

    export let polls = [];
</script>

<!-- MarkUp -->
<div class="poll-list">
    {#each polls as poll (poll.id)}
        <!-- <div>{poll.question}</div> -->

        <!-- poll details component -->
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