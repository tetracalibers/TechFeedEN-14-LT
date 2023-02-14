<template>
  <div class="bg-section slidev-layout new-section">
    <CornerCurves class="absolute left-0 top-0 transform rotate-90" />
    <div class="_container">
      <slot />
      <img :src="'/TechFeedEN-14-LT' + $attrs.image" />
    </div>
  </div>
</template>

<style scoped>
  ._container ::v-deep(h1) {
    @apply text-primary text-4xl leading-20 font-title font-extrabold;
    text-align: center;
    margin: 0;
  }

  ::v-deep(h1 > p) {
    @apply mt-4 opacity-100;
  }

._container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  gap: 1em;
}

._container img {
  height: 80%;
  width: auto;
  object-fit: contain;
}
</style>