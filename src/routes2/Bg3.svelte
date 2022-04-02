<script>
  import { Game, Scene, Sprite } from 'svelte-phaser';
  import { artboardH, artboardW } from '../lib/stores';
  let w = $artboardW;
  let h = 600;
</script>


<Sprite x={w - w/2} y={h - 200} texture="adventurer" animation="idle" scale={1} />

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