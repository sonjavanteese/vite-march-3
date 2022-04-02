<script>
import { onMount } from 'svelte';

  import { Game, Scene, Sprite } from 'svelte-phaser';
  import { artboardH, artboardW } from '../lib/stores';
  let width;
  let height;
  onMount(() => {
    width = $artboardW;
    height = $artboardH;
  })
</script>

<Sprite x={width - width/2} y={height - height/2} height={height} texture="bg1" />

<!-- 
<Sprite x={width - width/2} y={height - height/2} texture="adventurer" animation="idle" scale={1} />
 -->
<!--   <TileSprite
    depth={-1}
    x={0}
    y={0}
    width={3000}
    height={562}
    originX={0}
    originY={0}
    texture="bg2"
    {tilePositionX} /> -->