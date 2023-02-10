<template>
  <div class="slidev-layout">
    <slot name="default" />
    <div class="ly-TwoColumn">
      <img :src="$attrs.before" class="rounded-lg shadow-lg object-cover z-10" />  
      <img :src="$attrs.after" class="rounded-lg shadow-lg object-cover z-10" />
    </div>
  </div>
</template>

<style>
  .slidev-layout {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  
  /* h1 {
    margin: 0 !important;
    text-align: center;
  }
   */
  .ly-TwoColumn {
    display: flex;
    gap: 1em;
    height: 100%;
    width: 100%;
    justify-content: space-evenly;
  }
  
  /* img {
    width: auto !important;
    height: 90% !important;
  } */
</style>