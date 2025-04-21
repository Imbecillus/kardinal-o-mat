<script lang="ts">

  import Question from "../lib/Question.svelte";
  import { THESES } from "../data/theses";
  import type { Answer } from "../types";

  type Props = {
    onFinished: (answers: Answer[]) => void;
  }

  const { onFinished }: Props = $props();

  const total = THESES.length;
  let index = $state(0);

  const ANSWERS: Answer[] = [];

  THESES.map(() => {
    ANSWERS.push(undefined);
  });

  const onAnswer = (value: Answer) => {
    ANSWERS[index] = value;

    if (index < ANSWERS.length - 1) {
      index++
    } else {
      onFinished(ANSWERS);
    }
  }

</script>

<div>
  <Question
    heading={THESES[index].heading}
    thesis={THESES[index].thesis}
    index={index + 1}
    total={total}
    onAnswer={onAnswer}
  ></Question>
</div>
