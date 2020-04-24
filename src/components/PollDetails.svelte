<script>
    // card compoennt
    import Card from '../shared/Card.svelte';

    export let poll;

    // reactive values
    $: totalVotes = poll.votesA + poll.votesB;
</script>

<!-- MarkUp -->
<!-- card component -->
<Card>
    <div class="poll">
        <h3>{ poll.question }</h3>
        <p>Total votes: { totalVotes }</p>

        <div class="answer">
            <div class="percent percent-a"></div>
            <span>{ poll.answerA } ({ poll.votesA })</span>
        </div>
        <div class="answer">
            <div class="percent percent-b"></div>
            <span>{ poll.answerB } ({ poll.votesB })</span>
        </div>
    </div>
</Card>

<style>
    h3 {
        margin: 0 auto;
        color: cornflowerblue;
    }
    p {
        margin: .5rem 0 1rem;
        color: #bbb;
        font-style: italic;
    }
    .answer {
        background: #131313;
        cursor: pointer;
        margin: .8rem auto;
        position: relative;
    }
        .answer:hover {
            background: #111;
        }
    span {
        display: inline-block;
        padding: .5rem 1rem;
    }
</style>