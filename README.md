# yume-towa.github.io

ブラウザで動くゲームとツールをまとめた TOP ページです。
公開URL: https://yume-towa.github.io/

ビルド不要の静的サイトで、GitHub Pages がこのリポジトリをそのまま配信します。

## ファイル構成

| ファイル | 内容 |
|---|---|
| `index.html` | TOP ページ本体(HTML・CSS・一覧の表示処理) |
| `works.js` | 作品一覧のデータ。作品を追加するときはここだけ編集する |
| `assets/thumbs/` | 各作品のサムネイル画像(16:10 推奨) |
| `favicon.svg` | ファビコン |
| `.nojekyll` | GitHub Pages の Jekyll 処理を無効にするための空ファイル |

## 作品を追加する手順

1. 作品のリポジトリ(例: `yume-towa/new-game`)で GitHub Pages を有効にし、
   `https://yume-towa.github.io/new-game/` で開けることを確認する。
2. サムネイル画像を `assets/thumbs/new-game.svg`(または `.png` / `.webp`)として置く。
3. `works.js` の配列に1件追加する。

```js
{
  id: "new-game",
  title: "作品名",
  subtitle: "English Title",
  type: "game",            // "game" または "tool"
  description: "1〜2文の紹介文。",
  url: "/new-game/",
  repo: "https://github.com/yume-towa/new-game",
  thumb: "assets/thumbs/new-game.svg",
  tags: ["特徴1", "特徴2"],
  added: "2026-12-01",     // 公開日。30日以内は NEW が付く
},
```

一覧は `added` の新しい順に自動で並び、「ゲーム」「ツール」の絞り込みと件数も自動で更新されます。

## 手元で確認する

`works.js` を読み込むため、ファイルを直接開くのではなく簡易サーバーで確認します。

```bash
python3 -m http.server 8000
```

ブラウザで http://localhost:8000/ を開きます(各作品へのリンクは公開環境でのみ動きます)。

## 公開の仕組み

- このリポジトリ(`yume-towa.github.io`)… `https://yume-towa.github.io/` に公開
- 各作品のリポジトリ(例: `orbit-reversi`)… `https://yume-towa.github.io/orbit-reversi/` に公開

どちらも GitHub の各リポジトリの Settings → Pages で、公開するブランチ(`main` / `/ (root)`)を指定します。
