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
  <div class="question-inner">
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
</div>

<style lang="css">
  .question {
    position: relative;

    background-color: var(--col-white);

    text-align: left;

    width: 100%;

    h3 {
      margin: 0;
    }
  }

  .question-inner {
    padding: 1rem 2rem;
  }

  .thesis {
    font-size: 2rem;
  }

  .answers {

    button {
      min-width: 180px;

      background-color: var(--col-red);
      color: var(--col-white);

      font-size: 1rem;

      border: none;
      padding: 5px;

      cursor: pointer;

      transition: all .2s;

      &:hover {
        background-color: var(--col-purple);
        color: var(--col-white);
      }
    }

  }

  .skip-thesis {
    background-color: inherit;

    position: absolute;
    bottom: 1rem;
    right: 1rem;

    border: none;

    cursor: pointer;
    text-decoration: underline;
    font-size: .8rem;

    &:hover {
      text-decoration: none;
    }
  }
</style>