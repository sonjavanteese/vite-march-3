<script>
  export let loader;
</script>

<section
  class="absolute transition duration-200 inset-0 z-30 flex items-center justify-center text-white bg-dark-200 bg-opacity-98"
>
  <article class="text-center">
    <div class="sk-cube-grid">
      <div class="sk-cube sk-cube1" />
      <div class="sk-cube sk-cube2" />
      <div class="sk-cube sk-cube3" />
      <div class="sk-cube sk-cube4" />
      <div class="sk-cube sk-cube5" />
      <div class="sk-cube sk-cube6" />
      <div class="sk-cube sk-cube7" />
      <div class="sk-cube sk-cube8" />
      <div class="sk-cube sk-cube9" />
    </div>
  </article>
</section>

<style>
  .sk-cube-grid {
    width: 60px;
    height: 60px;
    margin: 100px auto;
  }

  .sk-cube-grid .sk-cube {
    width: 33%;
    height: 33%;
    background-color: currentColor;
    float: left;
    -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
    animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
  }
  .sk-cube-grid .sk-cube1 {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  .sk-cube-grid .sk-cube2 {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  .sk-cube-grid .sk-cube3 {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }
  .sk-cube-grid .sk-cube4 {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }
  .sk-cube-grid .sk-cube5 {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  .sk-cube-grid .sk-cube6 {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  .sk-cube-grid .sk-cube7 {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }
  .sk-cube-grid .sk-cube8 {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }
  .sk-cube-grid .sk-cube9 {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }

  @-webkit-keyframes sk-cubeGridScaleDelay {
    0%,
    70%,
    100% {
      -webkit-transform: scale3D(1, 1, 1);
      transform: scale3D(1, 1, 1);
    }
    35% {
      -webkit-transform: scale3D(0, 0, 1);
      transform: scale3D(0, 0, 1);
    }
  }

  @keyframes sk-cubeGridScaleDelay {
    0%,
    70%,
    100% {
      -webkit-transform: scale3D(1, 1, 1);
      transform: scale3D(1, 1, 1);
    }
    35% {
      -webkit-transform: scale3D(0, 0, 1);
      transform: scale3D(0, 0, 1);
    }
  }

</style>
  <!--   {#if loader}
    <div
    style="border-top-color: transparent;"
    class="w-16 h-16 border-4 border-blue-400 border-dotted rounded-full animate-spin"
  ></div>
    {:else}
     
      <div class="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    {/if} -->