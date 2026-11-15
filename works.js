/*
 * 作品一覧のデータ
 *
 * 新しい作品を追加するときは、下の配列に { ... } を1つ足すだけで
 * TOPページの一覧に表示されます(公開日が新しい順に自動で並びます)。
 *
 *   id          … 半角英数字とハイフン。リポジトリ名と同じにしておくと分かりやすい
 *   title       … 作品名(日本語)
 *   subtitle    … 英語名など(省略可)
 *   type        … "game"(ゲーム) または "tool"(ツール)
 *   description … 1〜2文の紹介文
 *   url         … 作品のURL。GitHub Pages なら "/リポジトリ名/"
 *   repo        … ソースコードのURL(省略可)
 *   thumb       … サムネイル画像のパス。16:10 の比率がおすすめ(省略可)
 *   tags        … 特徴を表す短いラベルの配列(省略可)
 *   added       … 公開日 "YYYY-MM-DD"。30日以内なら NEW が付く
 */
window.WORKS = [
  {
    id: "cube-reversi",
    title: "キューブリバーシ",
    subtitle: "Cube Reversi",
    type: "game",
    description:
      "立方体の盤で遊ぶリバーシ。縦・横・奥行き・斜めの26方向で相手の石を挟みます。盤は4×4×4〜8×8×8の3サイズ。",
    url: "/cube-reversi/",
    repo: "https://github.com/yume-towa/cube-reversi",
    thumb: "assets/thumbs/cube-reversi.svg",
    tags: ["26方向", "CPU対戦", "ふたりで対戦"],
    added: "2026-11-15",
  },
  {
    id: "orbit-reversi",
    title: "旋回リバーシ",
    subtitle: "Orbit Reversi",
    type: "game",
    description:
      "一定の手数ごとに盤面の一部が自動で回転する、オセロの変種。次に回る場所は盤上の色と矢印で予告されます。",
    url: "/orbit-reversi/",
    repo: "https://github.com/yume-towa/orbit-reversi",
    thumb: "assets/thumbs/orbit-reversi.svg",
    tags: ["対人", "AI対戦", "4段階の強さ"],
    added: "2026-11-14",
  },
];
