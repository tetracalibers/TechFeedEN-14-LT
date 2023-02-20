---
layout: quote
---

# ハードウェアアクセラレーションの未来

<template v-slot:quote>
While the current CSS properties that are hardware-accelerated by default only include <span class="_hdwacc-now">opacity</span>, <span class="_hdwacc-now">filter</span>, and <span class="_hdwacc-now">transform</span> for <span class="_word-now">now</span>, <span class="_hdwacc-will">background-color</span> and <span class="_hdwacc-will">clip-path</span> <span class="_word-will">will</span> soon join the list.
</template>

<template v-slot:cite>
<a href="https://developer.chrome.com/blog/hardware-accelerated-animations/">Chromium - February 22, 2021</a>
</template>

<style>
  [class^=_hdwacc-] {
    font-weight: bold;
  }
  ._hdwacc-now, ._word-now {
    color: #89CFFD;
  }
  ._hdwacc-will, ._word-will {
    color: #FF8AAE;
  }
</style>

<!--
さて、現時点では、opacityとtransformだけでアニメーションを実装することが推奨されていますが、Chromiumは近い将来、新たにbackground-colorとclip-pathもハードウェアアクセラレーションの対象に追加するという声明を出しています。

background-colorはtransform, opacityに次いでアニメーションでよく使われているプロパティで、clip-pathはアニメーションの幅をグッと広げるものです。

最後に、clip-pathによるアニメーション実装の考え方を簡単に紹介したいと思います。
-->