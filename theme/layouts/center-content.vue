<template>
  <div class="slidev-layout center h-full grid place-content-center" :class="{ grid: $attrs.center }">
    <CornerCurves class="absolute bottom-0 right-0 transform scale-x--100" />
    <div class="my-auto z-10 relative flex flex-col _stack">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  ._stack {
    gap: 0.25em;
  }

  ::v-deep(h1) {
    @apply text-primary text-4xl leading-20 mb-0 font-title font-extrabold;
    text-align: center;
  }

  ::v-deep(h1 > p) {
    @apply mt-4 opacity-100;
  }
  
  ::v-deep(._stack p) {
    text-align: center;
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }
</style>