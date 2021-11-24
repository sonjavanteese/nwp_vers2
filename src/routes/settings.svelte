<script>
  import { iconlist } from "$lib/header/icons.js";
  export let name = "Settings";
</script>

<section class="page-container">
  <h1>Welcome to SvelteKit</h1>
  <h2>{name}</h2>
  <p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
  </p>
  <div>
    {#each iconlist as icon}
      <div class="p-4 shadow mb-4 text-4xl">
        <svg class="icon nwp-{icon}"><use xlink:href="#nwp-{icon}" /></svg>
        <span class="name text-base ml-2"> nwp-{icon}</span>
      </div>
    {/each}
  </div>
</section>

<style global>
  .icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  }

  /* ==========================================
Single-colored icons can be modified like so:
.nwp-name {
  font-size: 32px;
  color: red;
}
========================================== */
</style>
