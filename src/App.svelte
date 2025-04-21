<script lang="ts">
    import Quiz from "./views/Quiz.svelte";
    import Start from "./views/Start.svelte";

  let activeView: 'start' | 'quiz' | 'results' = $state('start');
</script>

<main>
  <h1>Kardinal-O-Mat</h1>

  {#if activeView === 'start'}
    <Start onStart={() => {activeView = 'quiz'}}></Start>
  {:else if activeView === 'quiz'}
    <Quiz></Quiz>
  {/if}
</main>

<style>
</style>
