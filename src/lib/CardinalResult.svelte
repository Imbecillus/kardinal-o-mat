<script lang="ts">
  import { CARDINAL_MAP } from "../data/cardinals";
  import type { CardinalId } from "../types";

  type Props = {
    cardinal: CardinalId;
    score: number;
  }

  const {cardinal: cardinalId, score}: Props = $props();

  const cardinal = $derived(CARDINAL_MAP.get(cardinalId));

</script>

<li>
  <span class="name">
    Kardinal {cardinal?.name}
  </span>
  <div class="subline">
    <span class="position">
      {cardinal?.position}
    </span>
    <span class="score">
      {Intl.NumberFormat('de-DE', {
        style: 'percent',
        maximumFractionDigits: 1
      }).format(score)}
    </span>
  </div>
  <div class="score-bar">
    <div 
      class="score-bar-value" 
      style={`width: ${score * 100}%`}
    ></div>
  </div>
</li>

<style>
  li {
    display: block;

    margin-bottom: 1.5rem;
  }

  .subline {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .name {
    display: block;

    text-align: left;

    font-size: 2rem;
    font-weight: bold;

    @media (max-width: 600px) {
      font-size: 2.5rem;
    }
  }

  .position {
    text-align: left;

    font-style: italic;

    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }

  .score-bar {
    width: 100%;
    height: 15px;
    background-color: var(--col-white);

    .score-bar-value {
      background-color: var(--col-red);
      height: 100%;
    }
  }
</style>