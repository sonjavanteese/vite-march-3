<script>
    import { TileSprite, onGameEvent } from 'svelte-phaser'
    import { artboardH, artboardW } from '../lib/stores';
    let ow = 3000;
    let oh = 562;
    let wx = $artboardW;
    let hy = $artboardH;
     let tilePositionX = 0
    onGameEvent('step', () => {
      tilePositionX -= 1
    })
    
</script>
  
  <TileSprite
    depth={-1}
    x={0}
    y={0}
    width={3000}
    height={562}
    originX={0}
    originY={0}
    texture="bg2"
    scale={1.2}
    {tilePositionX} />