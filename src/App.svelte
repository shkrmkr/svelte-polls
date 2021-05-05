<script lang="ts">
  import CreatePollForm from "./lib/CreatePollForm.svelte";
  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
  import PollList from "./lib/PollList.svelte";
  import Tabs from "./lib/Tabs.svelte";

  let tabs = ["Current Polls", "Add New Poll"];
  let activeTabIndex = 0;

  const changeTab = (e: CustomEvent<number>) => {
    activeTabIndex = e.detail;
  };

  const handleAddPoll = () => {
    activeTabIndex = 0;
  };
</script>

<div class="app">
  <Header />
  <main>
    <Tabs {tabs} {activeTabIndex} on:changeTab={changeTab} />
    {#if activeTabIndex === 0}
      <PollList />
    {:else if activeTabIndex === 1}
      <CreatePollForm on:add={handleAddPoll} />
    {/if}
  </main>
  <Footer />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    font-size: 1.5rem;
    max-width: 1000px;
    width: 90%;
    margin: 2rem auto;
  }
</style>
