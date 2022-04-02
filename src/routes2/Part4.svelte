<script>
  import Phaser from 'phaser'
  import { Game, Scene, Text, Sprite } from 'svelte-phaser'
  import { artboardH, artboardW } from '../lib/stores';
  let gid = 1;
</script>


{#if gid == 0}
<Game width={800} height={600} scale={{ autoCenter: Phaser.Scale.CENTER_BOTH }}>
  <Scene key="main">
    <Text x={330} y={250} text="svelte-phaser" color="white" />
  </Scene>
</Game>
{:else}
<Game width={400} height={400}>
  <Scene
    sceneKey="main"
    preload={(scene) => {
      scene.load.spritesheet(
        'adventurer',
        '../public/images/aikoA.png',
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
          start: 0,
          end: 5,
        }),
        frameRate: 5,
        repeat: -1,
      })
    }}
  >
    <Sprite x={200} y={200} texture="adventurer" animation="idle" scale={1} />
  </Scene>
</Game>
{/if}