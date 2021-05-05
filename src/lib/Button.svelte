<script lang="ts">
  export let type: "primary" | "secondary" = "primary";
  export let flat = false;
  export let inverse = false;
</script>

<button class={type} on:click class:flat class:inverse>
  <slot />
</button>

<style>
  button {
    border: none;
    cursor: pointer;
    padding: 10px 15px;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 3px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    letter-spacing: 1px;
  }

  .primary {
    background-color: #f73c00;
    color: #fff;
  }

  .secondary {
    background-color: #3fb27f;
    color: #fff;
  }

  .flat {
    box-shadow: none;
  }

  .primary.inverse {
    background-color: transparent;
    border: 2px solid #f73c00;
    color: #f73c00;
  }

  .secondary.inverse {
    background-color: transparent;
    border: 2px solid #3fb27f;
    color: #3fb27f;
  }
</style>
