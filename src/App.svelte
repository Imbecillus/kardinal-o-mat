<script lang="ts">
  import { randomAdjective } from "./data/adjectives";
  import WhiteSmoke from "./lib/WhiteSmoke.svelte";
  import type { Answer } from "./types";
  import PreResults from "./views/PreResults.svelte";
  import Quiz from "./views/Quiz.svelte";
  import Results from "./views/Results.svelte";
  import Start from "./views/Start.svelte";

  const claim = `Das ${randomAdjective()} Original!`;
  console.log(claim);

  let activeView: 'start' | 'quiz' | 'pre_results' | 'results' = $state('start');
  let answers: Answer[] = $state([]);
  let showObscureFigures: boolean = $state(false);
</script>

<main>
  <h1>
    Kardinal-O-Mat
    <span class="claim">{claim}</span>
    <WhiteSmoke></WhiteSmoke>
  </h1>

  {#if activeView === 'start'}
    <Start onStart={() => {activeView = 'quiz'}}></Start>
  {:else if activeView === 'quiz'}
    <Quiz onFinished={(quizAnswers: Answer[]) => {
      answers = quizAnswers;
      activeView = 'pre_results';
    }}></Quiz>
  {:else if activeView === 'pre_results'}
    <PreResults onContinue={(selection: boolean) => {
      console.log(selection);
      showObscureFigures = selection;
      activeView = 'results';
    }}
    ></PreResults>
  {:else if activeView === 'results'}
    <Results
      showObscureFigures={showObscureFigures}
      userAnswers={answers}
    ></Results>
  {/if}
</main>

<footer>
  <hr>
  <p>Danke an Skelethorb für die Idee. Er ist der Größte!</p>
  <p>Danke auch an Nico für den Segen des SSL. Er ist ebenfalls sehr groß.</p>
  <p>
    <a href="https://collegeofcardinalsreport.com/where-they-stand" target="_blank">Datenquelle</a> |
    <a href="https://github.com/Imbecillus/kardinal-o-mat" target="_blank">Github</a> |
    <a href="mailto:kardinal-o-mat@imbecillus.de">Kontakt</a>
  </p>
</footer>

<style>
  main {
    width: 100%;
    text-align: left;
  }

  h1 {
    font-size: 4rem;
    text-align: left;

    position: relative;
    display: inline-block;
  }

  .claim {
    position: absolute;
    display: block;
    right: 0px;

    font-size: 1.5rem;
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
