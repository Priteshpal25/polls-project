import { writable } from 'svelte/store';

const PollStore = writable( [
    {
        id : 1,
        question : 'Python or JavaScript ?',
        answerA : 'Python',
        answerB : 'JavaScript',
        voteA : 10,
        voteB : 12
    }
]);

export default PollStore;
