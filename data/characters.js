// Character Database
const characters = [
  {
    id: "char01",
    name: "葦原 レイチェル",
    nameEn: "ASHIHARA Rachel",
    birthDate: "11月20日",
    age: 21,
    height: "178cm",
    weight: "69kg",
    bloodType: "A型",
    role: "斜歯忍軍",
    organization: "ヴァナルガンド終極技術発展局",
    quote: "「はぁ...また失敗？ 実験体はすぐに放棄、殺しておきなさい？」",
    organizations: [
      { name: "ヴァナルガンド終極技術発展局", role: "所長" },
    ],
    belief: "我",
    artist: "アルフォルテ(@RAB1201)",
    description: "ヴァナルガンド終極技術発展局の局長\n実験による犠牲を是とし、自己犠牲は嫌う正真正銘のクズ",
    abilities: [
      { name: "研究能力", description: "実験の為ならあらゆる犠牲を躊躇わず払い、予算と実験体さえいれば驚異的な成果を出す" },
      { name: "潔癖症", description: "他人の犠牲は厭わないが、自分の身を使うことは【美しい身体が穢れる】という理由で拒否する" },
    ],
    weapons: [
      { name: "電磁刀【予定調和】", description: "ヴァナルガンド終極技術発展局製、試作兵装\n神喰らい計画で適合に成功した遺伝子情報を剣に内蔵している" },
    ],
    imageUrl: "https://github.com/TeamFelNull/TRPG_Website/blob/main/images/hasuba/char01.png?raw=true"
  },
  {
    id: "char02",
    name: "大狼 灰音",
    nameEn: "OOGAMI Haine",
    birthDate: "10月21日",
    age: 17,
    height: "162cm",
    weight: "48kg",
    bloodType: "A型",
    role: "斜歯忍軍",
    organizations: [
      { name: "ヴァナルガンド終極技術発展局", role: "主席研究員" },
    ],
    quote: "「...はい、実験は完了です。この程度の成果なら、次の段階に移行出来そうです」",
    publicFace: "からくり技師",
    belief: "和",
    artist: "アルフォルテ(@RAB1201)",
    description: "とある日本狼の群れで生まれた白銀の狼の少女\n小さい頃に人間による狼狩りで家族を失い、一人逃げ延びたところを斜歯忍軍に捕らえられた\n頭脳面で優秀な成績を見せた事で、実験体ではなく研究員の一人として雇用されるようになった\n誰であろうと心を開く素振りは見せず、孤独になりがちな性格で再びただの実験動物になることを極端に恐れ、自分の価値を示そうと躍起になっている",
    abilities: [
      { name: "灰狼の瞳", description: "灰音が生まれつき持つ特殊な力\nどんな敵に存在するはずの隙や脆弱性を看破できる獣の瞳" },
    ],
    weapons: [
      { name: "石槌【灰塵】", description: "灰音が最初に製作したからくり武器\n槌の中に剣が仕込まれており、抜剣の際に槌内部で摩擦熱を増幅し、全てを焼き切る灼熱の刃となる" },
    ],
    imageUrl: "https://github.com/TeamFelNull/TRPG_Website/blob/main/images/hasuba/char02.png?raw=true"
  },
  {
    id: "char03",
    name: "海鳴 姫",
    nameEn: "UMINARI Hime",
    birthDate: "1月21日",
    age: 23,
    height: "167cm",
    weight: "56kg",
    bloodType: "O型",
    role: "斜歯忍軍",
    organizations: [
      { name: "ヴァナルガンド終極技術発展局", role: "第五成功例" },
    ],
    quote: "「おぉ！もしかすれば、月間斜歯の今アツい若手シノビ達10選にも選ばれるかもしれぬ...！！」",
    publicFace: "大学生",
    belief: "我",
    artist: "アルフォルテ(@RAB1201)",
    description: "【ヴァナルガンド終極技術発展局】による【神喰らい】計画の第五成功例の女性\n自身の物含めた周囲の血液を操ることが出来る人口吸血鬼\n現在は発展局の異界探索忍務を担当しており、夢見がちな性格でよく勇敢と無謀を履き違える",
    abilities: [
      { name: "LM夢蝕遺伝子：適合率93%", description: "通称、ノスフェラトゥと呼ばれる妖魔の遺伝子\n討伐後の死体から採取された物で、特殊な力の一端が刻まれている" },
    ],
    weapons: [
      { name: "神機【模機】", description: "グリム・インダストリアル製の試作特殊生体模擬武装\n使い手と同様の妖魔の遺伝子をコアに組み込み、遺伝子適合率をある程度補強してくれる機能を持つ" },
    ],
    imageUrl: "https://github.com/TeamFelNull/TRPG_Website/blob/main/images/hasuba/char03.png?raw=true"
  },
  {
    id: "char04",
    name: "國立 飛花",
    nameEn: "KOKURYU Hibana",
    birthDate: "5月25日",
    age: 0,
    height: "154cm",
    weight: "80kg",
    bloodType: "None",
    role: "鍔鑿組",
    organizations: [
      { name: "國立家", role: "次女" },
      { name: "國立家", role: "次女" },
    ],
    quote: "「パパ！お姉ちゃん！！大好き！！！」",
    publicFace: "AI",
    belief: "情",
    artist: "アルフォルテ(@RAB1201)",
    description: "正式名称：SK-02-HIBANA\n斜歯忍軍の開発プロジェクトのデータを勝手に流用したとある男により開発されたAI\n専用の義体と武装も開発されており國立家次女として姉を支援しており、年相応...ではないが、かなり子供っぽい性格\n開発者であるパパとお姉ちゃんが大好き",
    abilities: [
      { name: "専用義体【知龍】", description: "斜歯忍軍謹製の索敵能力や状況把握能力に優れた飛花専用義体\n武装に積みきれない照準演算や反動制御を全て自身で処理し、時と場合に応じて新しいシステムをインストールすることも可能\n他にも斜歯の土機竜計画から得たデータを基に改修され、リミッターを解除することで奥義を発動させることが出来る" },
    ],
    weapons: [
      { name: "神機【模機】", description: "グリム・インダストリアル製の試作特殊生体模擬武装\n使い手と同様の妖魔の遺伝子をコアに組み込み、遺伝子適合率をある程度補強してくれる機能を持つ" },
    ],
    imageUrl: "https://github.com/TeamFelNull/TRPG_Website/blob/main/images/hasuba/char04.png?raw=true"
  },
];
