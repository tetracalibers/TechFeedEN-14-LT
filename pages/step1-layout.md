---
layout: image-summary-detail
media: /Layout_properties.png
heading: 1. Layout
summary: 要素のボックスを並べるラフ画段階
---

- size系プロパティ 
  - `height`, `width`, `box-sizing`
- 余白系プロパティ 
  - `padding`, `margin`
- 位置指定系プロパティ 
  - `top`, `left`, `right`, `bottom`
- フォント系プロパティ
- レイアウト系プロパティ 
  - `grid`, `flex`, `float`関連
- 枠線の線種と太さ
  - `border-style`, `border-width`, `border-collapse`
  - `border-image-source`

<!--
漫画家さんの作業メイキングなどをみていると、まずは円などの簡単な図形を配置して、パーツの位置やサイズ感を大まかに決める様子が見受けられます。

CSSを適用して画面をレンダリングする過程でも、まずは各要素の位置と大きさを決めて、要素のボックスを並べていきます。

Layoutと呼ばれるこの段階で適用されるプロパティは、いずれも値を変更すれば周囲の要素の位置や大きさにも影響が及ぶものです。

ここで登場したプロパティをアニメーションさせると、ドミノ倒しのように周辺のパーツが壊れてしまいます。

広範囲にわたって下書きからすべてやり直すことになるので、これらはあまりアニメーションさせるべきではありません。
-->