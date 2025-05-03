<script lang="ts">

  type Props = {
    onContinue: (showObscureFigures: boolean) => void;
  }

  const { onContinue }: Props = $props();

  let showObscureFigures: boolean = $state(false);

  const onClickButton = () => {
    onContinue(showObscureFigures);
  }

</script>

<div>
  <p>
    <strong>Vor der Auswertung</strong>
  </p>
  <p>
    Der Kardinal-O-Mat ist dafür kritisiert worden, dass sich in der Ergebnismenge einige "obskure Gestalten"
    befänden, wodurch der Gesamteindruck verzerrt erscheine.
  </p>
  <p>
    Um dies auszugleichen und auf gar keinen Fall den Eindruck aufkommen zu lassen, dass es sich hierbei um
    ein seriöses Informationsangebot handelt, können Sie optional weitere, noch obskurere Gestalten
    in die Auswertung hinzufügen.
  </p>
  <div class="checkbox-container">
    <label for="show-obscure">
      <input id="show-obscure" type="checkbox" bind:checked={showObscureFigures}>
      Obskure Gestalten einbeziehen
    </label>
  </div>
  <div class="button-container">
    <button onclick={onClickButton}>
      Ergebnis anzeigen
    </button>
  </div>
</div>

<style lang="css">
  .checkbox-container {
    margin-left: 1rem;
  }

  .button-container {
    text-align: right;
  }

  button {
    background-color: var(--col-white);
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    min-width: 150px;

    padding: 10px;

    transition: all .2s;

    &:hover {
      background-color: var(--col-purple);
      color: var(--col-white);
    }
  }
</style>
