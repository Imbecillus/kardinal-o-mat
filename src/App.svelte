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

<footer>
  <hr>
  <p>Danke an Skelethorb für die Idee. Er ist der Größte!</p>
  <p>
    <a href="https://collegeofcardinalsreport.com/where-they-stand" target="_blank">Datenquelle</a> |
    <a href="https://github.com/Imbecillus/kardinal-o-mat" target="_blank">Github</a> |
    <a href="mailto:kardinal-o-mat@imbecillus.de">Kontakt</a>
  </p>
</footer>

<style>
  main {
    width: 100%;
  }

  h1 {
    font-size: 4rem;
    text-align: left;
  }

  footer {
    font-size: 0.6rem;
    opacity: .7;

    margin-top: 100px;

    width: 100%;

    hr {
      border-color: var(--col-purple);
      opacity: .25;
    }

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
</style>
