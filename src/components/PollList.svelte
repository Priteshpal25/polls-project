<script>
    import { onDestroy, onMount } from 'svelte';

    import PollStore from '../stores/PollStore.js';
    import PollDetails  from './PollDetail.svelte';
    // export let polls = [];
    //way of unsubscribing
    // const unsub =  PollStore.subscribe(data=>{
    //     polls = data;
    // });

    // onMount
    // onMount(() =>{
    //     // can call db and fetch data
    //     console.log('mounted');
    // });
    // onDestroy
    // onDestroy(()=>{
    //     // unsubscribe to any subscription
    //     console.log('destroyed');
    //     unsub();
    // });

</script>

<div class="poll-list">
    <!-- {#each polls as poll (poll.id)} -->
    {#each $PollStore as poll (poll.id)}
        <div>
            <PollDetails {poll} on:vote/>
        </div>
    {/each}
</div>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>