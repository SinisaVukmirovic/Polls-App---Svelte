<script>
    // voting functionality
    // import { createEventDispatcher} from 'svelte';
    // not needed anymore when using store

    // card compoennt
    import Card from '../shared/Card.svelte';

    // importing store
    import PollStore from '../stores/PollStore.js';

    // deleting polls
    import Button from '../shared/Button.svelte';

    export let poll;

	// tweens and animations
	import { tweened } from 'svelte/motion';

    // const dispatch = createEventDispatcher();

    // reactive values
    $: totalVotes = poll.votesA + poll.votesB;
    // vote bars
    $: percentA = Math.floor(100 / totalVotes * poll.votesA) || 0;
    $: percentB = Math.floor(100 / totalVotes * poll.votesB) || 0;
    // adding default 0 for tweened if the value in Math ends up being NaN or undefined

    // voting functionality
    // const handleVote = (option, id) => {
    //     // dispatch('vote', { option: option, id: id });
    //     dispatch('vote', { option, id });
    // };

    // using store
    const handleVote = (option, id) => {
        // updating store
        PollStore.update(currentPolls => {
            let copiedPolls = [...currentPolls];

            // finding the poll that was clicked on / voted on
            let upvotedPoll = copiedPolls.find(poll => poll.id == id);

            // upvoting option that was voted for
            if (option === 'a') {
                upvotedPoll.votesA++;
            }
            if (option === 'b') {
                upvotedPoll.votesB++;
            }

            return copiedPolls;
        });
    };

    // deleting a poll functionality
    const handleDelete = (id) => {
        PollStore.update(currentPolls => {
            return currentPolls.filter(poll => poll.id != id);
        });
    };

    // tween and animation
    // tweened percentages
    const tweenedPercentA = tweened(0);
    const tweenedPercentB = tweened(0);

    $:tweenedPercentA.set(percentA);
    $:tweenedPercentB.set(percentB);
    // $: console.log($tweenedPercentA, $tweenedPercentB);
</script>

<!-- MarkUp -->
<!-- card component -->
<Card>
    <div class="poll">
        <h3>{ poll.question }</h3>
        <p>Total votes: { totalVotes }</p>

        <div class="answer" on:click={()=> handleVote('a', poll.id)}>
            <!-- <div class="percent percent-a" style="width: {percentA}%"></div> -->
            <!-- tween and animtion -->
            <div class="percent percent-a" style="width: {$tweenedPercentA}%"></div>
            <span>{ poll.answerA } ({ poll.votesA })</span>
        </div>
        <div class="answer" on:click={()=> handleVote('b', poll.id)}>
            <!-- <div class="percent percent-b" style="width: {percentB}%"></div> -->
            <!-- tween and animtion -->
            <div class="percent percent-b" style="width: {$tweenedPercentB}%"></div>
            <span>{ poll.answerB } ({ poll.votesB })</span>
        </div>

        <div class="delete">
            <!-- usrrounding handl function in an inline function to prevent invoking it automatically, since we are pass arguments in it -->
            <Button flat={true} on:click={() => handleDelete(poll.id)}>Delete</Button>
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
        transition: all 250ms ease;
    }
        .answer:hover {
            background: #000;
        }
    span {
        display: inline-block;
        padding: .5rem 1rem;
    }
    .percent {
        height: 100%;
        position: absolute;
        box-sizing: border-box;
    }
        .percent-a {
            border-left: 4px solid crimson;
            background: rgba(237, 20, 61, .3);
        }
        .percent-b {
            border-left: 4px solid lime;
            background: rgba(0, 255, 0, .3);
        }

    .delete {
        margin-top: 2rem;
        text-align: center;
    }
</style>