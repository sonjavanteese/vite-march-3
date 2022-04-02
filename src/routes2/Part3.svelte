<script>
    import { Game, Scene, Sprite, ArcadePhysics } from 'svelte-phaser'
  </script>
  
  <Game width={400} height={400} physics={{ default: "arcade" }}>
    <Scene key="main" preload={scene => scene.load.image('mushroom', '../public/images/mushroom.png')}>
      <Sprite texture="mushroom" x={150} y={150}>
        <ArcadePhysics bounce={1} velocityX={150} velocityY={120} collideWorldBounds />
      </Sprite>
    </Scene>
  </Game>