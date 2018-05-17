# react_redux_ssr

## 前提
フロントエンド開発環境（React+Reduxの構成において）SSR（ServerSideRendering）を実現する為のテンプレートととして作成しております。   
実装の参考例としてsampleのComponentを用意し、Viewが閲覧できるようにしております。

### Reactとは
[React公式](https://reactjs.org/)   
Facebookが開発したView(UIを扱う)を構成するJavascriptライブラリです。

### Reduxとは
[Redux公式](https://redux.js.org/)   
Reactが扱うUIのstate(状態)を管理するためのフレームワークであり、複雑なアプリケーションを作る際に　　　
stateの変更箇所が複数に分散されることを防ぎ、一元管理を容易にすることを目的に導入します。

### SSR(ServerSideRendering)とは

#### 概念


#### なぜ必要なのか？

- 理由 
- 理由


## ディレクトリ構成概要
| ディレクトリ | 説明 |
| ---- | ---- |
| .storybook  | [`storybook`](https://storybook.js.org/)で必要なmodule等が格納されている。 <br/>UI作成観点におけるパーツマップの実装や[`インターフェイスインベントリー`](http://bradfrost.com/blog/post/interface-inventory/)との照らし合わせに利用 |
| /build | bundle(webpackにより纏められた)されたJS（bundle.js）がDEVICE毎に出力され |
| /shared | clientとserverの共通ロジックであるファイルを格納している |
| /src | アプリケーションの元となるファイルが格納 |
| /static | 固定のファイルが格納される場所(log等) |
| /stories | storybookのView必要なComponentが配下に格納されている |
| /webpack | JavaScriptのバンドルツールである[`webpakc`](https://webpack.js.org/)の設定が配下のファイルに記載 |

## React Componentについて
- `Container Component`
- `Presentational Component`

React（Redux）の[プラクティスの一つとして](https://redux.js.org/basics/usage-with-react)存在しており、
`ロジックのみに専念する`Container Componentと`表示のみに専念する`Presentational ComponentにComponentを分離させることで   
コンポーネントの再利用性を高めることができるとの思想であり、当テンプレートにおいてもこれに沿った実装（ファイル構成）をしております。

### Container Componentとは
ロジックのみに専念し、(記載途中)

### Presentational Componentとは
表示のみに専念しており、propsとして与えられるデータを表示することに専念しております。
このComponentでは状態を保持しない為、`Stateless functional component`として書かれることも多く、   
当テンプレートにおいてもstatelessにて実装を行っております。

#### sample code
```javascript
export default (props)=> {
  const { app } = props;
  
  return (
    <div>{app}</div>
  );
};
```

## AtomicDesignとは
[AtomicDesign](http://bradfrost.com/blog/post/atomic-web-design/) とは、ページを構成する各要素をその粒度毎に   
構成要素の単位として分類し、一つのページを作成するデザイン手法。   
構成要素の順としての最小単位から   
atom < molecules < organisms < templates < pagesとなる。

## Reduxのファイル構成について
Reduxの構成としてファイル構成は[`Ducks`](https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c)を採用し作成しております。   
何故、Ducksなのか
- ファイル数の削減が狙い
- `Reducer` `Action` `ActionCreator`等はRedux内で役割は別であるが、互いにComponent内で紐づけられており、密結合であることから   
1ファイルでの扱いとなっても問題は無く、見通しも良くなる為。
当構成においてはreducers配下にファイル末に〇〇（スネークケース）Action.jsと置くことで`Reducer` `Action` `ActionCreator`を一つのファイルとして纏めております。

## script commandについて
| command | path | 説明 |
| --- | --- | --- |
| yarn start | PC:localhost:8080/ SP:localhost:8090 | localにて確認 |
| yarn build-pro| --- | productionモードでbuild |
| yarn storybook | localhost:6006 | storybookが起動され、localにて確認 |

#### better-npm-runを使用している理由について
（以下の2点から使用しております。）

- 環境変数=値 yarn run スクリプト名という書き方でyarn-scirptを発火させた場合、通常（主にMacでは）process.env.環境変数でnode内の環境変数を参照できるが
OS状況によっては上手く動かない為。
package.json内にそれぞれの（build or deploy)タスクで利用する環境変数を設定できることとnode内での環境変数へのアクセスが上手くいく様にする為。
npm-run-allを使用（以下の点から使用しております。）

- 当Projectでは各環境に適応（ディバイスやドメイン）させる為にscriptコマンドで設定しているタスクが多岐に渡っており、それらを1対1のコマンドで呼ぶことは非効率的であり、また、npm-run-allを利用することで、複数のタスクを並列または順序ごとに簡単に呼べるようなる為。
app/bin/配下のshell scriptにyarn scriptコマンドの呼出しを記載

つきましては、yarn run スクリプト名を呼出し→ app/bin/配下のshell script → 適宜のyarn script 呼出しのフローとなっております。

## routing設定について
Routingのライブラリとして[`React Router`](https://github.com/ReactTraining/react-router)を今回、使用している。   
- [sample](https://github.com/TaharaKazuki/react-router-sample)

## Javascript記法について
ES6記法にて実装をおこなっております。

## sassについて
記載途中

## webpackについて
記載途中
