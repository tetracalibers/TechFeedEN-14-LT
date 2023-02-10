---
layout: image-summary-detail
media: /Composite.png
heading: 3. Composite
summary: レイヤーを正しく重ねる
no_shadow: true
---

PaintLayerが生成される条件は

- `position`が明示されている
- `opacity`が1未満
- `filter`指定あり
- `mask`指定あり
- `mix-blend-mode`が`normal`以外
- `transform`が`none`以外
- `backface-visibility: hidden;`
- `overflow`が`visible`以外

など

<!--
最後のステップは、レイヤーの合成です。

ブラウザは、要素を適宜PaintLayerと呼ばれる別なレイヤーに振り分けて描画し、それらレイヤーを最後に重ね合わせることによって、最終的な画面を構築します。

要素がメインキャンバスとは別のPaintLayerに振り分けられる条件は、スタックコンテキストの生成条件とほぼ同一です。
-->