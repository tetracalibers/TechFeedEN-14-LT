<template>
  <div class="slidev-layout section">
    <CornerCurves class="absolute left-0 top-0 transform rotate-90" />
    <div class="flex flex-col justify-center h-full z-2 max-w-[750px] pl-5 mx-auto">
      <slot name="default" />
      <div data-quote-container class="mb-4 text-5xl relative">
        <slot name="quote" />
      </div>
      <hr class="w-48 border-t-5 border-vgreen mb-2" />
      <div class="italic text-xl font-extralight">
        <slot name="cite" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.slidev-layout {
  ::v-deep(h1) {
    @apply text-primary text-4xl leading-20 font-title font-extrabold;
  }
}

[data-quote-container] {
  @apply text-3xl light:text-vblue;
  color: rgba(52,73,94,1);
  font-weight: 300;
}
[data-quote-container]::before {
  /* prettier-ignore */
  content: '\„';
  @apply text-8xl absolute -bottom-3 -left-12 font-serif;
}
</style>