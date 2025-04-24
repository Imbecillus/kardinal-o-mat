<script lang="ts">
  import { CARDINAL_MAP } from "../data/cardinals";
  import CardinalResult from "../lib/CardinalResult.svelte";
  import { calculateSimilarityScore } from "../scoring";
  import type { Answer, CardinalId } from "../types";

  type Props = {
    userAnswers: Answer[];
  }

  const { userAnswers }: Props = $props();

  const cardinalScores: Map<CardinalId, number> = new Map();

  for (const cardinal of CARDINAL_MAP.keys()) {
    cardinalScores.set(cardinal, calculateSimilarityScore(userAnswers, cardinal));
  }

  const sortedCardinals = Array.from(CARDINAL_MAP.keys()).sort(
    (a: CardinalId, b: CardinalId) => (cardinalScores.get(b) ?? 0) - (cardinalScores.get(a) ?? 0)
  );
</script>

<div>
  <ul>
    {#each sortedCardinals as cardinal}
      <CardinalResult
        cardinal={cardinal}
        score={cardinalScores.get(cardinal) ?? 0}
      ></CardinalResult>
    {/each}
  </ul>
  <div>
    <p>
      Um die Antworten zu vergleichen, klicken Sie bitte
      <a href="https://collegeofcardinalsreport.com/where-they-stand/?_papabili=1" target="_blank">hier</a>.
    </p>
    <p>
      Für eine kritische Einordnung der Arbeit des <em>College of Cardinals Report</em> ist <a href="https://www.kirche-und-leben.de/artikel/konklave-papst-franziskus-nachfolger-kardinaele-kardinal-o-mat-internet-usa-hintergruende-kritik" target="_blank">
        dieser Artikel
      </a> der Zeitung <em>Kirche+Leben</em> zu empfehlen.
    </p>
  </div>
</div>

<style>
  ul {
    list-style-type: none;
    max-width: 800px;
    
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;

    padding-left: 0;
  }
</style>
