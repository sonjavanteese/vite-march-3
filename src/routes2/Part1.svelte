<script>
	import Bg1 from './Bg1.svelte';
  import Phaser from "phaser";
  import { onMount } from "svelte";
  import { Game, Scene, Text, Sprite } from "svelte-phaser";
  import { artboardH, artboardW } from "../lib/stores";

  let gid = 1;
  let width = $artboardW;
  let height = $artboardH;


  let game;
  $: window.game = game;
</script>

<Game parent="canvas" width={width} height={height}>
  <Scene
    sceneKey="main"
    preload={(scene) => {
      scene.load.image("bg1", "./images/sfhall10.jpg")
      scene.load.spritesheet("adventurer", "./images/aikoA.png", {
        frameWidth: 400,
        frameHeight: 400,
      })
    }}
    create={(scene) => {
      scene.anims.create({
        key: "idle",
        frames: scene.anims.generateFrameNumbers("adventurer", {
          start: 0,
          end: 5,
        }),
        frameRate: 5,
        repeat: -1,
      });
    }}
  >
  <Bg1 />
  <Sprite x={width - width/2} y={height - 200} texture="adventurer" animation="idle" scale={1} />

  </Scene>
</Game>
