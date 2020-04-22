<script>
    import Button from '../shared/Button.svelte';

    // Adding new polls
    import { createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();

    let fieldValues = {
        question: '',
        answerA: '',
        answerB: ''
    };

    // validating form
    let errorValues = {
        question: '',
        answerA: '',
        answerB: ''
    };

    let valid = false;

    const handleSubmit = () => {
        // console.log(fieldValues);

        // custom form validation
        valid = true;

        // validate question
        // making sure that the question is at least 5 chars long, excluding spaces
        if (fieldValues.question.trim().length < 5) {
            valid = false;
            errorValues.question = 'Question must be at least 5 characters long';
        }
        else {
            errorValues.question = '';
        }

        // validate answer A
        // making sure that the answer is at least 1 character
        if (fieldValues.answerA.trim().length < 1) {
            valid = false;
            errorValues.answerA = 'Answer A cannot be empty';
        }
        else {
            errorValues.answerA = '';
        }

        // validate answer B
        if (fieldValues.answerB.trim().length < 1) {
            valid = false;
            errorValues.answerB = 'Answer B cannot be empty';
        }
        else {
            errorValues.answerB = '';
        }

        if (valid) {
            // console.log('Inputs are valid', fieldValues);

            // adding new polls
            let newPoll = {...fieldValues, votesA: 0, votesB: 0, id: Math.random()};

            dispatch('addPoll', newPoll);
        }
    };
</script>

<!-- MockUp -->
<form on:submit|preventDefault={handleSubmit}>
    <div class="form-field">
        <label for="question">Poll Question:</label>
        <input type="text" id="question" bind:value={fieldValues.question}>
        <!-- custom form validation -->
        <div class="error">{ errorValues.question }</div>
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A:</label>
        <input type="text" id="answer-a" bind:value={fieldValues.answerA}>
        <div class="error">{ errorValues.answerA }</div>
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B:</label>
        <input type="text" id="answer-b" bind:value={fieldValues.answerB}>
        <div class="error">{ errorValues.answerB }</div>
    </div>

    <!-- <Button type="secondary" flat={true} inverse={true}>Add Poll</Button> -->
    <Button type="secondary" flat={true}>Add Poll</Button>
</form>

<style>
    form {
        width: 25rem;
        margin: 0 auto;
        text-align: center;
    }
    .form-field {
        margin: 1rem auto;
    }
    input {
        width: 100%;
        border-radius: 6px;
    }
    label {
        margin: .5rem auto;
        text-align: left;
    }
    .error {
        font-weight: bold;
        font-size: .8rem;
        color: coral;
    }
</style>