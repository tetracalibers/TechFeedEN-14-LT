<template>
  <div class="_steps-container">
    <dl>
      <div class="_step">
        <dt>Layout</dt>
        <dd>要素のボックスを並べる<wbr />ラフ画段階</dd>
      </div>
      <div class="_step">
        <dt>Paint</dt>
        <dd>各ボックス内を<wbr />飾りつける段階</dd>
      </div>
      <div class="_step">
        <dt>Composite</dt>
        <dd>レイヤーを<wbr />組み合わせる段階</dd>
      </div>
    </dl>
  </div>
</template>

<style>
._steps-container {
  display: flex;
  translate: 0 -70%;
}
dl {
  display: flex;
  justify-content: center;
  align-items: end;
  counter-reset: step;
}
._step {
  display: flex;
  flex-direction: column;
  gap: 1em;
  flex-basis: 33%;
  align-items: center;
  padding: 1rem;
  position: relative;
}
._step::before {
  content: "";
  position: absolute;
  inset: 0;
  height: 100%;
  aspect-ratio: 1;
  background: aliceblue;
  border-radius: 50%;
  z-index: -1;
}
._step:nth-child(2) {
  position: relative;
  top: 70%;
}
._step:nth-child(3) {
  position: relative;
  top: 140%;
}
dt {
  font-size: 2rem;
  font-weight: 500;
  counter-increment: step;
}
dt::before {
  content: counter(step) ". ";
  font-size: 0.9em;
}
dd {
  font-size: 1.25rem;
  white-space: nowrap;
  line-height: 1.75;
  text-align: center;
}
</style>
