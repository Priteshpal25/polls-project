<script>
    import { createEventDispatcher } from 'svelte';
    import Button from '../shared/Button.svelte';
    import PollStore from '../stores/PollStore';
    let fields = { question : '', answerA : '', answerB : ''};
    let errors = { question : '', answerA : '', answerB : ''};
    let valid = false;

    const disptach = createEventDispatcher();
    const submitHandler = () =>{
        valid = true;

        // question validation
        if(fields.question.trim().length < 5 ){
            valid = false;
            errors.question = 'Question must be at least 5 characters long';
        }else{
            errors.question = '';
        }

        // answer A validation
        if(fields.answerA.trim().length < 1){
            valid = false;
            errors.answerA = 'Answer A cannot be empty';
        }else{
            errors.answerA = '';
        }

        // answer B validation
        if(fields.answerB.trim().length < 1){
            valid = false;
            errors.answerB = 'Answer B cannot be empty';
        }else{
            errors.answerB = '';
        }

        if(valid){
            let poll = { ...fields, voteA : 0, voteB: 0 , id: Math.random() };
            // save poll to store
            PollStore.update(currentPolls =>{
                return [poll,...currentPolls];
            })
            disptach('addPoll');
        }
    }
</script>

<form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <label for="question">Poll Question : </label>
        <input type="text" class:inputError={errors.question} id="question" bind:value={fields.question} autocomplete="false">
        <div class="error">{ errors.question }</div>
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A : </label>
        <input type="text" class:inputError={errors.answerA} id="answer-a" bind:value={fields.answerA} autocomplete="false">
        <div class="error">{ errors.answerA }</div>
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B : </label>
        <input type="text" class:inputError={errors.answerB} id="answer-b" bind:value={fields.answerB} autocomplete="false">
        <div class="error">{ errors.answerB }</div>
    </div>
    <Button type='secondary' flat={true} inverse={true}>
        Add Poll
    </Button>
</form>

<style>
    form{
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }
    .form-field{
        margin: 18px auto;
        
    }
    input{
        width: 100%;
        border-radius: 6px;
    }
    label{
        margin: 10px auto;
        text-align: left;
    }
    .error{
        font-weight: 200;
        font-size: 12px;
        color:  #d91b42;
        text-align: left;
    }
    .inputError{
        border-color:  #d91b42;
    }
</style>