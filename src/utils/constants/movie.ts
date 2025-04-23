import chara1_40 from "../../assets/charamovies/character1/御影心愛-20.40-腕組み.png"
import chara1_60_1 from "../../assets/charamovies/character1/御影心愛-60-ニヤニヤ.png"
import chara1_60_2 from "../../assets/charamovies/character1/御影心愛-60-歌う.png"
import chara1_80_1 from "../../assets/charamovies/character1/御影心愛-80-告白.png"
import chara1_80_2 from "../../assets/charamovies/character1/御影心愛-80-告白成功.png"
import chara1_100_1 from "../../assets/charamovies/character1/御影心愛-100-ベッド-初めての手マン.png"
import chara1_100_2 from "../../assets/charamovies/character1/御影心愛-100-ベッド-いっぱい出して！.png"

import chara2_40 from "../../assets/charamovies/character2/ソフィア-20,40-立ち絵.png"
import chara2_60_1 from "../../assets/charamovies/character2/ソフィア-60-カフェ-鋭い眼光.png"
import chara2_60_2 from "../../assets/charamovies/character2/ソフィア-60-カフェ-あそこに違和感.png"
import chara2_60_3 from "../../assets/charamovies/character2/ソフィア-60-初めてのフェラ.png"
import chara2_80_1 from "../../assets/charamovies/character2/ソフィア-80-夜景-告白大作戦.png"
import chara2_80_2 from "../../assets/charamovies/character2/ソフィア-80-夜景-告白大成功.png"
import chara2_100_1 from "../../assets/charamovies/character2/ソフィア-100-ベッド-大きなイチモツに驚愕.png"
import chara2_100_2 from "../../assets/charamovies/character2/ソフィア-100-ベッド-大きなイチモツ挿入.png"
import chara2_100_3 from "../../assets/charamovies/character2/ソフィア-100-ベッド-イくまであと5秒.png"
import chara2_100_4 from "../../assets/charamovies/character2/ソフィア-100-ベッド-恥ずかしい.png"

import chara3_40 from "../../assets/charamovies/character3/東雲懐季-20.40-バンザイ.png"
import chara3_60_1 from "../../assets/charamovies/character3/東雲懐季-60-むすっと生理パンパンツマン.png"
import chara3_60_2 from "../../assets/charamovies/character3/東雲懐季-60-照れ笑い.png"
import chara3_80_1 from "../../assets/charamovies/character3/東雲懐季-80-息を吐く.png"
import chara3_80_2 from "../../assets/charamovies/character3/東雲懐季-80-告白.png"
import chara3_80_3 from "../../assets/charamovies/character3/東雲懐季-80-告白成功.png"
import chara3_100_1 from "../../assets/charamovies/character3/東雲懐季-100-ベッド驚き桃の木寄り.png"
import chara3_100_2 from "../../assets/charamovies/character3/東雲懐季-100-ベッド驚き桃の木.png"
import chara3_100_3 from "../../assets/charamovies/character3/東雲懐季-100-ベッド目瞑り.png"
import chara3_100_4 from "../../assets/charamovies/character3/東雲懐季-100-ベッドぎゅっと抱きしめて.png"


