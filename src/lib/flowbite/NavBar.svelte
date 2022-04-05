<script>
	import { user } from '../stores';
  import IconMenu from "../../assets/svg1/menu.svelte";
  export let open = false;
  const toggle = () => {
      open = !open;
  };
</script>

<header>
  <nav class="text-white border-gray-200 pl-4 bg-gray-800">
    <div class="flex flex-wrap items-center mx-auto">
      <span class="flex items-center">
        <img on:click={toggle}
          src="./img/database.png"
          class="mr-3 h-8 h-8 cursor-pointer"
          alt="Flowbite Logo"
        />
        <span class="self-center text-xl px-2 font-semibold whitespace-nowrap dark:text-white">
          Nwp-App
        </span>
      </span>
      <span class="flex-grow">
      </span>
      <slot></slot>
      {#if $user}
        <button
          on:click={toggle}
          type="button"
          class="inline-flex items-center justify-center h-16 min-w-16 px-1"
          aria-expanded="false"
        >
        <IconMenu style="--icon-font-size: 48px" />
        </button>
      {:else}
        <span class="h-16 w-16"></span>
      {/if}
    </div>
  </nav>
</header>

