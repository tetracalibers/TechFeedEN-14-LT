---
layout: center-content
---

# ハードウェアアクセラレーション

次のようなPaintLayerを**CompositeLayerに昇格させ、GPUに処理を委譲する**

- 3Dの`transform`（Z指定、`perspective`など）
- `backface-visibility: hidden;`
- `filter`, `backdrop-filter`
- `transform`、`opacity`（アニメーション中のみ）

<div class="text-end">etc.（ブラウザによって差異あり）</div>

<!--
ところで、ここまで紹介した処理のほとんどは、CPUによって処理されます。

しかし、CPUはレンダリングを専門に行うものではありません。

アニメーションなどでCPUに負荷がかかると、CPUが行うべきJavaScriptなどの他の処理が進まなくなってしまうことがあります。

そこで、一定の条件を満たすPaintLayerは、GPUにレンダリング処理を外注するようにします。

このような特別なレイヤーをCompositeLayer（合成レイヤー）と呼び、GPUに処理を外注することをハードウェアアクセラレーションと言います。
-->

---
layout: image-main
image: /MakeLayer_forTransform.png
---

# レイヤーに切り出して…

<!--
例えば、transformをアニメーションさせた場合、一時的に合成レイヤーが生成されます。

まず、translateさせたい要素だけを別のレイヤーに書き出し、それをGPUに送信します。
-->

---
layout: image-main
image: /CompositeLayer_forTransform.png
---

# レイヤーをずらして合成する

<!--
レイヤーには移動させる要素しか描画されておらず、そのほかの部分は半透明です。

なので、レイヤーごとちょっとずらして重ね合わせるだけで移動したように見せることができます。透明フィルムを上から貼り付けるようなイメージです。

ここでは、別レイヤーに書き出すときにしかペイント処理が発生していません。
-->

---
layout: image-summary-detail
media: /Layout_ChangePosition.png
heading: もしLayoutを動かすと…
summary: 周囲の要素を壊してゴリゴリ進む
---

`translate`ではなく、`top`や`left`を動かした場合…

- Layoutやり直し
- Paintやり直し（しかも周辺の要素も描き直し）
- 壊れた部分がGPUで管理している部分なら、描き直したレイヤーをGPUに再送信

ゴジラが建物をなぎ倒しながら進んでいくイメージ（？）

<!--
仮に、transformではなく、topやleftをtransitionさせると、Layout自体が壊れてしまいます。

とはいえ、画面全体のレイアウトをやり直すわけではなく、ブラウザは影響範囲をチェックし、再計算は壊れた箇所だけにとどめようとしますが、それでもペイント処理は広範囲に及びます。

topやleftよりtransformの方がアニメーションで優れていると言われるのは、既に描いたものを壊して描き直すことなく再利用して、レイヤーをうまく重ね合わせるだけで済むからです。
-->

---
layout: center-content
---

# レイヤーは画像

**レイヤーの合成処理は軽いが、レイヤーの存在自体は重い**

- 少なくとも1ピクセルごとに、赤、緑、青、透明度の4つの情報を保持する
- レイヤーが増えるほど、その枚数分メモリを使う
- レイヤーに書き出された範囲が大きい（＝画像サイズが大きい）と、<br />GPUに送信する処理も重くなる

iOS ChromeはむしろGPU処理で不安定になることもあった
（[2023年1月に修正](https://bugs.webkit.org/show_bug.cgi?id=228333)）


<!--
レイヤーの合成だけで済ませることで、処理は確かに軽くなりますが、レイヤーの存在自体は非常に重く、メモリを大量に消費するものです。

レイヤーを構成する1ピクセルごとに、色を表す赤、緑、青、透明度の4つの情報を格納するために4バイト。

アニメーションがかくつくときには、わざと3Dの指定を入れたり、will-changeプロパティを指定することで、レイヤーを無理やり生成させる手法も使われていますが、スマートフォンではむしろ負荷が大きくなるリスクがあります。

iOS Chromeでは、GPU処理を伴うtransform、opacityなどをtransitionさせたときに、フレームレートが落ちて瞬時にアニメーション終了後の表示になってしまうバグに遭遇します。
-->

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
現時点では、ハードウェアアクセラレーションの恩恵を受けられるプロパティは少なく、opacityとtransformだけでアニメーションを実装することが推奨されていますが、Chromiumは近い将来、新たにbackground-colorとclip-pathもハードウェアアクセラレーションの対象に追加するという声明を出しています。

background-colorはtransform, opacityに次いでアニメーションでよく使われているプロパティで、clip-pathはアニメーションの幅をグッと広げるものです。

最後に、clip-pathによるアニメーション実装の考え方を簡単に紹介したいと思います。
-->