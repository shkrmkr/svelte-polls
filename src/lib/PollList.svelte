<script lang="ts">
  import { fade, scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { pollStore } from "../stores/poll.store";
  import PollDetails from "./PollDetails.svelte";
</script>

<div class="poll-list">
  {#each $pollStore as poll (poll.id)}
    <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <PollDetails {poll} />
    </div>
  {:else}
    <p>No polls yet :(</p>
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
