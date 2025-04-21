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
  <span class="position">
    {cardinal?.position}
  </span>
  <span class="score">
    {Intl.NumberFormat('de-DE', {
      style: 'percent',
      maximumFractionDigits: 1
    }).format(score)}
  </span>
</li>

<style>
  li {
    display: block;
    position: relative;
  }

  .name {
    display: block;

    text-align: left;

    font-size: 2rem;
    font-weight: bold;
  }

  .position {
    display: block;
    text-align: left;

    font-style: italic;
  }

  .score {
    position: absolute;
    top: 0px;
    right: 0px;
  }
</style>