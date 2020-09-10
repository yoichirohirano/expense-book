# Expense Book

日々の出費と予算をカテゴリ毎に記録でき、月ごとの支出状況がひと目でわかる家計簿アプリ（PWA）です。

![sample480](https://user-images.githubusercontent.com/25029901/86226285-66c00380-bbc6-11ea-830f-89dcfa53df77.gif)

[公開サイト](https://yh-expense-book.web.app/) 

※スマートフォン推奨(以下QRコードからアクセスできます)

![expense-book-qrcode](https://user-images.githubusercontent.com/25029901/86224478-e39dae00-bbc3-11ea-9162-78df74cdc229.png)

## 機能一覧

- 出費の登録、更新、削除
  - 日付
  - 金額
  - カテゴリ
  - タイトル
- 月別/カテゴリ別予算の登録、更新、削除
- 月別/カテゴリ別の支出状況のグラフ表示
- 日付別の出費一覧表示

## 使用技術

### Front-End

#### Language

- TypeScript 3.7.2

#### Design

- Material-UI 4.9
- Storybook 5.3.18
- Chart.js 2.9.3

#### Framework

- React 16.13.1
w/ Redux 4.0.5

#### Test

- Jest 24.9.0
- Enzyme 3.11.0

#### Linter / Formatter

- ESLint 6.6.0
- Prettier 2.0.5

### Back-End

- Firebase
  - Firebase Hosting

### Infrastructure

- CircleCI
- Docker
- docker-compose
