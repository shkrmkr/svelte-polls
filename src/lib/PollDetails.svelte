<script lang="ts">
  import type { Poll, Vote } from "src/types";
  import { createEventDispatcher } from "svelte";
  import Card from "./Card.svelte";

  export let poll: Poll;

  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor((poll.votesA / totalVotes) * 100);
  $: percentB = Math.floor((poll.votesB / totalVotes) * 100);

  const dispatch = createEventDispatcher<{ vote: Vote }>();

  const handleVote = (vote: Vote) => dispatch("vote", vote);
</script>

<Card>
  <h3>{poll.question}</h3>
  <p>Total votes: {totalVotes}</p>

  <div
    class="answer"
    on:click={() => handleVote({ pollId: poll.id, option: "A" })}
  >
    <div class="percent percent--a" style="width: {percentA}%" />
    <span>{poll.answerA} ({poll.votesA})</span>
  </div>

  <div
    class="answer"
    on:click={() => handleVote({ pollId: poll.id, option: "B" })}
  >
    <div class="percent percent--b" style="width: {percentB}%" />
    <span>{poll.answerB} ({poll.votesB})</span>
  </div>
</Card>

<style>
  h3 {
    color: #000;
    font-weight: bold;
    font-size: 1.8rem;
  }

  p {
    margin: 1rem 0;
  }

  .answer {
    background-color: #fafafa;
    border-radius: 5px;
    margin-top: 1rem;
    padding: 1rem;
    position: relative;
    cursor: pointer;
    overflow: hidden;
  }

  .answer:hover {
    background-color: #fafafa66;
  }

  .percent {
    top: 0;
    left: 0;
    height: 100%;
    position: absolute;
  }

  .percent--a {
    background-color: rgba(217, 27, 66, 0.2);
    border-left: 4px solid rgba(217, 27, 66);
  }

  .percent--b {
    background-color: rgba(69, 196, 150, 0.2);
    border-left: 4px solid rgba(69, 196, 150);
  }
</style>
