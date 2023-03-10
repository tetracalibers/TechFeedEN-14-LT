---
layout: image-summary-detail
media: /boxShadow_Carnel.png
heading: box-shadowには要注意
summary: ぼかし半径によってパフォーマンスが変わる
---

**ぼかし半径が3pxなら、<br />影を構成するピクセルごとに周囲3pxの色を混合する**

- ぼかし半径が大きいほど重くなる
- `border-radius`と併用するとさらに重くなる
- SVGの`filter`や、CSSの`filter:blur`も同様

ぼかし半径を指定した影をアニメーションさせると、<br />処理がだんだん重くなってかくつく場合も<br />（特にSafari）

<!-- 
ペイント処理が必要になるプロパティの中でも、特に重いものが、box-shadowです。

影は無数のピクセルによって構成されていますが、そのピクセルごとに、ぼかし半径分だけ周囲のピクセルを調べて、色を混合する処理が発生します。

ぼかし半径が大きければ大きいほど、膨大な数のピクセルを調べることになるので、当然重くなります。
-->

---
layout: center-content
---

# box-shadowのぼかし半径と角丸の影響

<CompareAnimation :data="[
  { condition: 'box-shadow + border-radius', layout: 0, paint: 5669, composite: 1652 }, 
  { condition: 'box-shadow（ぼかし7px）', layout: 0, paint: 4536, composite: 2102 },
  { condition: 'box-shadow（ぼかし0px）', layout: 0, paint: 4290, composite: 1848 },
  { condition: 'opacity', layout: 0, paint: 148, composite: 640 }
]" />

<!--
また、border-radiusと併用すると、曲線を滑らかにするためにさらにピクセルを細分化して濃淡をつける処理が発生するため、ますます重くなります。

box-shadowをアニメーションさせたい時は、あらかじめ擬似要素にbox-shadowを設定しておいて、その擬似要素のopacityをアニメーションさせると良いでしょう。

また、たくさんの要素に影をつけたい場合には、影をSVGやCSSでブラウザに描画させるのではなく、画像として用意するようにします。
-->