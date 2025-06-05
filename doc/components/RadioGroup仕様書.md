# `RadioGroup`

## 目録

- [改版履歴](#改版履歴)
- [概要](#概要)
  - [使用例](#使用例)
  - [描画例](#描画例)
  - [処理概要](#処理概要)
  - [部品ディレクトリ](#部品ディレクトリ)
- [属性](#属性)
  - [静的属性](#静的属性)
    - [options](#options)
    - [defaultSelected](#defaultselected)
    - [initialColor](#initialcolor)
    - [initialFontColor](#initialfontcolor)
    - [initialSize](#initialsize)
    - [initialFontSize](#initialfontsize)
    - [isVisible](#isvisible)
    - [initialValue](#initialvalue)
    - [initactivable](#initactivable)
    - [onChange](#onchange)
  - [機能補足](#機能補足)
    - [ラジオボタンの有効・無効切替](#ラジオボタンの有効無効切替)
    - [データの取得と送信](#データの取得と送信)

## 改版履歴

| 版数 | 改版内容     | 改版者   | 改版日時   |
| ---- | ------------ | -------- | ---------- |
| 1.0  | 初版作成     | Wang Jiaqi | 2025/06/03 |

## 概要

### 使用例

\`\`\`tsx
<RadioGroup
  initialColor="#ffffff"
  initialFontColor="#333333"
  initialSize="200px"
  initialFontSize="14px"
  isVisible={true}
  initialValue="default"
  initactivable={true}
  options={[
    { label: "Option A", value: "A", checkable: true },
    { label: "Option B", value: "B", checkable: true },
  ]}
  defaultSelected="A"
  onChange={(val) => console.log("選択:", val)}
/>
\`\`\`

### 描画例

![image](/components/specification/img/RadioGroup.jpg)

### 処理概要

本コンポーネントは、ラジオボタンのグループを形成し、UI制御機能（背景色変更、可視制御、ボタン活性状態の切り替え、データ通信）を内包するユーティリティ型のフォーム部品です。

### 部品ディレクトリ

|       性質       |                     ファイル                     |
| :--------------: | :----------------------------------------------: |
|       本体       | \`./src/components/RadioGroup.tsx\`                |
| 型定義ファイル   | \`./src/components/RadioGroup.tsx\`（内に定義）     |
|  データ管理      | \`useState\` + \`fetch\` による内部状態管理           |

## 属性

### 静的属性

#### `options`

- 型：
  \`\`\`ts
  options: { label: string; value: string; checkable: boolean }[]
  \`\`\`
- 説明：表示するラジオ項目の配列

#### `defaultSelected`

- 型：\`string\`
- デフォルト：\`undefined\`
- 説明：初期選択される値

#### `initialColor`

- 型：\`string\`
- デフォルト：\`"#ffffff"\`
- 説明：背景色の初期値（RGB/HEX）

#### `initialFontColor`

- 型：\`string\`
- デフォルト：\`"#000000"\`
- 説明：フォント色

#### `initialSize`

- 型：\`string\`
- 例：\`"200px"\`
- 説明：コンポーネントの最小幅と高さに使用

#### `initialFontSize`

- 型：\`string\`
- 例：\`"14px"\`
- 説明：フォントサイズ

#### `isVisible`

- 型：\`boolean\`
- デフォルト：\`true\`
- 説明：表示制御（非表示時は \`"hidden"\` に）

#### `initialValue`

- 型：\`string\`
- 説明：データ送信時の初期値

#### `initactivable`

- 型：\`boolean\`
- デフォルト：\`true\`
- 説明：ラジオボタンを初期状態で活性にするか

#### `onChange`

- 型：
  \`\`\`ts
  (selectedValue: string) => void
  \`\`\`
- 説明：選択値が変わった際のコールバック関数

### 機能補足

#### ラジオボタンの有効・無効切替

- ボタンクリックで \`setIsRadioActive\` をトグルし、ラジオ選択の活性・非活性を切り替え可能

#### データの取得と送信

- \`fetchData\`：\`/api/data\` から取得し、値を反映
- \`submitData\`：現在の \`value\` を POST 送信