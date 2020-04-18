<script>
    // tabs
    import { createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();

    export let tabs;
    export let activeTab;
</script>

<div class="tabs">
    <ul>
        {#each tabs as tab}
            <!-- using inline function to prevent automatically invoked function -->
            <li on:click={() => dispatch('tabChange', tab)}>
                <div class:active={tab === activeTab} >{tab}</div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .tabs {
        margin-bottom: 2rem;
    }
    ul {
        display: flex;
        justify-content: center;
        list-style-type: none;
        padding: 0;
    }
    li {
        margin: 0 1rem;
        font-size: 1rem;
        color: #ddd;
        cursor: pointer;
    }
    .active {
        color: coral;
        border-bottom: 2px solid coral;
        padding-bottom: .5rem;
    }
</style>

<!-- this tabs compoenent is completelly reusable -->
<!-- nothing is hardcoded in here -->