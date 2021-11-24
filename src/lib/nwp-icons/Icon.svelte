<script context="module">
  import { iconlist } from "./iconlist";
  import { iconlib } from "./iconlib";
  export { iconlist, iconlib };
</script>

<script>
  export let name = "home";
</script>

<svg class="icon icon-{name}">
  <use xlink:href="#icon-{name}" />
</svg>

<style global>
  .icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  }
</style>
