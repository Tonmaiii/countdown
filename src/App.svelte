<script lang="ts">
    import * as times from './times'
    import { display } from './util'

    let s: string
    const update = () => {
        requestAnimationFrame(update)
        s = display(times.cuds)
    }
    requestAnimationFrame(update)
</script>

<main>
    <h1>{s}</h1>
</main>

<style>
    main {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    h1 {
        font-size: 25vw;
        white-space: nowrap;
        margin: 0;
    }
</style>
