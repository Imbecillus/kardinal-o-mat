<script lang="ts">
  type Props = {
    onStart: () => void;
  }

  const { onStart }: Props = $props();
</script>

<div>
  <div class="start-button-container">
    <button class="start" onclick={onStart}>
      Start
    </button>
  </div>

  <div>
    <p>
      Der <em>College of Cardinals Report</em> hat die <a href="https://collegeofcardinalsreport.com/where-they-stand/?_papabili=1" target="_blank">
        Positionen der aussichtsreichsten Kardinäle für die nächste Papstwahl</a>
      zusammengetragen. Diese Webseite bereitet diese Positionen nach dem Vorbild des <a href="https://www.wahl-o-mat.de/" target="_blank">Wahl-O-Mat</a> auf.
    </p>
    <p>
      Der Kardinal-O-Mat ist keine Wahlempfehlung. Die Chancen stehen ohnehin nicht sehr gut, dass Sie wahlberechtigt sind. :(
    </p>
    <p>
      Für eine kritische Einordnung der Arbeit des <em>College of Cardinals Report</em> ist <a href="https://www.kirche-und-leben.de/artikel/konklave-papst-franziskus-nachfolger-kardinaele-kardinal-o-mat-internet-usa-hintergruende-kritik" target="_blank">
        dieser Artikel
      </a> der Zeitung <em>Kirche+Leben</em> zu empfehlen.
    </p>
  </div>
</div>

<style>
  .start-button-container {
    text-align: right;
  }

  .start {
    background-color: var(--col-white);
    border: none;
    cursor: pointer;
    font-size: 2rem;
    min-width: 270px;

    padding: 10px;

    transition: all .2s;

    &:hover {
      background-color: var(--col-purple);
      color: var(--col-white);
    }
  }

  p {
    text-align: left;

    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
</style>