<script>
	import Background from "./Background.svelte";
  import Phaser from "phaser";
  import { onMount } from "svelte";
  import { Game, Scene, Text, Sprite } from "svelte-phaser";
  import { _screenH, _screenW } from "../lib/stores";
  let width = $_screenW;
  let height = $_screenH;


  let game;
  $: window.game = game;
</script>


<Game parent="main" width={width} height={height}>
  <Scene
    sceneKey="main"
    preload={(scene) => {
      scene.load.image("background1", "./images/bg_img6.png")
      scene.load.spritesheet("aikoA", "./images/aikoB.png", {
        frameWidth: 400,
        frameHeight: 400,
      })
    }}
    create={(scene) => {
      scene.anims.create({
        key: "idle",
        frames: scene.anims.generateFrameNumbers("aikoA", {
          start: 0,
          end: 12,
        }),
        frameRate: 2.5,
        repeat: -1,
      });
    }}
  >
  <Background texture="background1" />
  <Sprite x={width - width/2} y={height - height/2} texture="aikoA" animation="idle" scale={1.2} />
  </Scene>
</Game>

<div class="position absolute top-0 w-full h-full" id="canvas"></div>