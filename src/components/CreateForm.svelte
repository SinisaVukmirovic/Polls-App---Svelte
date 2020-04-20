<script>
    let fieldValues = {
        question: '',
        answerA: '',
        answerB: ''
    };

    const handleSubmit = () => {
        console.log(fieldValues);
    };
</script>

<!-- MockUp -->
<form on:submit|preventDefault={handleSubmit}>
    <div class="form-field">
        <label for="question">Poll Question:</label>
        <input type="text" id="question" bind:value={fieldValues.question}>
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A:</label>
        <input type="text" id="answer-a" bind:value={fieldValues.answerA}>
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B:</label>
        <input type="text" id="answer-b" bind:value={fieldValues.answerB}>
    </div>

    <button>Add Poll</button>
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
</style>