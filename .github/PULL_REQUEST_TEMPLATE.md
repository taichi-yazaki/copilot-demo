<!-- for GitHub Copilot review rule -->
<!-- I want to review in Japanese. -->

<details>
<summary>Copilotによるコードレビュー指針</summary>

### ✅ レビュー時のお願い

- **レビューコメントには、以下の 2 種類以上の prefix（接頭辞）を必ずつけてください：**

  1. 「レビュー対象カテゴリ」：どの観点の指摘か（例: `[logic]`, `[perf]`, `[ts]` など）
     - 特に **コード規約に関する指摘がある場合は `[ts]` をつけてください**（TypeScript スタイルガイドに基づく）。
  2. 「指摘のレベル」：修正の必要度合い（例: `[must]`, `[imo]`, `[nits]`, `[ask]` など）

- **複数の prefix を付ける場合は、半角スペースで区切って並べてください。**  
  例: `[must] [logic] [ts]`

- **指摘コメントには、可能な限り修正提案コードを含めてください。**

- **以下の観点を特に意識してレビューしてください：**
  - より簡潔な書き方ができないか？ → `[opt]`
  - 正規表現が適切かどうか？ → `[regex]`
  - 変数名が意味的・文脈的に適切か？ → `[naming]`

---

### 🧩 レビュー観点（prefix: レビュー対象カテゴリ）

| prefix          | 内容                                              |
| --------------- | ------------------------------------------------- |
| `[logic]`       | ロジックの正確性                                  |
| `[sec]`         | セキュリティ上の問題                              |
| `[perf]`        | パフォーマンス最適化                              |
| `[race]`        | データ競合の可能性                                |
| `[consistency]` | 一貫性の維持                                      |
| `[error]`       | エラーハンドリング                                |
| `[maintain]`    | 保守性の向上                                      |
| `[modular]`     | モジュール性の確保                                |
| `[complexity]`  | コードの複雑性軽減                                |
| `[opt]`         | 最適化の可能性                                    |
| `[bp]`          | ベストプラクティスの適用（DRY, SOLID, KISS など） |
| `[critical]`    | 致命的なバグやテスト失敗                          |
| `[info]`        | リファクタリングや改善のヒント、参考情報          |

---

### 📝 コメント分類（prefix: 指摘のレベル）

| prefix   | 意味・使用場面                   |
| -------- | -------------------------------- |
| `[must]` | 明確なバグ・修正必須事項         |
| `[imo]`  | 改善が望ましいが必須ではない提案 |
| `[nits]` | 微細な指摘（誤字・形式など）     |
| `[ask]`  | 質問や確認（指摘ではない）       |

---

### 📚 コード規約（prefix: `[ts]`）

- TypeScript に関する指摘では、以下のスタイルガイドに準拠してください：  
  [TypeScript Deep Dive スタイルガイド](https://typescript-jp.gitbook.io/deep-dive/styleguide)

</details>
