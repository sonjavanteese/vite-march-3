<script>
	export let fade = false;
	export let open = false;
	import { onMount } from 'svelte';
	import { Button, Icon, Menu, Menuitem } from './material';
	import { home, menu, invertColors, moreVert } from '../assets/icons';
	import { theme } from './stores';
	let el;
	let legacy = true;
	const darkTheme = {
		'--color': '#eee',
		'--alternate': '#000',
		'--bg-color': '#303134',
		'--primary': '#3ea6ff',
		'--accent': '#ff6fab',
		'--divider': 'rgba(255,255,255,0.175)',
		'--bg-popover': '#3f3f3f',
		'--border': '#555',
		'--label': 'rgba(255,255,255,0.5)',
		'--bg-input-filled': 'rgba(255,255,255,0.1)',
		'--bg-app-bar': '#838383',
		'--bg-panel': '#434343',
		'--focus-color': 'rgba(62, 166, 255, 0.5)' // primary with alpha
	};
	$: if (el) {
		fade
			? (el.style.boxShadow = '0 1px 2px 0 rgba(0,0,0,.2), 0 2px 6px 2px rgba(0,0,0,.18)')
			: (el.style.boxShadow = '');
	}
	onMount(async () => {
		try {
			legacy = !(window.CSS && window.CSS.supports && window.CSS.supports('(--foo: red)'));
			let mql = window.matchMedia('(prefers-color-scheme: dark)');
			mql.matches && setTheme('dark');
		} catch (err) {} // eslint-disable-line
	});
	function setTheme(name) {
		name = name.replace(/\s/g, '').toLowerCase();
		$theme = name;
		$theme === 'dark'
			? Object.keys(darkTheme).map((key) => {
					document.documentElement.style.setProperty(key, darkTheme[key]);
			  })
			: document.documentElement.removeAttribute('style');
	}
</script>

<div class="app-bar" bind:this={el}>
	<Button
		icon
		id="hamburger"
		color="inherit"
		on:click={() => {
			open = true;
		}}
	>
		<Icon path={menu} />
	</Button>


	<div class="title">Simple Components</div>

	{#if !legacy}
		<Button icon on:click={() => setTheme($theme === 'dark' ? 'light' : 'dark')}>
			<Icon path={invertColors} />
		</Button>
	{/if}

	<Menu style="border-radius: 4px;" origin="top right" dx="4" dy="4">
		<span slot="activator" style="margin-right: 6px;display:block;">
			<Button icon color="inherit">
				<Icon path={moreVert} />
			</Button>
		</span>
		<Menuitem disabled={legacy} on:click={(e) => setTheme(e.target.textContent)}>
			{$theme === 'dark' ? 'Light' : 'Dark'}
		</Menuitem>
		<Menuitem
			on:click={() => (rightPanelVisible = true)}
			ripple={false}
			title="Item Menu withowt Ripple"
		>
			Help
		</Menuitem>
		<hr />
		<Menuitem
			on:click={() => {
				loginDialogVisible = true;
			}}
		>
			Login
		</Menuitem>
	</Menu>
</div>

<style>
	.icon {
		display: inline-block;
		width: 1em;
		height: 1em;
		stroke-width: 0;
		stroke: currentColor;
		fill: currentColor;
	}
	.app-bar {
		display: flex;
		align-items: center;
		min-height: 58px;
		color: #fff;
		background: var(--bg-app-bar);
		font-size: 18px;
		line-height: 1;
		min-width: inherit;
		padding: 0 4px 0 6px;
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		z-index: 20;
	}
	.title {
		flex: 1;
		margin-left: 0.5rem;
	}
</style>
