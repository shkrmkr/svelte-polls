<script lang="ts">
  import { nanoid } from "nanoid";
  import type { Poll, PollFormFields } from "src/types";
  import { createEventDispatcher } from "svelte";
  import Button from "./Button.svelte";

  const formFields: PollFormFields = { question: "", answerA: "", answerB: "" };
  let showErrors = false;
  const dispatch = createEventDispatcher<{ addPoll: Poll }>();

  $: errors = {
    question:
      formFields.question.length < 5
        ? "must be at least 5 characters long"
        : "",
    answerA: formFields.answerA.length < 1 ? "cannot be empty" : "",
    answerB: formFields.answerB.length < 1 ? "cannot be empty" : "",
  };

  $: isValid = Object.values(errors).every((value) => value === "");

  const handleSubmit = () => {
    showErrors = true;

    if (isValid) {
      dispatch("addPoll", {
        id: nanoid(5),
        votesA: 0,
        votesB: 0,
        ...formFields,
      });
    } else {
      console.log(errors);
    }
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-field" class:error={!!errors.question && showErrors}>
    <div class="label-group">
      <label for="question"> Question: </label>
      {#if showErrors}
        <span class="error-message">{errors.question}</span>
      {/if}
    </div>
    <input type="text" id="question" bind:value={formFields["question"]} />
  </div>
  <div class="form-field" class:error={!!errors.answerA && showErrors}>
    <div class="label-group">
      <label for="answerA"> Answer A: </label>
      {#if showErrors}
        <span class="error-message">{errors.answerA}</span>
      {/if}
    </div>
    <input type="text" id="answerA" bind:value={formFields["answerA"]} />
  </div>
  <div class="form-field" class:error={!!errors.answerB && showErrors}>
    <div class="label-group">
      <label for="answerB"> Answer B: </label>
      {#if showErrors}
        <span class="error-message">{errors.answerB}</span>
      {/if}
    </div>
    <input type="text" id="answerB" bind:value={formFields["answerB"]} />
  </div>

  <Button type="secondary" flat>Add Poll</Button>
</form>

<style>
  form {
    max-width: 40rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .form-field {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 3px;
  }

  .label-group {
    display: flex;
  }

  .label-group label {
    flex: 1;
  }

  .error input {
    border-color: #f73c00;
  }

  .error-message {
    color: #f73c00;
    font-size: 1.3rem;
    font-weight: bold;
  }
</style>
