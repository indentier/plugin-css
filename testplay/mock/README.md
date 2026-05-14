# testplay/mock/

`testplay/` でのローカル動作確認に使うサンプルファイル群。
`testplay/test.ps1` によって `testplay/run/` にコピーされてから Indentier が実行される。

## ファイル一覧

<!-- prettier-ignore -->
| ファイル | 言語 |
|-|-|
| sample.css | CSS |
| sample.scss | SCSS |

## 使い方

<!-- prettier-ignore -->
```sh
pnpm build  # このパッケージと indentier/ 両方でビルド

# default モード（全ファイル表示）
pnpm play
```

> **Note:** CSS/SCSS は ruby モード非対応（`rubyCompatible: false`）のため `pnpm play:ruby` は `pnpm play` と同じ結果になります。
