<script>
	import { Game, Scene, Sprite } from 'svelte-phaser';
	import { _screenH, _screenW } from '../lib/stores';
	let width = $_screenW;
	let height = $_screenH;
	export let texture = 'bg1';
</script>

<Sprite x={width - width/2} y={height - height/2} height={height} texture={texture} />