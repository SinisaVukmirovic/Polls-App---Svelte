// introdustion to stores in svelte
// --------------------------------

import { writable } from 'svelte/store';

// creating writeable store with some initial data
const PollStore = writable([
    {
        id: 1,
        question: 'JavaScript or Python?',
        answerA: 'JavaScript',
        answerB: 'Python',
        votesA: 17,
        votesB: 8
    },
]);

export default PollStore;