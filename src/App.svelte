<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Tabs from './shared/Tabs.svelte';
	import CreatePollForm from './components/CreatePollForm.svelte';
	import PollList from './components/PollList.svelte';

	// tabs
	let items = ['Current Polls','Add New Poll'];
	let activeItem = 'Current Polls';

	const tabChange = (e)=>{
		activeItem = e.detail;
	}

	const handleAddPoll = (e) =>{
		// const poll = e.detail;
		// polls = [poll,...polls];
		// console.log(polls);
		activeItem = 'Current Polls';
	}

	const handleVote = (e)=>{
		const {id,option} = e.detail;
		let copiedPolls = [...polls];

		let upVotedPoll = copiedPolls.find((poll) => poll.id == id );

		if(option === 'a'){
			upVotedPoll.voteA++;
		}

		if(option === 'b'){
			upVotedPoll.voteB++;
		}

		polls = copiedPolls;
	}
</script>
<Header/>
	<main>
		<Tabs {activeItem} {items} on:tabChange={tabChange}/>
		{#if activeItem === 'Current Polls'}
			<PollList on:vote={handleVote}/>
		{:else if activeItem === 'Add New Poll'}
			<CreatePollForm on:addPoll={ handleAddPoll }/>
		{/if}	
	</main>
<Footer/>
<style>
	main{
		max-width: 960px;
		margin: 40px auto;
	}
</style>