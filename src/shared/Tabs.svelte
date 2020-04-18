<script>
    export let tabs;
    export let activeTab;
</script>

<div class="tabs">
    <ul>
        {#each tabs as tab}
            <li>
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