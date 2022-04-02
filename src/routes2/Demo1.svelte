<script>
import Bg1 from './Bg1.svelte';
import { Game, Scene, Sprite, ArcadePhysics } from 'svelte-phaser'
import { artboardH, artboardW } from "../lib/stores";


let gid = 1;
let width = $artboardW;
let height = $artboardH;


let game;
$: window.game = game;
</script>
<h1>
Start.svelte
</h1>
<Game parent="canvas" width={width} height={height} physics={{ default: "arcade" }}>
<Scene key="main" preload={(scene) => {
    scene.load.image("bg1", "./images/sfhall10.jpg")
    scene.load.image('firefox', './images/android.png')
    }}>
<Bg1 />
    <Sprite texture="firefox" x={60} y={60} on:pointerdown={() => console.log("Got Mee!!!")}>
    <ArcadePhysics bounce={1} velocityX={80} velocityY={80} collideWorldBounds />
    </Sprite>
</Scene>
</Game>
