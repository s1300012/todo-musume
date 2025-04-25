// src/utils/constants/characters.ts
import character1 from "../../assets/characters/stand-image/character1.png";
import character2 from "../../assets/characters/stand-image/character2.png";
import character3 from "../../assets/characters/stand-image/character3.png";
import character1Card from "../../assets/characters/card-image/character_1.jpg";
import character2Card from "../../assets/characters/card-image/character_2.jpg";
import character3Card from "../../assets/characters/card-image/character_3.jpg";
import character1Top from "../../assets/characters/top-body-image/charecter1.jpg";
import character2Top from "../../assets/characters/top-body-image/character2.jpg";
import character3Top from "../../assets/characters/top-body-image/character3.jpg";
import pink from "../../assets/characters/select-icon/pink.png";
import blue from "../../assets/characters/select-icon/blue.png";
import yellow from "../../assets/characters/select-icon/yellow.png";

export type CharacterStand = {
  id: number;
  name: string;
  image: string;
  message: string;
};

export const charactersStand: CharacterStand[] = [
  { id: 1, name: "御影心愛", image: character1, message: "サボってないで！ほら、早く！"},
  { id: 2, name: "白鷺ソフィア", image: character2, message: "次は何をするの？"},
  { id: 3, name: "東雲懐季", image: character3, message: "がんばれ！がんばれ〜！"},
];

export type CharacterCard = {
  id: number;
  name: string;
  image: string;
  description: CharacterDescription;
};

export type CharacterDescription = {
  full_name: string;
  name_kana: string;
  age: string;
  grade: string;
  height: string;
  from: string;
  birth: string;
  star: string;
  blood: string;
  hobby: string;
  like: string;
  unlike: string;
  three_size: string;
  feature: string;
  coment: string;
};

export const charactersCard: CharacterCard[] = [
  { id: 1, name: "御影 心愛", image: character1Card,
    description: {
    full_name: "名前: 御影 心愛",
    name_kana: "読み仮名: みかげ ここあ",
    age: "年齢: 20",
    grade: "学年: 大学２年生",
    height: "身長: 143.5cm", 
    from: "出身地/国籍: 東京/日本",
    birth: "誕生日: 4月20日",
    star: "星座: 牡羊座",
    blood: "血液型: B型",
    hobby: "趣味・特技: コスメ、エゴサーチ",
    like: "好きなもの: 自分、マシュマロ",
    unlike: "嫌いなもの: 虫、高層ビル",
    three_size:"スリーサイズ: B74 / W54 / H77",
    feature: "低身長 × 貧乳設定 ＋ インフルエンサー志望の可愛らしいスタイル",
    coment: `一言メモ: 大学の後輩。小さくて可愛いと言われるが、本人は気にしている。
    インフルエンサーを目指し、SNSに力を入れているが、あまり成果は出ていない。`
    }
  },
  { id: 2, name: "白鷺 ソフィア", image: character2Card, 
    description: {
      full_name: "名前: 白鷺 ソフィア",
      name_kana: "読み仮名: しらさぎ そふぃあ", 
      age: "年齢: 24",
      grade: "学年: 社会人２年目",
      height: "身長: 162cm", 
      from: "出身地/国籍: ロシア/日本",
      birth: "誕生日: 12月23日",
      star: "星座: 山羊座",
      blood: "血液型: A型",
      hobby: "読書、スノースポーツ",
      like: "好きなもの: 辛い食べ物、イヤリング",
      unlike: "嫌いなもの: ブラックコーヒー、暑いところ",
      three_size:"スリーサイズ: B83 / W58 / H83",
      feature: "落ち着いた大人の女性らしいバランス型 ＋ 上品なスタイル感を意識",
      coment: `一言メモ: ロシアと日本のハーフ。だが、生まれがロシアなだけで、ほとんどロシア語は話せない。
      容姿から恋愛経験が豊富と思われがちだが、本人は恋愛経験はゼロ`
      }
  },
  { id: 3, name: "東雲 懐季", image: character3Card,
    description: {
      full_name: "名前: 東雲 懐季",
      name_kana: "読み仮名: しののめ なつき", 
      age: "年齢: 22",
      grade: "学年: 大学4年生",
      height: "身長: 157cm", 
      from: "出身地/国籍: 東京/日本",
      birth: "誕生日: 8月20日",
      star: "星座: 獅子座",
      blood: "血液型: O型",
      hobby: "趣味・特技: ビーフシチュー、犬",
      like: "好きなもの: 自分、マシュマロ",
      unlike: "嫌いなもの: 高いところ、春菊",
      three_size:"スリーサイズ: B82 / W55 / H77",
      feature: "低身長×貧乳設定＋インフルエンサー志望の可愛らしいスタイル",
      coment: `一言メモ: 幼稚園からの幼馴染。しっかりしてると思われがちだが、案外ズボラ。
        最近、食べ過ぎにより、体重が増加。ダイエットを考えている。`
    }},
];

export type CharacterTop = {
  id: number;
  name: string;
  image: string;
};

export const charactersTop: CharacterTop[] = [
  { id: 1, name: "御影心愛", image: character1Top},
  { id: 2, name: "白鷺ソフィア", image: character2Top},
  { id: 3, name: "東雲懐季", image: character3Top},
];

export type SelectIcon = {
  id: number;
  image: string;
};

export const selectIcons: SelectIcon[] = [
  { id: 1, image: pink},
  { id: 2, image: blue},
  { id: 3, image: yellow},
];