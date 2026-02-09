## ファイル構成

```
TRPG_Website/
├── index.html              # メインHTMLファイル
├── css/
│   └── style.css          # スタイルシート
├── js/
│   └── app.js             # メインアプリケーションロジック
├── data/
│   ├── characters.js      # キャラクターデータ
│   └── organizations.js   # 組織データ
└── README.md              # このファイル
```

## データの追加方法

### キャラクターを追加

`data/characters.js` に以下の形式で追加：

```javascript
{
  id: "charXX",
  name: "キャラクター名",
  nameEn: "Character Name",
  birthDate: "M月D日",
  age: 30,
  height: "XXcm",
  weight: "XXkg",
  bloodType: "O型",
  role: "役職・役割",
  organization: "所属組織名",
  quote: "セリフ",
  publicFace: "表の顔",
  belief: "信念・信条",
  artist: "イラスト作成者",
  description: "キャラクターの概要説明",
  abilities: [
    { name: "能力名", description: "能力の説明" }
  ],
  weapons: [
    { name: "武装名", description: "武装の説明" }
  ],
  imageUrl: "キャラクターイラストのURL"
}
```

### 組織を追加

`data/organizations.js` に以下の形式で追加：

```javascript
{
  id: "orgXX",
  name: "組織名",
  nameEn: "Organization Name",
  faction: "流派",
  description: "組織の概要説明",
  quote: "セリフ",
  logo: "組織ロゴのURL",
  members: [
    {
      characterId: "charXX",
      name: "キャラクター名",
      title: "肩書・役職"
    }
  ]
}
```

## ブラウザ対応

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 技術仕様

- **HTML5**: セマンティックマークアップ
- **CSS3**: グリッドレイアウト、フレックスボックス、トランジション
- **Vanilla JavaScript**: フレームワーク不要、ES6+対応

## ライセンス

MIT License

## 作成者

Alforte121R