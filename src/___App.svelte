<script>
	import App1 from './routes/App1.svelte'
	import Demo1 from './path/Demo1.svelte'
	import Demo2 from './path/Demo2.svelte'
	let step = 0;
</script>

<nav class="fixed inset-x-0 top-0 flex items-center justify-center py-2 bg-gray-600 text-white">
	<select type="select" class="bg-gray-600 text-white" bind:value={step}>
	<option value={0}>App 1</option>
	<option value={1}>App 2</option>
	<option value={2}>App 3</option>
	</select>
</nav>

{#if step == 0}
	<Demo1 />
{:else if  step == 1}
	 <Demo2 />
{:else}
<App1 />
{/if}
