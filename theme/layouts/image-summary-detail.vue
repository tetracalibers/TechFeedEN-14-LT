<template>
  <div class="slidev-layout">
    <CornerCurves class="_bg-svg" />
    <div class="_image-summary-detail">
      <div class="_content">
        <div class="prose">
          <h1>{{ $attrs.heading }}</h1>
          <p>{{ $attrs.summary }}</p>
        </div>
        <div class="_details"><slot name="default" /></div>
      </div>
      <img :src="'/TechFeedEN-14-LT' + $attrs.media" :class="$attrs.no_shadow ? '' : 'shadow-lg'" />
    </div>
  </div>
</template>

<style scoped>
  ._bg-svg {
    @apply absolute bottom-0 right-0 w-full;
    transform: scale(-1, 1);
  }
  ._image-summary-detail {
    @apply grid grid-cols-2;
    width: 100%;
    height: 100%;
    gap: 1.5em;
    position: relative;
    z-index: 10;
  }
  ._details {
    font-size: 0.9em;
  }
  ._content {
    width: 100%;
    display: grid;
    height: 100%;
    align-content: space-evenly;
  }
  
  .prose > h1 {
    margin: 0;
  }
  
  ._image-summary-detail img {
    height: 90%;
    width: auto;
    justify-self: end;
    align-self: center;
  }
</style>