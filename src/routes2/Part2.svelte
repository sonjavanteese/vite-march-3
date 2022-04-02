<script>
  import Bg2 from "./Bg2.svelte";
  import { onMount } from "svelte";
  import { Game, Scene, Sprite, Text } from "svelte-phaser";
  import fragment from "svelte-fragment";
  import { artboardH, artboardW } from "../lib/stores";

  let gid = 1;
  let width = $artboardW;
  let height = $artboardH;

  let game;
  $: window.game = game;
</script>

<Game parent="main" {width} {height}>
  <Scene
    key="main"
    preload={async (scene) => {
      scene.load.image("mushroom", "./images/mushroom.png");
      scene.load.image("mushroom2", "./images/mushroom2.png");
      scene.load.image("bg2", "./images/banner-in1.png");
      scene.load.image("bg1", "./images/sfhall10.jpg");
      // scene.load.spritesheet("adventurer", "../public/images/aikoA.png", {
      //   frameWidth: 400,
      //   frameHeight: 400,
      // });
      // because we're only loading 2 assets the loading screen
      //  <Sprite x={height - height/2} y={width - width/2}  height={$artboardH} texture="bg1" />
      // will go by pretty quick. try throttling your network speed
      // in your browser dev tools and then clicking one of the mushrooms
    }}
  >
    <template use:fragment slot="loading" let:progress>
      <Text
        x={100}
        y={100}
        text={`Loading... ${Math.round(progress * 100)}%`}
        color="white"
      />
    </template>
    <Bg2 />
    <Sprite
      x={136}
      y={200}
      texture="mushroom"
      on:pointerdown={() => window.location.reload()}
    />
    <Sprite
      x={136}
      y={200}
      texture="mushroom2"
      on:pointerdown={() => window.location.reload()}
    />
    <Text
      x={60}
      y={300}
      text="Did it load too fast? Click a mushroom to reload the game"
      wordWrap={300}
    />
  </Scene>
</Game>
