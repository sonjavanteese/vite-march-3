<script>
    import {slide} from 'svelte/transition';
</script>

<section transition:slide>
    <slot name="topbar"></slot>
    <article {...$$restProps}>
        <slot></slot>
    </article>
</section>

<style>
    section {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        background-color: var(--app-body-bg, #ffffff);
        color: var(--app-body-color, #444444);
    }
    article {
        flex: 1;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
    }
</style>