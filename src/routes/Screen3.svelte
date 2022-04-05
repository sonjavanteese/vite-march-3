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
      scene.load.spritesheet(
        'adventurer',
        './images/spritesheet_aiko.png',
        {
          frameWidth: 400,
          frameHeight: 400,
        }
      )
    }}
    create={(scene) => {
      scene.anims.create({
        key: 'idle',
        frames: scene.anims.generateFrameNumbers('adventurer', {
          start: 5,
          end: 19,
        }),
        frameRate: 10,
        repeat: -1,
      })
    }}
  >
    <Sprite x={width - width/2} y={height - 100} texture="adventurer" animation="idle" scale={0.5} />
  </Scene>
</Game>