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
ところで、ブラウザの処理はCPUによって行われますが、CPUはレンダリングを専門に行うものではありません。

アニメーションでCPUに負荷がかかると、CPUが他に行うべきJavaScriptなどの処理が進まなくなってしまうことがあります。

そこで、一定の条件を満たすPaintLayerは、GPUにレンダリング処理を外注するようにします。

このような特別なレイヤーをCompositeLayer（合成レイヤー）と呼び、GPUに処理を外注することをハードウェアアクセラレーションと言います。
-->
