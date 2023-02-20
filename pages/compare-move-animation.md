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
レイヤーにはtranslateさせる要素しか描画されておらず、そのほかの部分は透明です。

なので、レイヤーごとちょっとずらして重ね合わせるだけで移動したように見せることができます。

透明フィルムを上から貼り付けるようなイメージです。
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

ブラウザは影響範囲をチェックし、再レンダリングは壊れた箇所だけにとどめようとしますが、それでもペイント処理は広範囲に及びます。
-->

---
layout: center-content
---

# top / transform = 18.36...

<CompareAnimation :data="[
  { condition: 'top', layout: 1327, paint: 2753, composite: 1080 }, 
  { condition: 'transform', layout: 0, paint: 107, composite: 174 }
]" />

<!--
再レンダリング処理にかかった時間を計測すると、これほどの違いが生まれます。

transformを使った場合は、別レイヤーに書き出すときにしかペイント処理が発生しないので、再レンダリングがかなり短い時間で済むことがわかります。
-->