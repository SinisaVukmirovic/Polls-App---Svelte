// introdustion to stores in svelte
// --------------------------------

import { writable } from 'svelte/store';

// creating writeable store with some initial data
const PollStore = writable([
    {
        id: 1,
        question: 'Svelte or React?',
        answerA: 'Svelte',
        answerB: 'React',
        votesA: 26,
        votesB: 5
    },
    {
        id: 2,
        question: 'LOL or DOTA?',
        answerA: 'LOL',
        answerB: 'DOTA',
        votesA: 11,
        votesB: 42
    },
    {
        id: 3,
        question: 'ManUTD or Liverpool?',
        answerA: 'ManUTD',
        answerB: 'Liverpool',
        votesA: 63,
        votesB: 17
    }
]);

export default PollStore;