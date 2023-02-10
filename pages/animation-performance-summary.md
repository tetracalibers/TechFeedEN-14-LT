# アニメーションは壊れたところからやり直し

## Layout < Paint < Composite（→パフォーマンス良）

- Layoutは箱の並び自体壊れてしまう（下書きからやり直し）
- Paintは箱の中身が壊れてしまう（もう一度清書）
- Compositeは既に用意していたレイヤーを使い回せる

## 教訓

- 再Layoutは避けよう
- なるべくCompositeで済ませよう
- 重い再Paintは避けよう（`box-shadow`, `border-radius`, etc.）

<!--
しかし、iOSのChromeでは、Compositeプロパティをアニメーションさせた場合にdurationが効かず、瞬時に終了状態に切り替わってしまうバグが存在しています。
-->
