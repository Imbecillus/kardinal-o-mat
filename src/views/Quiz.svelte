<script lang="ts">

  import Question from "../lib/Question.svelte";

  import { THESES } from "../data/theses";
    import type { Answer } from "../types";

  const total = THESES.length;
  let index = $state(0);

  const ANSWERS: Answer[] = [];

  THESES.map(() => {
    ANSWERS.push(undefined);
  });

  const onAnswer = (value: Answer) => {
    ANSWERS[index] = value;
    console.log(ANSWERS);

    if (index < ANSWERS.length - 1) {
      index++
    } else {
      // TODO: Results
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
