<script lang="ts">
  import { nanoid } from "nanoid";
  import CreatePollForm from "./lib/CreatePollForm.svelte";
  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
  import PollList from "./lib/PollList.svelte";
  import Tabs from "./lib/Tabs.svelte";
  import type { Poll, Vote } from "./types";

  let tabs = ["Current Polls", "Add New Poll"];
  let activeTabIndex = 0;
  let polls: Poll[] = [
    {
      id: nanoid(5),
      question: "Python or JavaScript?",
      answerA: "Python",
      answerB: "JavaScript",
      votesA: 0,
      votesB: 100,
    },
  ];

  const changeTab = (e: CustomEvent<number>) => {
    activeTabIndex = e.detail;
  };

  const addPoll = ({ detail: newPoll }: CustomEvent<Poll>) => {
    polls = [newPoll, ...polls];
    activeTabIndex = 0;
  };

  const handleVote = ({ detail: votes }: CustomEvent<Vote>) => {
    polls = polls.map((poll) => {
      if (poll.id !== votes.pollId) {
        return poll;
      }

      if (votes.option === "A") {
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
    });
  };
</script>

<div class="app">
  <Header />
  <main>
    <Tabs {tabs} {activeTabIndex} on:changeTab={changeTab} />
    {#if activeTabIndex === 0}
      <PollList {polls} on:vote={handleVote} />
    {:else if activeTabIndex === 1}
      <CreatePollForm on:addPoll={addPoll} />
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
