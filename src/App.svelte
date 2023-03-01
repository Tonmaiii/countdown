<script lang="ts">
    import Router from 'svelte-spa-router'
    import Home from './Home.svelte'
    import Timer from './Timer.svelte'
</script>

<Router
    routes={{
        '/': Home,
        '/:school': Timer
    }}
/>
