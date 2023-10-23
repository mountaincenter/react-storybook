Login

1. ボタン、テキストフィールド正しく表示される
2. メールアドレスとパスワードを入力する
3. ログインボタンを押す
4. ログインに成功すると 200 が返ってくる
5. ログインに失敗すると 401 が返ってくる
6. ログインに失敗するとフォームのテキストフィールドが赤くなる
7. ログインに失敗するとエラーメッセージが表示される
8. ログインに成功するとトークンが返ってくる
9. ログインに成功すると useCurrentuser が呼ばれる
10. ログインに成功すると navigate("/")が実行される

| テストの種類       | msw | backend | storybook | local | Cypress | Jest |                                   備考(addon 他)                                    | Login Form |
| ------------------ | :-: | :-----: | :-------: | :---: | :-----: | :--: | :---------------------------------------------------------------------------------: | ---------- |
| Test runnner       |  -  |    -    |     ◎     |       |    ◯    |  ◯   |                        @storybook/test-runner, jest, cypress                        | 1 〜 10    |
| Visual test        |  -  |    -    |     ◎     |       |    ◯    |      |       chromatic, @storybook/addon-storyshots for snapshot-based visual tests        | 1          |
| Accessibility test |  -  |    -    |     ◎     |       |    ◯    |      |                         @storybook/addon-a11y, cypress-axe                          | 1 〜 10    |
| Interaction test   |  ◯  |    ◯    |     ◎     |       |    ◯    |      | @storybook/testing-library, @storybook/jest, @storybook/addon-interactions, cypress | 2 〜 6     |
| Snapshot test      |  ◯  |    ◯    |     ◎     |       |         |  ◯   |                     @storybook/addon-storyshots, jest-snapshot                      |            |
| End-to-end test    |  ◯  |    ◯    |     ◎     |   ◯   |    ◎    |      |           cypress, storybook + msw, storybook + backend, local + backend            | 2 〜　 10  |
| Unit test          |  -  |    -    |     ◎     |       |         |  ◎   |           jest for testing individual units (functions, components etc.)            | 2 〜 10    |
| Integration test   |  ◯  |    ◯    |     ◎     |       |    ◎    |  ◯   |           Testing combination of units, cypress for UI integration tests            | 2 〜 10    |

## post method

### 基本的な流れ

#### post_type

original text="いまどうしてる？"
reply && post.user.id === currentUser text="別のポストを追加"
reply && post.user.id !== currentUser text="返信をポスト"
quote_repost text="コメン追加"

| コンポーネント名       |   postType   |     post      |
| ---------------------- | :----------: | :-----------: |
| PostComposer.tsx       |   original   |   undefined   |
| 同上                   |    reply     |  post.parent  |
| DialogPostComposer.tsx |   original   |   undefined   |
| 同上                   |    reply     |  post.parent  |
| 同上                   | quote_repost | post.original |
