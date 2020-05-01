<script>
    export let type = 'primary';
    export let flat = false;
    export let inverse = false;
</script>

<!-- MarkUp -->
<button class={type} class:flat={flat} class:inverse={inverse} on:click>
    <slot></slot>
</button>

<style>
    button {
        border: 0;
        cursor: pointer;
        border-radius: 6px;
        padding: .5rem 1rem;
        font-weight: bold;
        box-shadow: 3px 2px 4px #000;
    }
    .primary {
        background: crimson;
        color: #eee;
    }
    .secondary {
        background: cornflowerblue;
    }
    .flat {
        box-shadow: none;
    }
    .primary.inverse {
        color: crimson;
        background: #333;
        border: 2px solid crimson;
    }
    .secondary.inverse {
        color: cornflowerblue;
        background: #333;
        border: 2px solid cornflowerblue;
    }
</style>