<template>
  <div class="slidev-layout">
    <CornerCurves class="absolute bottom-0 right-0 transform scale-x--100" />
    <div class="_image-summary-detail grid grid-cols-2">
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
  ._image-summary-detail {
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