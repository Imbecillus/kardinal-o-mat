<div class="smoke-container">
  <div class="smoke"></div>
  <div class="smoke"></div>
  <div class="smoke"></div>
</div>

<style>

.smoke-container {
  position: relative;
  top: -17rem;
  left: -10rem;

  z-index: -1;
}

.smoke {

  position: absolute;

  background: radial-gradient(circle, rgba(255,255,255,1), rgba(255,255,255,0.25));
  border-radius: 50%;
}

.smoke:nth-child(1) {
  width: 5rem;
  height: 4rem;

  top: 12rem;
  right: 0rem;
}

.smoke:nth-child(2) {
  width: 10rem;
  height: 8rem;

  top: 7rem;
  right: 2rem;
}

.smoke:nth-child(3) {
  width: 15rem;
  height: 12rem;

  top: 0rem;
  right: 7rem;
}

</style>