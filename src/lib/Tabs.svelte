<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let tabs: string[];
  export let activeTabIndex: number;

  const dispatch = createEventDispatcher<{ changeTab: number }>();
</script>

<div class="tabs">
  <ul>
    {#each tabs as tab, index}
      <li
        class:active={index === activeTabIndex}
        on:click={() => dispatch("changeTab", index)}
      >
        {tab}
      </li>
    {/each}
  </ul>
</div>

<style>
  .tabs {
    margin-bottom: 4rem;
  }

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
  }

  li {
    padding: 1.5rem 2rem;
    font-size: 1.6rem;
    cursor: pointer;
  }

  .active {
    background-color: #f73c0011;
    color: #f73c00;
    border-bottom: 2px solid #f73c00;
    padding-bottom: 8px;
  }
</style>
