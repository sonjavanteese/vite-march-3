<script>
  import BackDrop from "./BackDrop.svelte";
  import { clickOutside } from "./clickOutside";
  import { fly } from "svelte/transition";
  export let component = null;
  export let open = false;
  export let titel = "Info Modal";
  export let type = "modal";
  const handClickOut = () => {
    if (open) {
      open = false;
    }
  };
  const close = () => {
    open = !open;
  };
</script>

<div
  tabindex="-1"
  aria-hidden="true"
  class="{open
    ? 'block'
    : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
>
  <div class="relative p-4 w-full max-w-2xl mx-auto h-full md:h-auto">
    <!-- Modal content -->
    {#if type === "modal"}
      <div
        transition:fly={{ duration: 600, y: -300 }}
        use:clickOutside
        on:clickOutside={handClickOut}
        class="relative bg-white rounded-lg shadow dark:bg-gray-700"
      >
        {#if component}
          <svelte:component this={component} bind:open={open} />
        {:else}
          <slot />
        {/if}

      </div>
    {:else}
      <div
        transition:fly={{ duration: 600, x: 200 }}
        use:clickOutside
        on:clickOutside={handClickOut}
        class="relative bg-white rounded-lg shadow dark:bg-gray-700"
      >
       {#if component}
          <svelte:component this={component} bind:open={open} />
        {:else}
          <slot />
        {/if}

      </div>
    {/if}
  </div>
</div>

{#if open}
  <BackDrop />
{/if}
