<script>
	import Background from "./Background.svelte";
  import {push} from "svelte-spa-router";
  import Phaser from "phaser";
  import { onMount } from "svelte";
  import { Game, Scene, Text, Sprite } from "svelte-phaser";
  import { _screenH, _screenW } from "../lib/stores";
  import fragment from 'svelte-fragment'
  let width = $_screenW;
  let height = $_screenH;
  const handClick = () => {
    push("/g3")
  }

  let game;
  $: window.game = game;
  
</script>



<section id="screen1" class="absolute inset-0">
 <Game parent="screen1" width={400} height={400}>
  <Scene
    key="main"
    preload={async (scene) => {
      scene.load.image('mushroom', './images/playstation-circle-icon.png')
      scene.load.image('mushroom2', './images/playstation-cross-icon.png')
      scene.load.spritesheet(
        'adventurer',
        './images/spritesheet_aiko.png',
        {
          frameWidth: 400,
          frameHeight: 400,
        }
      )
      scene.load.spritesheet(
        'genesis',
        './images/spritesheet_gen.png',
        {
          frameWidth: 400,
          frameHeight: 400,
        }
      )
    }}
  >
    <template use:fragment slot="loading" let:progress>
      <Text
      x={100}
      y={100}
        text={`Loading... ${Math.round(progress * 100)}%`}
        color="white" />
    </template>

    <Sprite x={136} y={200} texture="mushroom" on:pointerdown={handClick}/>
      <Sprite x={264} y={200} texture="mushroom2" on:pointerdown={handClick}/>
      <Text x={60} y={300} text="Did it load too fast? Click a mushroom to reload the game" wordWrap={300} />
  </Scene>
</Game> 
</section>
