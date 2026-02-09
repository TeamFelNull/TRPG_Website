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
      { name: "大狼家", role: "三女" },
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
    bloodType: "判別不能",
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
  {
    id: "char05",
    name: "神喰 梓",
    nameEn: "KANBAMI Azusa",
    birthDate: "12月13日",
    age: 21,
    height: "160cm",
    weight: "56kg",
    bloodType: "判別不能",
    role: "鍔鑿組",
    organizations: [
      { name: "ヴァナルガンド終極技術発展局", role: "第一成功例" },
    ],
    quote: "「生存第一！それが隊長命令だよ！」",
    publicFace: "警備部隊長",
    belief: "忠",
    artist: "アルフォルテ(@RAB1201)",
    description: "【ヴァナルガンド終極技術発展局】による【神喰らい】計画の第一成功例の女性\n妖魔の力を搭載した武器を使用可能で、血を媒介に対象の力を吸収することもできる\n仲間との絆や友情を何よりも重視し、任務よりも命を優先する性格で仲間を優先し、自らを疎かにする為、部隊員に心配されている\nまた、魔王流の家系出身だが、妖魔の力を遺伝させることが出来ず、出来損ないとして家を出た過去がある",
    abilities: [
      { name: "BE渇蝕遺伝子：適合率84%", description: "複数の妖魔の遺伝子を混ぜ、調整を行った遺伝子\n神喰らい計画の最初期の実験で作られた物で、当時は妖魔の純度が遺伝子の質に影響を及ぼすと発覚しておらず、複数の妖魔の力を操ることを目標に複数の遺伝子を混ぜた結果、身体強化などは行われているが特殊な力などは発現しなかった" },
    ],
    weapons: [
      { name: "神機【想魔】", description: "グリム・インダストリアル製の試作特殊生体武装\n様々な妖魔の遺伝子をコアに組み込み、BE渇蝕遺伝子を強制的に抑えつけている" },
    ],
    imageUrl: "https://github.com/TeamFelNull/TRPG_Website/blob/main/images/hasuba/char05.png?raw=true"
  },
  {
    id: "char06",
    name: "時宮 夕理",
    nameEn: "TOKIMIYA Yuri",
    birthDate: "1月9日",
    age: 11,
    height: "149cm",
    weight: "46kg",
    bloodType: "A型",
    role: "大槌群",
    organizations: [
      { name: "時宮家", role: "三男" },
    ],
    quote: "「カッコいい探偵を目指して！いざ、勝負！...だよ！」",
    publicFace: "学生(初等部)",
    belief: "和",
    artist: "ふあそらさん(@ggggsor)",
    description: "とある怪異探偵と時間旅行者の女性の間に生まれた男子\nおっちょこちょいの、のんびり系男子\nお父さんみたいにカッコいい探偵になりたいと思っている\n自他共に特に認識していないが、思ったより荒っぽく大雑把な性格",
    abilities: [
      { name: "幼い才能", description: "座学にも力を入れ、身体能力は常人の域を逸脱しており、高い運動神経を発揮する...が、幼さ故に身体能力を上手く扱えていない" },
      { name: "遺伝能力：怪異支配", description: "任意で自分の周りの怪異を従えさせる能力\nまた、【錬智】との併用で怪異の修復も可能\n父の怪異に魅入られる体質と、母の時間を操る力が融合、変質した能力" },
    ],
    weapons: [
      { name: "怪異斧【錬智】", description: "父から貰った傑作怪異武器、その一本\n新緑のスパナのような外見が特徴\n怪異武器の整備、調整に役立つこともある" },
      { name: "工房外套【幽陽】", description: "夕理の着用する外套\n動きやすく頑丈に仕上げられている" },
    ],
    imageUrl: "https://github.com/TeamFelNull/TRPG_Website/blob/main/images/hasuba/char06.png?raw=true"
  },
  {
    id: "char07",
    name: "加賀瀬 一粋",
    nameEn: "KAGASE Hisui",
    birthDate: "1月11日",
    age: 34,
    height: "171cm",
    weight: "67kg",
    bloodType: "B型",
    role: "指矩班",
    organizations: [
      { name: "加賀瀬家", role: "父" },
    ],
    quote: "「アイツの忘れ形見...何が何でも守って見せるさ」",
    publicFace: "警備員",
    belief: "我",
    artist: "アルフォルテ(@RAB1201)",
    description: "一人の妹と娘を持つ、私立御斎学園出身の男\n学生時代は成績優秀だが自分勝手で素行に難があり、短絡的な性格と思われていたが、一部素行不良は妹を守る為の演技であり、根は腐っていない\n学生時代のとある任務をきっかけに同級生の女性と結婚、卒業後は斜歯忍軍の研究所警備員として職を得た\n妻を娘が小さい頃に亡くし、現在は男手一つで娘を育てている",
    abilities: [
      { name: "アスモデウスの【赫】蠍", description: "自らが契約している悪魔の力をその身に顕現させる能力、学生時代の二つ名でもある\n周囲の血を様々な形状に加工/制御し、特殊な防御結界を展開することが出来る" },
    ],
    weapons: [
      { name: "超伝導グラディウス【道拓】", description: "とある鍛冶師が鍛えた名剣\n今は亡き彼は親友に願ったという...\n闇により道が分からぬ時、己の道を斬り拓いて欲しい...と\nその灼熱の刀身は暗闇を照らし、あらゆる障害を燃やし貫き照らす" },
      { name: "仕込み槍【飢餓】", description: "一般にシノビ達の間で流通している仕込み槍\n特殊な機能はないが、圧縮性と剛性に目を見張るものがあり、予備兵装として愛用する者も多い" },
    ],
    imageUrl: "https://github.com/TeamFelNull/TRPG_Website/blob/main/images/hasuba/char07.png?raw=true"
  },
  {
    id: "char08",
    name: "大狼 歴",
    nameEn: "OOGAMI Reki",
    birthDate: "9月21日",
    age: 17,
    height: "166cm",
    weight: "56kg",
    bloodType: "A型",
    role: "指矩班",
    organizations: [
      { name: "大狼家", role: "次女" },
    ],
    quote: "「武装性能試験開始...突撃槍【ヴァースト】起動するッ！」",
    publicFace: "傭兵",
    belief: "和",
    artist: "アルフォルテ(@RAB1201)",
    description: "とある日本狼の群れで生まれた白銀の狼の少女\n小さい頃に人間による狼狩りで家族を失い、一人逃げ延び、傭兵として生き延びてきた\n口数が少なく、必要最低限の会話しかしないものの、世話は焼いてくれる仲間想いな性格\n傭兵として生きてきた経験がある為、様々な武器の運用、調整に関して鋭い感性を持っており自慢でもある",
    abilities: [
      { name: "俊狼の脚", description: "歴が生まれつき持つ強力な力\n狼として感覚はとても鋭く、突撃時の動きはシノビの目にも留まることはない獣の脚" },
    ],
    weapons: [
      { name: "突撃槍【ヴァースト】", description: "グリム・インダストリアルから送られてきた突撃槍\n内部に連射可能なブースターが取り付けられており、突撃時だけでなく、刺した後にも使用することで連続した衝撃を敵へ与える" },
    ],
    imageUrl: "https://github.com/TeamFelNull/TRPG_Website/blob/main/images/hasuba/char08.png?raw=true"
  },
  {
    id: "char09",
    name: "R・A・B",
    nameEn: "Reiya・Al・Blitzer",
    birthDate: "	12月01日",
    age: "■■",
    height: "160cm",
    weight: "69kg",
    bloodType: "O型",
    role: "御釘衆",
    organizations: [
      { name: "所属なし", role: "" },
    ],
    quote: "「これが、師匠直伝の抜刀術だッ！」",
    publicFace: "アークス/守護輝士",
    belief: "和",
    artist: "ふあそらさん(@ggggsor)",
    description: "宇宙から落下してきたと思われるカプセルの様なものから発見された、武器マニアのメガネっ子ヒューマン\n怠け癖があり、武器以外の事には無頓着、記憶喪失らしいのだが特に気にしてはいない上、クラスはファントム...などと名乗っている\n一度死亡したが、元々失う記憶もなく、【獄】に監禁されることもなく黄泉還った\n元ネタはPSO2の自キャラ",
    abilities: [
      { name: "未来的な科学技術", description: "現代の技術とは思えない未来的な科学技術を扱い、居合を行う\nその眼は刹那を見切ると言われている" },
    ],
    weapons: [
      { name: "ディナイアルワン", description: "特殊な機能を備えたアサルトライフル\n変形し、弓とすることも出来れば、ストックを引き抜くことで刀としても使用できる逸品" },
    ],
    imageUrl: "https://github.com/TeamFelNull/TRPG_Website/blob/main/images/hasuba/char09.png?raw=true"
  },
];
