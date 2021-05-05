<script lang="ts">
  import type { Poll } from "src/types";
  import PollDetails from "./PollDetails.svelte";

  export let polls: Poll[];
</script>

<div class="poll-list">
  {#each polls as poll (poll.id)}
    <PollDetails {poll} on:vote />
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media screen and (max-width: 700px) {
    .poll-list {
      grid-template-columns: 1fr;
    }
  }
</style>
