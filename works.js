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
    id: "bingo-smartball",
    title: "ビンゴスマートボール",
    subtitle: "Bingo Smart Ball",
    type: "game",
    description:
      "縁日のスマートボールを3Dで。棒を引いてビー玉を打ち出し、穴に入れて、たて・よこ・ななめのビンゴを狙います。",
    url: "/bingo-smartball/",
    repo: "https://github.com/yume-towa/bingo-smartball",
    thumb: "assets/thumbs/bingo-smartball.webp",
    tags: ["ひとりで遊ぶ", "3〜5分"],
    added: "2026-11-23",
  },
  {
    id: "katakana-ban-game",
    title: "横文字御法度",
    subtitle: "Yokomoji Gohatto",
    type: "game",
    description:
      "カタカナ語や英語を使わずにお題を説明する、みんなで遊ぶゲーム。スマホ1台を順番に回して遊びます。お題は450題。",
    url: "/katakana-ban-game/",
    repo: "https://github.com/yume-towa/katakana-ban-game",
    thumb: "assets/thumbs/katakana-ban-game.svg",
    tags: ["複数人で遊ぶ", "3〜15分"],
    added: "2026-11-23",
  },
  {
    id: "number-deduction",
    title: "数字当て推理ゲーム",
    subtitle: "Number Deduction",
    type: "game",
    description:
      "金庫の暗証番号を推理して当てるゲーム。答えるたびに返ってくる「Low / Hi」と、合っている数字の個数だけが手がかりです。",
    url: "/number-deduction/",
    repo: "https://github.com/yume-towa/number-deduction",
    thumb: "assets/thumbs/number-deduction.svg",
    tags: ["ひとりで遊ぶ", "3〜5分"],
    added: "2026-11-23",
  },
  {
    id: "mitsudomoe-reversi",
    title: "三つ巴リバーシ",
    subtitle: "Mitsudomoe Reversi",
    type: "game",
    description:
      "赤・青・緑の三人で遊ぶ、三角マスのリバーシ。真ん中の三色の石は、だれでも挟む端に使えます。盤の形は4種類。",
    url: "/mitsudomoe-reversi/",
    repo: "https://github.com/yume-towa/mitsudomoe-reversi",
    thumb: "assets/thumbs/mitsudomoe-reversi.svg",
    tags: ["3人で対戦", "CPU対戦", "5〜15分"],
    added: "2026-11-19",
  },
  {
    id: "jigsaw-kobo",
    title: "ジグソー工房",
    subtitle: "Jigsaw Kobo",
    type: "tool",
    description:
      "手持ちの写真が、その場でジグソーパズルになります。印刷用の画像も書き出せるので、紙のパズルも作れます。",
    url: "/jigsaw-kobo/",
    repo: "https://github.com/yume-towa/jigsaw-kobo",
    thumb: "assets/thumbs/jigsaw-kobo.svg",
    tags: ["ひとりで遊ぶ", "3〜10分"],
    added: "2026-11-19",
  },
  {
    id: "hexa-reversi",
    title: "六角形リバーシ",
    subtitle: "Hexa Reversi",
    type: "game",
    description:
      "三角形のマスでできた六角形の盤で遊ぶリバーシ。列にそって挟むほか、相手の石の2辺を囲んでもひっくり返せます。",
    url: "/hexa-reversi/",
    repo: "https://github.com/yume-towa/hexa-reversi",
    thumb: "assets/thumbs/hexa-reversi.svg",
    tags: ["ふたりで対戦", "CPU対戦", "3〜10分"],
    added: "2026-11-18",
  },
  {
    id: "gray-reversi",
    title: "灰色リバーシ",
    subtitle: "Gray Reversi",
    type: "game",
    description:
      "一手ごとに石の色が薄れ、やがて盤上はすべて灰色に。どの石が自分のものかを覚えて戦う、記憶力のリバーシです。",
    url: "/gray-reversi/",
    repo: "https://github.com/yume-towa/gray-reversi",
    thumb: "assets/thumbs/gray-reversi.svg",
    tags: ["ふたりで対戦", "CPU対戦", "5〜15分"],
    added: "2026-11-18",
  },
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
    tags: ["ふたりで対戦", "CPU対戦", "10〜30分"],
    added: "2026-11-15",
  },
  {
    id: "orbit-reversi",
    title: "旋回リバーシ",
    subtitle: "Orbit Reversi",
    type: "game",
    description:
      "一定の手数ごとに盤面の一部が自動で回転するリバーシ。次に回る場所は盤上の色と矢印で予告されます。",
    url: "/orbit-reversi/",
    repo: "https://github.com/yume-towa/orbit-reversi",
    thumb: "assets/thumbs/orbit-reversi.svg",
    tags: ["ふたりで対戦", "CPU対戦", "オンライン対戦", "5〜15分"],
    added: "2026-11-14",
  },
];
