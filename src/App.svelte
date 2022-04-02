<script>
  import Router, {link} from "svelte-spa-router";
  import NotFound from './routes2/NotFound.svelte';
  import Part1 from './routes2/Part1.svelte';
  import Part2 from './routes2/Part2.svelte';
  import Start from './routes2/Start.svelte';
  import Screen1 from "./routes/Screen1.svelte";
  import { artboardH, artboardW, _screenH, _screenW } from './lib/stores';
  import { onMount, tick } from "svelte";

  let height;
  let width;

  function renderEl () {
    $artboardH = height;
    $artboardW = width;
	}
  $: {
    $_screenH = height;
    $_screenW = width;
  }
  onMount(async () => {
    await tick();
    renderEl();
  })

</script>


<section class="w-full border-b">
  <nav class="flex items-center h-12">
    <a href="#/" class="nav-item">Start</a>
    <a href="#/g1" class="nav-item">Game1</a>
    <a href="#/g2" class="nav-item">Game2</a>
    <span class="flex-1"></span>
    <div class="nav-item">{height} / {width}</div>
  </nav>
</section>



<main 
  id="main" 
  bind:clientWidth={width} 
  bind:clientHeight={height} 
  class="flex-1 w-full">
  <Router routes={{'/': Start,'/g1': Screen1,'/g2': Part2,'*': NotFound}} />
</main>
<!-- <section class="border border-red-800 border-dotted" id="canvas" bind:clientWidth={width}></section> -->



<svelte:window on:resize|passive={renderEl} />


<style>

  .nav-item {
    @apply px-4 text-lg font-medium;
  }
  :global(#main canvas) {
    margin-top: auto;
  }
</style>