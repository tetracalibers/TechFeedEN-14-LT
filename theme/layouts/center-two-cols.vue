<template>
  <div class="slidev-layout center h-full grid _stack">
    <CornerCurves class="_bg-svg" />
    <h1><slot name="title" /></h1>
    <div class="grid grid-cols-2 gap-16 place-content-center">
      <div class="_col-item">
        <slot name="default" />
      </div>
      <div class="_col-item">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
  ._bg-svg {
    @apply absolute bottom-0 right-0 w-full;
    transform: scale(-1, 1);
  }
  ._stack > h1 {
    margin: 0;
  }
  
  ._stack {
    justify-content: space-evenly;
  }
  
  ._stack > * {
    align-self: center;
  }
  
  ::v-deep(pre) {
    overflow: auto !important;
    line-height: 1.5;
  }
  
  ._col-item {
    align-self: center;
  }
</style>
