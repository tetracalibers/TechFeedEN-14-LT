<!-- global-top.vue -->

<template>
  <footer
    v-if="$slidev.themeConfigs.myLogo || $slidev.themeConfigs.twitter"
    class="absolute bottom-0 p-4 mt-auto flex items-center w-full text-primary dark:text-white z-10"
  >
    <div class="flex gap-4">
      <div class="mb-0 contents" v-if="$slidev.themeConfigs.myLogo">
        <a :href="$slidev.themeConfigs.myUrl" target="_blank" class="flex items-center gap-1"
          ><img :src="$slidev.themeConfigs.myLogo" class="h-8 ml-0" alt="{{ $slidev.themeConfigs.myName }}"
        /><span>{{ $slidev.themeConfigs.myName ?? '' }}</span></a>
      </div>
      <a class="flex items-center gap-1" v-if="$slidev.themeConfigs.twitter" :href="$slidev.themeConfigs.twitterUrl" target="_blank"
        ><logos-twitter />{{ $slidev.themeConfigs.twitter }}</a
      >
    </div>
  </footer>
</template>
