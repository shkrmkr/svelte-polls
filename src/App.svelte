<script lang="ts">
  let name = "Mario";
  let beltColor = "black";

  const handleClick = () => {
    beltColor = "orange";
  };
</script>

<main>
  <h1>Hello {name}</h1>
  <p>{beltColor} belt</p>
  <button on:click={handleClick}>Change Color</button>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.1;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
