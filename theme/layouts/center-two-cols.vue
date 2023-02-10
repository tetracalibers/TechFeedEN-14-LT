<template>
  <div class="slidev-layout center h-full grid _stack">
    <CornerCurves class="absolute bottom-0 right-0 transform scale-x--100" />
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
  }
  
  ._col-item {
    align-self: center;
  }
</style>
