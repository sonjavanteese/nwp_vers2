<script>
   import { Icon, iconlist } from "$lib/nwp-icons/";
   import { page } from '$app/stores';
   let ico = $page.params.icon;
   $: console.log($page.params)
 </script>
 
 
 <section class="page-container">
  <nav class="flex items-center mb-4">
    <a href="/" class="text-blue-800 text-lg font-medium">Icon List</a>
    <span class="flex-grow"></span>
    <a href="/icons" class="text-blue-800 text-lg font-medium">Icon Libary</a>
  </nav>
  
   <h1 class="py-4 text-center border-b mb-8">Nwp Icon Details</h1>
 
<div class="py-4 space-y-4">
<div class="card">
  <div class="p-8" style="font-size: 12rem;"><Icon name={ico} /></div>
</div>

<div class="text-2xl font-semibold">Icon: {ico.toUpperCase()}</div>
<pre class="pre text-red-800"><code>&lt;Icon name={ico} /&gt;</code></pre>
<pre class="pre text-emerald-800">
&lt;svg class=&quot;icon icon-{ico}&quot;&gt;
  &lt;use xlink:href=&quot;#icon-{ico}&quot; /&gt;
&lt;/svg&gt;
</pre>
</div>
  

 </section>
 
 
 <style>
   .card {
     @apply flex flex-col px-4 py-4 shadow-xl items-center text-gray-600 border rounded-xl;
   }
 .pre {
   @apply rounded-xl text-xl font-semibold bg-white shadow border;
 }
 </style>
 