---
layout: image-summary-detail
media: /Paint.png
heading: 2. Paint
summary: 各ボックス内を飾り付けする段階
---

- `color`
- `backface-visibility`
- `background-*`
- `border-color`, `border-image`
- `clip-path`, `border-radius`
- `box-shadow`

etc.

<!--
Paint段階で適用されるのは、各要素に閉じたスタイルなので、値を変えたときにレイアウトをやり直す必要はありません。

しかし、領域内のピクセル一つ一つを塗りつぶす処理が走ることになるので、Paintは最も時間がかかるフェーズですし、プロパティによっては特に注意が必要です。
-->