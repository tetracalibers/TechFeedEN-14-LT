---
layout: intro
---

# clip-path

<!--
clip-pathは、指定した図形の範囲内しか見えないように、ペイント範囲を切り抜くプロパティです。
-->

---
layout: center-content
---

# `inset(<辺からの距離リスト> round <角丸リスト>)`

<ClipPathInset />

<!--
insetでは、要素の境界からの距離を指定することで、四角形に切り抜くことができます。

距離の指定方法はpaddingやmarginと同様です。

また、border-radiusと同様の記法で、roundキーワードの後に角を丸くする指定を加えることもできます。
-->

---
layout: center-content
---

# `circle(<半径> at <中心点の位置>)`

<ClipPathCircle />

<!--
円や楕円を指定することもでき、うまく使えば波紋アニメーションを簡単に実現することができます。
-->

---
layout: center-content
---

# `ellipse(<横の長さ> <縦の長さ> at <中心点の位置>)`

<ClipPathEllipse />

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
polygonでは、頂点の座標を列挙することで、自由に多角形を定義することができます。

座標の原点は要素の左上の角です。
-->

---
layout: intro
---

# clip-pathによるアニメーション

<!--
このようにclip-pathで形状を定義し、うまく変化させれば、背景や枠線のアニメーションはほぼclip-pathで実現することができます。
-->

---
layout: image-main
image: /slideAnimation_by_clip-path.png
---

# insetでスライド方向とは逆方向に押し潰しておく

---
layout: image-main
image: /radialFillAnimation_by_clip-path.png
---

# polygonで点から塗りに遷移させる

---
layout: image-main
image: /roundCornerAnimation_by_clip-path.png
---

# border-radius: X;の代わりにinset(0 round X);

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