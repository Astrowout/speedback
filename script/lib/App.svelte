<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
</script>

<main>
  <div class="spd-flex spd-bg-amber-600">
    <a href="https://svelte.dev" target="_blank" rel="noreferrer"> 
      <img src={svelteLogo} alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div>
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p>
    Click on the Vite and Svelte logos to learn more
  </p>
</main>
