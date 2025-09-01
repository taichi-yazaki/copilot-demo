<!-- I want to review in Japanese. -->
<!-- for GitHub Copilot review rule -->
<details>
<summary>Copilotによるコードレビュー指針</summary>

### ✅ レビュー時のお願い

- **レビューコメントには、以下の 2 種類以上の prefix（接頭辞）を必ずつけてください：**

  1. 「レビュー対象カテゴリ」：どの観点の指摘か（例: `[bp]`, `[critical]`, `[rule]` など）
     - 特に **コード規約に関する指摘がある場合は `[rule]` をつけてください**。
  2. 「指摘のレベル」：修正の必要度合い（例: `[must]`, `[imo]`, `[nits]`, `[ask]` など）

- **複数の prefix を付ける場合は、半角スペースで区切って並べてください。**
  例: `[must] [bp] [rule]`

- **指摘コメントには、可能な限り修正提案コードを含めてください。**

- **以下の観点を特に意識してレビューしてください：**
  - より簡潔な書き方ができないか？ → `[opt]`
  - 正規表現が適切かどうか？ → `[regex]`
  - 変数名が意味的・文脈的に適切か？ → `[naming]`
  [naming]については、その変数が何を表していて、何に使われるのかという“使われ方の文脈”を理解したうえで、より直感的な命名を期待します。

- **コーディング規約チェックリストに従ってレビューしてください**

---

### 🧩 レビュー観点（prefix: レビュー対象カテゴリ）

| Prefix       | 内容                                              |
| ------------ | ------------------------------------------------- |
| `[bp]`       | ベストプラクティスの適用（DRY, SOLID, KISS など） |
| `[critical]` | 致命的なバグやテスト失敗                          |
| `[info]`     | リファクタリングや改善のヒント、参考情報          |
| `[logic]`    | ロジックの正確性                                  |
| `[maintain]` | 保守性の向上                                      |
| `[naming]`   | 変数名が意味的・文脈的に適切であるか              |
| `[opt]`      | 最適化の可能性                                    |
| `[regex]`    | 正規表現が適切であるか                            |
| `[sec]`      | セキュリティ上の問題                              |

---

### 📝 コメント分類（prefix: 指摘のレベル）

| prefix   | 意味・使用場面                   |
| -------- | -------------------------------- |
| `[must]` | 明確なバグ・修正必須事項         |
| `[imo]`  | 改善が望ましいが必須ではない提案 |
| `[nits]` | 微細な指摘（誤字・形式など）     |
| `[ask]`  | 質問や確認（指摘ではない）       |

---

### 📚 コーディング規約チェックリスト（prefix: [rule]）
https://typescript-jp.gitbook.io/deep-dive/styleguide
https://ja.vuejs.org/style-guide/

**typescriptは以下の項目を満たしているかを確認し、必要に応じて指摘してください：**

- 変数名・関数名に **camelCase** を使用している（例: `fooBar`, `doSomething`）
  - `PascalCase` や `snake_case` は使用しない（例: `FooVar`, `get_user_data` など）

- クラス名に **PascalCase** を使用している（例: `UserService`, `LoginManager`）
  - `camelCase` や `snake_case` は使用しない（例: `userService`, `login_manager` など）

- クラスのプロパティ・メソッドには **camelCase** を使用している（例: `userId`, `getName()`）
  - `PascalCase` は使用しない（例: `UserId`, `GetName()` など）

- インターフェース名に **PascalCase** を使用し、`I` プレフィックスは使わない（例: `UserProfile`）
  - `IFoo` や `user_profile` などは使用しない

- タイプエイリアス名は **PascalCase** を使用している（例: `UserProfile`, `AccountSettings`）

- 名前空間には **PascalCase** を使用している（例: `AppCore`, `CommonTypes`）

- Enum 名とそのメンバ名はどちらも **PascalCase** を使用している（例: `UserRole.Admin`）
  - 小文字やスネークケースは使わない（例: `user_role.admin` など）

- 配列の型注釈には `Type[]` 形式を使用している（例: `User[]`）
  - `Array<Type>` は使用しない

**vue.jsは以下の項目を満たしているかを確認し、必要に応じて指摘してください：**

- props 定義は **できる限り詳細に**行う（最低限、型指定を含める）
  - 型を指定しない簡易な配列形式は使用しない（例: `defineProps(['status'])`）

- `v-for` を使用する際は **必ず `key` を指定**する（例: `:key="item.id"`）
  - `key` を指定しないと、コンポーネントの状態が保持されず、パフォーマンスや動作に問題が起きる可能性がある

- `v-for` と `v-if` を **同じ要素に同時に使用しない**
  - `v-if="user.isActive"` を `v-for` と一緒に `li` 要素に書かない
  - フィルタリングは算出プロパティで行い、表示制御はコンテナ要素で行う

- テンプレート内のコンポーネント名の形式を統一する*
  - 単一ファイルコンポーネント・文字列テンプレートでは **PascalCase** を使用する（例: `<MyComponent />`）
  - "vue/component-name-in-template-casing": ["error", "PascalCase"]

- props 名は camelCase で定義し、テンプレートの種類に応じて適切に使用する
  - props 定義では **camelCase** を使用する（例: `greetingText`）
  - props 定義で kebab-case を使用しない（例: `'greeting-text'`）

</details>
<!-- for GitHub Copilot review rule -->
<!-- I want to review in Japanese. -->
