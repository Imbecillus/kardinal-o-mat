<script lang="ts">
  import { CARDINAL_MAP } from "../data/cardinals";
  import { OBSCURE_FIGURE_MAP } from "../data/obscureFigures";
  import { isCardinal } from "../scoring";
  import type { CardinalId, ObscureFigureId } from "../types";

  type Props = {
    cardinal: CardinalId|ObscureFigureId;
    score: number;
  }

  const {cardinal: cardinalId, score}: Props = $props();

  const isActualCardinal = $derived(isCardinal(cardinalId));

  const cardinal = $derived(
    isCardinal(cardinalId)
      ? CARDINAL_MAP.get(cardinalId)
      : OBSCURE_FIGURE_MAP.get(cardinalId)
  );

  const listItemClass = $derived(
    cardinalId === 'prevost'
      ? 'pope'
      : 'cardinal'
  )

</script>

<li class={listItemClass}>
  <span class="name">
    {isActualCardinal ? 'Kardinal' : ''}
    {cardinal?.name}
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

  .pope {
    .score-bar-value {
      background-color: var(--col-gold);
    }
  }
</style>