<script>
//   import IconClose from "../../assets/svg1/x.svelte";//   import ListGroup from "./ListGroup.svelte";//   import ListItem from "./ListItem.svelte";
  import BackDrop from './BackDrop.svelte';
  import { clickOutside } from "./clickOutside";
  export let open = false;
  export let navData = [];
  const handClickOut = () => {
    if (open) {
      open = false;
    }
  };
  const toggle = () => {
    open = !open;
  };
</script>

<aside use:clickOutside on:clickOutside={handClickOut} class="fixed top-0 left-0 bottom-0 z-30 bg-white w-64 transform {open ? 'translate-x-0' : '-translate-x-64'} transition transition-transform duration-500 delay-100">
  <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
     <ul class="space-y-2">
        {#each navData as {name, path, icon}}
        <li on:click={toggle}>
            <a href={path} class="flex items-center p-2 text-base font-normal text-gray-700 rounded-lg hover:bg-gray-100">
               <span class="flex-1 ml-3 whitespace-nowrap">{name}</span>
               <span class="inline-flex justify-center h-9 w-9 items-center border text-gray-500 bg-gray-200 border-gray-300 rounded-full ml-3">
                 <i class="gg-{icon}"></i>
               </span>
            </a>
         </li>
        {/each}
     </ul>
  </div>
  <div>
     <slot></slot>
  </div>
</aside>
{#if open}
   <BackDrop></BackDrop>
{/if}



<style>
   @import url('https://unpkg.com/css.gg/icons/css/home.css');
   @import url('https://unpkg.com/css.gg/icons/css/database.css');
   @import url('https://unpkg.com/css.gg/icons/css/user.css');
   @import url('https://unpkg.com/css.gg/icons/css/album.css');
   :root {
      -ggs: 14px;
   }
 
</style>

