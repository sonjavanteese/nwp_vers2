 <script>
    import '../app.css'
    import {iconlib} from '$lib/header/icons'
    import {fade} from 'svelte/transition';
    import Header from '$lib/header/Header.svelte';
    import { page } from '$app/stores';
 </script>
<div class="w-0 h-0">
{@html iconlib}
</div> 
<Header />
{#key $page.path}
  <main out:fade={{duration: 200}} in:fade={{duration: 400, delay: 220}}>
  <slot />
  </main>  
{/key}

<footer class="px-4 py-2 text-center">{$page.path === '/' ? `/start` : $page.path}</footer>
<style windi:preflights:global windi:safelist:global global>
    :root {
      --font-mono: 'Fira Mono', monospace;
      --pure-white: #ffffff;
      --primary-color: #b9c6d2;
      --secondary-color: #d0dde9;
      --tertiary-color: #edf0f8;
      --accent-color: #ff3e00;
      --heading-color: rgba(0, 0, 0, 0.7);
      --text-color: #444444;
      --background-without-opacity: rgba(255, 255, 255, 0.7);
      --column-width: 42rem;
      --column-margin-top: 4rem;
      --app-body-color: #424656;
      --app-body-bg: #FFFFFF;
      --app-bar-color: #E0E0E0;
      --app-bar-bg: #2172D2;
      --app-bar-border: 1px solid #dddddd;
      --app-bar-item-h: 56px;
      --app-bar-item-w: 48px;
      --column-width: 680px;
      --column-margin-top: 1rem;
      --column-padding: 1rem;
    }

h1,
h2,
h3,
h4,
h5 {
  @apply text-5xl mt-2 mb-6 leading-tight font-heading;
}

h1 {
  @apply text-6xl;
}

h2 {
  @apply text-5xl;
}

h3 {
  @apply text-4xl;
}

h4 {
  @apply text-3xl;
}

p {
  @apply text-xl mb-2 text-gray-500 leading-relaxed;
}

.lead {
  @apply text-2xl;
}
.select {
  @apply appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none;
}
.input {
  @apply appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none;
}
.label {
  @apply block mb-2 text-xs text-gray-700 uppercase tracking-wide font-bold;
}
.input-field {
  @apply appearance-none block w-full py-3 px-4 text-gray-400 bg-white border border-gray-200 rounded focus:border-gray-200 focus:outline-none;
}
.button {
  @apply inline-block w-full py-4 px-8 leading-none text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded shadow;
}
.button[disabled] {
  @apply  text-gray-400 bg-gray-200 hover:bg-gray-200 shadow-none cursor-not-allowed;
}

.page-container {
    @apply w-full max-w-lg mx-auto px-4 py-4;
}
</style>
