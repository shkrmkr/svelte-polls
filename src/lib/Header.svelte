<script lang="ts">
  import logo from "../assets/svelte.png";
</script>

<header>
  <img src={logo} alt="Logo" />
  <h1>Svelte Polls</h1>
</header>

<style>
  header {
    background: #f7f7f7;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
  }

  img {
    max-width: 5rem;
    margin-right: 1rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #555;
  }
</style>
