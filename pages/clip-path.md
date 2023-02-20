---
layout: intro
---

# clip-path

<!--
最後に、clip-pathによるアニメーション実装の考え方を簡単に紹介したいと思います。

clip-pathは、指定した図形の範囲内しか見えないように、ペイント範囲を切り抜くプロパティです。
-->

---
layout: center-content
---

# `inset(<辺からの距離リスト> round <角丸リスト>)`

<ClipPathInset />

<!--
insetでは、ボックスの端からの距離を指定することで、四角形に切り抜くことができます。

距離の指定方法はpaddingやmarginと同様です。
-->

---
layout: image-main
image: /slideAnimation_by_clip-path.png
---

# insetでスライド方向とは逆方向に押し潰しておく

<!--
例えば、ボックス全体が見えなくなるように、100%のinsetを指定しておいて、inset(0)まで遷移させると、スライドアニメーションを実現することができます。
-->

---
layout: center-content
---

# スライドアニメーション（今はclip-pathは重め）

<CompareAnimation :data="[
  { condition: 'width', layout: 3272, paint: 10563, composite: 3306 }, 
  { condition: 'clip-path', layout: 0, paint: 12127, composite: 2579, highlight: ['paint'] },
  { condition: 'background-position', layout: 0, paint: 5601, composite: 1768 },
  { condition: 'transform', layout: 0, paint: 0, composite: 1251 }
]" />

<!--
とはいえ、現状、clip-pathはPaint処理が重めなので、今後に期待ですね。
-->

---
layout: image-main
image: /roundCornerAnimation_by_clip-path.png
---

# border-radius: X;の代わりにinset(0 round X);

<!--
また、insetでは、border-radiusと同様の記法で、roundキーワードの後に角を丸くする指定を加えることもできます。
-->

---
layout: center-content
---

# filter:blurアニメーションと角丸

<CompareAnimation :data="[
  { condition: 'blur(2px) + border-radius', layout: 0, paint: 701, composite: 4896 }, 
  { condition: 'blur(10px)', layout: 0, paint: 166, composite: 1926 },
  { condition: 'blur(2px) + clip-path角丸', layout: 0, paint: 163, composite: 1511 },
  { condition: 'blur(2px)', layout: 0, paint: 166, composite: 1310 }
]" />

<!--
例えば、filterプロパティによるぼかしと併用する際は、border-radiusよりもclip-pathで角丸を表現した方が、圧倒的にパフォーマンスが良くなります。

このとき、border-radiusはぼかし範囲がボーダーの外側まで及びますが、clip-pathによる角丸では、要素外に滲みがはみ出すことはありません。
-->

---
layout: center-two-cols
---

<template v-slot:title>
  <code>polygon(x y, x y, ... , x y)</code>
</template>

<ClipPathPolygon />

::right::

```css
img {
/* polygon(左上, 右上, 右下, 左下) */
  clip-path: polygon(
    1em 1em,
    calc(100% - 1em) 1em,
    calc(100% - 1em) 60%,
    1em calc(100% - 1em)
  );
}
```

<!--
polygonでは、頂点の座標を列挙することで、自由に多角形で切り抜くことができます。

座標の原点はボックスの左上の角です。
-->

---
layout: image-main
image: /radialFillAnimation_by_clip-path.png
---

# polygonで点から塗りに遷移させる

<!--
全ての頂点に同じ座標を指定すると点になるので、そこからどんな図形にも変化させられます。
-->

---
layout: center-content
---

# `circle(<半径> at <中心点の位置>)`

<ClipPathCircle />

<!--
円で切り抜くこともでき、うまく使えば波紋アニメーションを簡単に実現することができます。
-->

---
layout: center-content
---

# `ellipse(<横の長さ> <縦の長さ> at <中心点の位置>)`

<ClipPathEllipse />

<!--
楕円も使えます。
-->

--- 
layout: center-content
---

# clip-pathが苦手なアニメーション

**要素自体の移動`translate`**

- `clip-path`は要素を内部で切り抜くだけなので、要素自体の位置は変えられない

**回転`rotate`**

- 少しずつ頂点の位置をずらした`polygon`を多数`@keyframe`に登録するしかない

**剪断`skew`**

- 少しずつ頂点の位置をずらした`polygon`を多数`@keyframe`に登録するしかない

**子要素も含めて拡大縮小`scale`**

- `inset`を変えることで模倣はできるが、子要素は追従して拡大縮小されない

**フェードイン/アウト`opacity`**

- `opacity`でやるしかない

<!--
とはいえ、transformやopacityが不要になるわけではなく、組み合わせることで表現の幅がグッと広がるのではないでしょうか。
-->