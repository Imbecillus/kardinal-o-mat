<script lang="ts">
    import type { Answer } from "./types";
  import Quiz from "./views/Quiz.svelte";
    import Results from "./views/Results.svelte";
  import Start from "./views/Start.svelte";

  let activeView: 'start' | 'quiz' | 'results' = $state('start');
  let answers: Answer[] = $state([]);
</script>

<main>
  <h1>Kardinal-O-Mat</h1>

  {#if activeView === 'start'}
    <Start onStart={() => {activeView = 'quiz'}}></Start>
  {:else if activeView === 'quiz'}
    <Quiz onFinished={(quizAnswers: Answer[]) => {
      answers = quizAnswers;
      activeView = 'results';
    }}></Quiz>
  {:else if activeView === 'results'}
    <Results
      userAnswers={answers}
    ></Results>
  {/if}
</main>

<style>
  main {
    width: 1200px;
  }
</style>
