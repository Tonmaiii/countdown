<script lang="ts">
    import * as times from './times'
</script>

<main>
    <h1>Select your school</h1>
    {#each Object.keys(times).sort((a, b) => a.localeCompare(b)) as school}
        <a href="/#/{school}">{school}</a>
    {/each}
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        font-size: 2rem;
    }

    h1 {
        margin: 1rem;
    }

    a {
        /* text-decoration: none; */
        color: inherit;
        font-size: 2rem;
    }
</style>
