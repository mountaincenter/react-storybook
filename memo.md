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

- storybook: \*\*.stories.|ts,tsx|
- local: \*\*.|ts,tsx|
- cypress: \*\*.cy.|ts,tsx|
- jest or storybook: \*\*.test.|ts,tsx|

1. Button.tsx
2. Button.stories.tsx(Visual Test)
3. LoginForm.tsx
4. LoginForm.stories.tsx(Visual Test)
5. LoginForm.stories.tsx(Accessibility Test)
6. LoginForm.stories.tsx(Interaction Test)
7. LoginForm.stories.tsx(Snapshot Test)
8. LoginForm.test.tsx(Unit Test)
9. Home.tsx
10. LoginForm.test.tsx(Integration Test)
11. backend の実装
12. LoginForm.cy.tsx(End-to-end Test)

フロントエンドを react で バックエンドを rails とする。
ボタンコンポーネントを作成してログインフォームコンポーネントを実装して
トップ画面をログインの有無で違う画面を表示したい。

1. ボタンコンポーネントを作成する →Button.tsx
2. ボタンコンポーネントのストーリーを作成する →Button.stories.tsx
3. Visual Test を実行する →Button.stories.tsx
4. Accessibility Test を実行する →Button.stories.tsx
5. Interaction Test を実行する →Button.stories.tsx
6. Snapshot Test を実行する →Button.stories.tsx
7. ログインフォームを作成する →LoginForm.tsx
8. ログインフォームのストーリーを作成する →LoginForm.stories.tsx
9. Visual Test を実行する →LoginForm.stories.tsx
10. Accessibility Test を実行する →LoginForm.stories.tsx
11. msw を使ってログインフォームの Interaction Test を実行する →LoginForm.stories.tsx
12. Snapshot Test を実行する →LoginForm.stories.tsx
13. jest を使ってログインフォームの Unit Test を実行する →LoginForm.test.tsx
14. cypress を使ってログインフォームの Integration Test を実行する →LoginForm.cy.tsx
15. トップページを作成する →Home.tsx
16. バックエンドを実装する →backend
17. ログインフォームの End-to-end Test を実行する →LoginForm.cy.tsx
