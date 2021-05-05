<script lang="ts">
  import { tweened } from "svelte/motion";
  import { pollStore } from "../stores/poll.store";
  import type { Poll, Vote } from "../types";
  import Button from "./Button.svelte";
  import Card from "./Card.svelte";

  export let poll: Poll;

  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor((poll.votesA / totalVotes) * 100) || 0;
  $: percentB = Math.floor((poll.votesB / totalVotes) * 100) || 0;

  const tweenedPercentA = tweened(0);
  const tweenedPercentB = tweened(0);

  $: tweenedPercentA.set(percentA);
  $: tweenedPercentB.set(percentB);

  const handleVote = (vote: Vote) => {
    pollStore.update((prev) =>
      prev.map((poll) => {
        if (poll.id !== vote.pollId) {
          return poll;
        }

        if (vote.option === "A") {
          return {
            ...poll,
            votesA: poll.votesA + 1,
          };
        } else {
          return {
            ...poll,
            votesB: poll.votesB + 1,
          };
        }
      })
    );
  };

  const handleDelete = (pollId: Poll["id"]) => {
    pollStore.update((prev) => prev.filter((poll) => poll.id !== pollId));
  };
</script>

<Card>
  <h3>{poll.question}</h3>
  <p>Total votes: {totalVotes}</p>

  <div
    class="answer"
    on:click={() => handleVote({ pollId: poll.id, option: "A" })}
  >
    <div class="percent percent--a" style="width: {$tweenedPercentA}%" />
    <span>{poll.answerA} ({poll.votesA})</span>
  </div>

  <div
    class="answer"
    on:click={() => handleVote({ pollId: poll.id, option: "B" })}
  >
    <div class="percent percent--b" style="width: {$tweenedPercentB}%" />
    <span>{poll.answerB} ({poll.votesB})</span>
  </div>

  <div class="delete">
    <Button flat on:click={() => handleDelete(poll.id)}>Delte</Button>
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
    background-color: #f73c0022;
    border-left: 4px solid #f73c00;
  }

  .percent--b {
    background-color: #3fb27f22;
    border-left: 4px solid #3fb27f;
  }

  .delete {
    margin-top: 3rem;
    text-align: center;
  }
</style>
