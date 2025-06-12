# `RadioGroup`

## 目録

- [改版履歴](#改版履歴)
- [概要](#概要)
  - [使用例](#使用例)
  - [描画例](#描画例)
  - [処理概要](#処理概要)
  - [部品ディレクトリ](#部品ディレクトリ)
- [属性](#属性)
  - [静的属性](#静的属性)
    - [options](#options)
    - [controlledValue](#controlledvalue)
    - [defaultValue](#defaultvalue)
    - [initialColor](#initialcolor)
    - [initialFontColor](#initialfontcolor)
    - [initialSize](#initialsize)
    - [initialFontSize](#initialfontsize)
    - [isVisible](#isvisible)
    - [isAllDisabled](#isalldisabled)
    - [onChange](#onchange)
  - [機能補足](#機能補足)
    - [単一/全体の有効無効切り替え](#単一全体の有効無効切り替え)
    - [データ送信処理](#データ送信処理)

## 改版履歴

| 版数 | 改版内容                                                                                            | 改版者    | 改版日時       |
| ---- | --------------------------------------------------------------------------------------------------- | --------- | -------------- |
| 1.0  | 初版作成                                                                                            | Wang Jiaqi | 2025/06/03     |
| 2.0  | コントロール対象の変更（`defaultSelected`→`defaultValue`）、全体無効用の`isAllDisabled`追加、単一無効用`disabled`追加、複数のAPI仕様反映 | Wang Jiaqi | 2025/06/11     |

## 概要

Radioboxの集合を形成するUIコンポーネントで、以下の特徴があります。

- 単一選択のラジオボタンをまとめ、外部からの制御(`controlledValue`)および非制御(`defaultValue`)で動作が可能
- `isAllDisabled` による全体の無効化機能、および `RadioOption.disabled` による個別の無効化機能
- コンポーネントの表示/非表示、フォントサイズやカラー設定を行うプロパティを提供
- ボタンクリックでデータをPOST送信する例( `submitData` ) などフォーム機能の簡易実装を含む

### 使用例

```tsx
<RadioGroup
  name="example"
  controlledValue="option2"     // 受控模式
  defaultValue="option1"        // 非受控での初期選択
  initialColor="#F5F5F5"
  initialFontColor="#000000"
  initialSize="200px"
  initialFontSize="14px"
  isVisible={true}
  isAllDisabled={false}
  options={[
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2", disabled: true }, // 個別無効
    { label: "Option3", value: "option3" }
  ]}
  onChange={(val) => console.log("選択された値:", val)}
/>
```

### 描画例

![image](/components/specification/img/RadioGroup.jpg)

### 処理概要

- `controlledValue` が与えられた場合は受控コンポーネントとなり、外部で選択値を管理します
- `defaultValue` は非受控でのみ使われ、最初のマウント時に一度だけ選択状態を初期化します
- ラジオボタンのクリックで `handleChange` を呼び、選択値を更新し、`onChange` コールバックで親コンポーネントへ通知
- `isAllDisabled` が `true` の場合、すべてのラジオボタンが無効状態になります
- 各 `RadioOption` は `disabled?: boolean` を指定でき、任意の個別要素を無効化します
- `submitData` 関数により選択値を `/api/data` へ POST 送信する例が含まれます（必要に応じてカスタマイズ可）

### 部品ディレクトリ

|      性質      |                          ファイル                          |
| :------------: | :-------------------------------------------------------: |
|      本体      |    `./src/components/form/RadioGroup.tsx`                 |
|  型定義ファイル | 同上 (コンポーネントファイル内で props と option を定義)      |
|  データ管理    | `useState` + `fetch` による内部状態管理                      |

## 属性

### 静的属性

#### `options`

- 型：
  ```ts
  interface RadioOption {
    label: string;
    value: string;
    disabled?: boolean;
  }
  options: RadioOption[];
  ```
- 説明：表示するラジオボタンの配列。各項目のラベルと値、個別無効化用のフラグ(`disabled`)を定義

#### `controlledValue`

- 型： `string | undefined`
- 説明：外部管理モード(受控)の選択値。これが指定されると、内部では状態を持たずに、常にこの値が選択状態となる

#### `defaultValue`

- 型： `string | undefined`
- 説明：非受控モードでの初期選択値。マウント時にのみ設定される

#### `initialColor`

- 型： `string`
- デフォルト： `未使用または任意`
- 説明：背景色用のプロパティ（現在の実装では使用されていませんが、将来的に拡張可能）

#### `initialFontColor`

- 型： `string`
- デフォルト： `"black"`
- 説明：ラジオボタン全体のテキストカラー

#### `initialSize`

- 型： `string`
- 例： `"100px"`
- 説明：ラジオグループ全体の `minWidth` と `minHeight` に適用し、コンポーネントの大きさを大まかに指定

#### `initialFontSize`

- 型： `string`
- 例： `"14px"`
- 説明：ラベル文字のフォントサイズ

#### `isVisible`

- 型： `boolean`
- デフォルト： `true`
- 説明：`false` の場合、コンポーネント全体が非表示（nullを返す）

#### `isAllDisabled`

- 型： `boolean`
- デフォルト： `false`
- 説明：`true` の場合、すべてのラジオボタンが無効状態となり操作できなくなる

#### `onChange`

- 型：
  ```ts
  onChange?: (selectedValue: string) => void;
  ```
- 説明：ラジオボタンの選択値が変化したときに呼び出されるコールバック

## 機能補足

### 単一/全体の有効無効切り替え

- `RadioOption` の `disabled` プロパティによって個別にラジオ項目を無効化できる
- `isAllDisabled` プロパティにより、まとめてラジオボタンを無効化可能

### データ送信処理

- `submitData` 関数が例示されており、現在の選択値を `/api/data` にPOST送信する  
  （任意のプロジェクト要件に応じて `fetch` 先や内容を変更してください）
