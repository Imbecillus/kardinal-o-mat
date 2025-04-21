<script lang="ts">
    import type { Answer } from "../types";

  type Props = {
    index: number;
    total: number;

    heading: string;
    thesis: string;

    onAnswer: (value: Answer) => void;
  }

  const { index, total, heading, thesis, onAnswer }: Props = $props();
</script>

<div class="question">
  <h3>
    {index}/{total}
    {heading}
  </h3>
  <p class="thesis">
    {thesis}
  </p>
  <div class="answers">
    <button onclick={() => { onAnswer(1) }}>stimme zu</button>
    <button onclick={() => { onAnswer(0) }}>neutral</button>
    <button onclick={() => { onAnswer(-1) }}>stimme nicht zu</button>
  </div>
  <button onclick={() => { onAnswer(undefined) }} class="skip-thesis">These überspringen</button>
</div>

<style lang="css">
  .question {
    position: relative;

    background-color: var(--col-white);

    padding: 10px 55px 10px 55px;

    text-align: left;

    width: 100%;

    h3 {
      margin: 0;
    }
  }

  .thesis {
    font-size: 2rem;
  }

  .answers {

    button {
      min-width: 180px;

      background-color: var(--col-orange);

      font-size: 1rem;

      border: none;
      padding: 5px;

      cursor: pointer;

      transition: all .2s;

      &:hover {
        background-color: var(--col-black);
        color: var(--col-white);
      }
    }

  }

  .skip-thesis {
    background-color: inherit;

    position: absolute;
    bottom: 10px;
    right: 10px;

    border: none;

    cursor: pointer;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
</style>