export type MovieChara = {
    id: number;
    scene: string;
    characterId: number;
    affectionlevel: number;
    image: string;
    words: string[];
  };
  

  // ココア
  export const movieChara1: MovieChara[] = [
    { id: 1, scene: "1",characterId: 1, affectionlevel: 2, image: chara1_40,
        words: [
            "ちょっとはやるじゃないっ!",
        ]
    },
    { id: 2, scene: "2", characterId: 1, affectionlevel: 3, image: chara1_40,
        words: [
            "結構やるじゃんおにーさん",
            "ちょーーっとだけびっくりしちゃったかも",
        ]
    },
    { id: 3, scene: "3-1", characterId: 1, affectionlevel: 4, image: chara1_60_1,
        words: [
            "私の美声を聞けることを光栄に思うことね。",
            "おにーさん💕"
        ]
    },
    { id: 4, scene: "3-2", characterId: 1, affectionlevel: 4, image: chara1_60_2,
        words: [
            "インフルエンサーとカラオケなんて一生分の運使ったんじゃないの？?",
            "来たからにはたくさん歌うよー！"
        ]
    },
    { id: 5, scene: "4-1", characterId: 1, affectionlevel: 5, image: chara1_80_1,
        words: [
            "あーもう💢💕",
            "一度しか言わないからね！！",
            "〇〇！！私の永遠の下僕になりなさい！！",
            "...........",
            "どうなの！驚いていないで、なんか返事しなさいよ"
        ]
    },
    { id: 6, scene: "4-2", characterId: 1, affectionlevel: 5, image: chara1_80_2,
        words: [
            "(わかった、一生君の下僕になるよ。)",
            "一生私しか見れないようにしてあげるからね。",
        ]
    },
    { id: 7, scene: "5-1", characterId: 1, affectionlevel: 6, image: chara1_100_1,
        words: [
            "ねぇ…ほんとにいいの？",
            "……あんた、責任取るんでしょ？",
            "ふふっ、冗談じゃないよ？",
            "…私、初めてなんだから…",
        ]
    },
    { id: 8, scene: "5-2", characterId: 1, affectionlevel: 6, image: chara1_100_2,
        words: [
            "〇〇　ふふ..離さないから💕。"
        ]
    },
  ];


  // ソフィア
  export const movieChara2: MovieChara[] = [
    { id: 1, scene: "1", characterId: 2, affectionlevel: 2, image: chara2_40,
        words: [
            "まだまだ油断しちゃダメだよ。",
        ]
    },
    { id: 2, scene: "2", characterId: 2, affectionlevel: 3, image: chara2_40,
        words: [
            "ふーん。もう終わったんだ。",
            "やるじゃん"
        ]
    },
    { id: 3, scene: "3-1", characterId: 2, affectionlevel: 4, image: chara2_60_1,
        words: [
            "私、アイスココアでお願いします。",
            "今日は服装違う？　ふふ…　デートだからね。",
        ]
    },
    { id: 4, scene: "3-2", characterId: 2, affectionlevel: 4, image: chara2_60_2,
        words: [
            "可愛い？！",
            "かっこいいは言われ慣れているけど可愛いは初めてだなー。",
        ]
    },
    { id: 5, scene: "3-3", characterId: 2, affectionlevel: 4, image: chara2_60_3,
        words: [
            "〇〇くんはコーヒー飲むのね…。",
            "一口頂戴…",
            "うっ..こんなの飲んでるの？"
        ]
    },
    { id: 6, scene: "4-1", characterId: 2, affectionlevel: 5, image: chara2_80_1,
        words: [
            "君と過ごしていく中で気づいたことがあるの。",
            "好きとか、言葉にするの苦手だけど。〇〇には、言いたい",
            "うまく言えないけど…",
            "ずっと、あんたのこと見てた。",
            "好きだよ。",
        ]
    },
    { id: 7, scene: "4-2", characterId: 2, affectionlevel: 5, image: chara2_80_2,
        words: [
            "ふふ…これから、楽しみにしてなよ。私、わりと独占欲強いから"
        ]
    },
    { id: 8, scene: "5-1", characterId: 2, affectionlevel: 6, image: chara2_100_1,
        words: [
            "…この距離も、あなたの温度も、全部…初めて。",
            "…怖いわけじゃない。",
            "ただ…ちゃんと、あなたに知ってほしいの。",
        ]
    },
    { id: 9, scene: "5-2", characterId: 2, affectionlevel: 6, image: chara2_100_2,
        words: [
            "緊張するね...💕",
            "挿れていいよ///",
            "あっっ///",
        ]
    },
    { id: 10, scene: "5-3", characterId: 2, affectionlevel: 6, image: chara2_100_3,
        words: [
            "きもちいっ//",
            "そこっ.. だめっっ//",
            "mou, ittyauyo, unununununun",
            "nakanidasite",
            "я тебя люблю(愛してる）",
            "ドピュッ"
        ]
    },
    { id: 11, scene: "5-4", characterId: 2, affectionlevel: 6, image: chara2_100_4,
        words: [
            "ふぅ....",
            "もう動けないよぉ...."
        ]
    },
  ];

  export const movieChara3: MovieChara[] = [
    { id: 1, scene: "1", characterId: 3, affectionlevel: 2, image: chara3_40,
        words: [
            "その調子その調子！！",
        ]
    },
    { id: 2, scene: "2", characterId: 3, affectionlevel: 3, image: chara3_40,
        words: [
            "引き続き今日のTodo進めちゃおう！！",
        ]
    },
    { id: 3, scene: "3-1", characterId: 3, affectionlevel: 4, image: chara3_60_1,
        words: [
            "どこでもいいと言ったけど、観覧車って💦",
            "私高いとこ苦手って知ってるよね…",
        ]
    },
    { id: 4, scene: "3-2", characterId: 3, affectionlevel: 4, image: chara3_60_2,
        words: [
            "でも、喜んでくれるならいいか…笑",
            "今日はたくさん楽しも！！"
        ]
    },
    { id: 5, scene: "4-1", characterId: 3, affectionlevel: 5, image: chara3_80_1,
        words: [
            "ふぅ..ふぅ… ",
            "言うぞ…",
        ]
    },
    { id: 6, scene: "4-2", characterId: 3, affectionlevel: 5, image: chara3_80_2,
        words: [
            "いつも一緒にいてくれてありがとね！！",
            "でも、幼馴染のままなんて嫌だ！！",
            "私の彼氏になってください！！",
            "はぁ　言っちゃった…",
        ]
    },
    { id: 7, scene: "4-3", characterId: 3, affectionlevel: 5, image: chara3_80_3,
        words: [
            "ほんとに嬉しい..! ",
            "これからもよろしくね💕"
        ]
    },
    { id: 8, scene: "5-1", characterId: 3, affectionlevel: 6, image: chara3_100_1,
        words: [
            "……昔から、こうなる気がしてた。",
            "…でも、いざってなると…緊張する、ね。",
        ]
    },
    { id: 9, scene: "5-2", characterId: 3, affectionlevel: 6, image: chara3_100_2,
        words: [
            "…ねぇ、手、握ってて。…離さないで。",
            "いいよ... ゆっくり動いてね。",
            "ああっ//",
            "気持ちいっ//"
        ]
    },
    { id: 10, scene: "5-3", characterId: 3, affectionlevel: 6, image: chara3_100_3,
        words: [
            "そこっ// だめぇ//",
            "おかしくなっちゃうぅぅぅぅ//",
            "いいよ、きて。",
            "全部私のおまんこの中に出して",
            "あっ// 私もいっちゃうっ////",
            "あぁ、くる、きちゃううぅぅ",
            "ドピュ⭐︎"
        ]
    },
    { id: 11, scene: "5-4", characterId: 3, affectionlevel: 6, image: chara3_100_4,
        words: [
            "ふう。",
            "〇〇、好きだよ。"
        ]
    },
  ];