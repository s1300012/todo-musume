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
import chara2_60_3 from "../../assets/charamovies/character2/ソフィア-60-コーヒー苦い.png"
import chara2_80_1 from "../../assets/charamovies/character2/ソフィア-80-夜景-告白大作戦.png"
import chara2_80_2 from "../../assets/charamovies/character2/ソフィア-80-夜景-告白大成功.png"
import chara2_100_1 from "../../assets/charamovies/character2/ソフィア-100-ベッド-恥ずかしい.png"
import chara2_100_2 from "../../assets/charamovies/character2/白鷺ソフィア-100-全部あなたに委ねる略して全部あなる.png"
import chara2_100_3 from "../../assets/charamovies/character2/ソフィア-100-ベッド-大きなイチモツに驚愕.png"
import chara2_100_4 from "../../assets/charamovies/character2/ソフィア-100-ベッド-大きなイチモツ挿入.png"
import chara2_100_5 from "../../assets/charamovies/character2/ソフィア-100-ベッド-イくまであと5秒.png"

import chara3_40 from "../../assets/charamovies/character3/東雲懐季-20.40-バンザイ.png"
import chara3_60_1 from "../../assets/charamovies/character3/東雲懐季-60-むすっと生理パンパンツマン.png"
import chara3_60_2 from "../../assets/charamovies/character3/東雲懐季-60-照れ笑い.png"
import chara3_80_1 from "../../assets/charamovies/character3/東雲懐季-80-息を吐く.png"
import chara3_80_2 from "../../assets/charamovies/character3/東雲懐季-80-告白.png"
import chara3_80_3 from "../../assets/charamovies/character3/東雲懐季-80-告白成功.png"
import chara3_100_1 from "../../assets/charamovies/character3/東雲懐季-100-ベッドぎゅっと抱きしめて.png"
import chara3_100_2 from "../../assets/charamovies/character3/東雲懐季-100-ベッド驚き桃の木.png"
import chara3_100_3 from "../../assets/charamovies/character3/東雲懐季-100-ベッド驚き桃の木寄り.png"
import chara3_100_4 from "../../assets/charamovies/character3/東雲懐季-100-ベッド目瞑り.png"

import chara1_20_M from "../../assets/music/chara1/ふん.mp3"
import chara1_40_M from "../../assets/music/chara1/やるじゃん.mp3"
import chara1_60_1_M from "../../assets/music/chara1/こうえいに.mp3"
import chara1_60_2_M from "../../assets/music/chara1/めざせ.mp3"
import chara1_80_1_M from "../../assets/music/chara1/もう.mp3"
import chara1_80_2_M from "../../assets/music/chara1/うれしい.mp3"
import chara1_100_1_M from "../../assets/music/chara1/ねえ.mp3"
import chara1_100_2_M from "../../assets/music/chara1/ふふ.mp3"

import chara2_20_M from "../../assets/music/chara2/こらこら.mp3"
import chara2_40_M from "../../assets/music/chara2/はやいね.mp3"
import chara2_60_1_M from "../../assets/music/chara2/ふぁ.mp3"
import chara2_60_2_M from "../../assets/music/chara2/ありがとう.mp3"
import chara2_60_3_M from "../../assets/music/chara2/にがてだわ.mp3"
import chara2_80_1_M from "../../assets/music/chara2/あのね.mp3"
import chara2_80_2_M from "../../assets/music/chara2/すきだよそふぃ.mp3"
import chara2_100_M from "../../assets/music/chara2/やてぃひをゃ.mp3"

import chara3_20_M from "../../assets/music/chara3/いいねえ.mp3"
import chara3_40_M from "../../assets/music/chara3/応援してるよ.mp3"
import chara3_60_1_M from "../../assets/music/chara3/よーし.mp3"
import chara3_80_1_M from "../../assets/music/chara3/緊張する.mp3"
import chara3_80_2_M from "../../assets/music/chara3/夢みたい.mp3"
import chara3_100_M from "../../assets/music/chara3/すきだよ.mp3"


export type MovieChara = {
    id: number;
    scene: string;
    characterId: number;
    affectionlevel: number;
    image: string;
    voice: string;
    words: string[];
  };
  

  // ココア
  export const movieChara1: MovieChara[] = [
    { id: 1, scene: "1",characterId: 1, affectionlevel: 2, image: chara1_40, voice: chara1_20_M,
        words: [
            "ちょっとはやるじゃないっ!",
        ]
    },
    { id: 2, scene: "2", characterId: 1, affectionlevel: 3, image: chara1_40, voice: chara1_40_M,
        words: [
            "結構やるじゃんおにーさん",
            "ちょーーっとだけびっくりしちゃったかも",
        ]
    },
    { id: 3, scene: "3-1", characterId: 1, affectionlevel: 4, image: chara1_60_1, voice: chara1_60_1_M,
        words: [
            "私の美声を聞けることを光栄に思うことね。",
            "おにーさん💕"
        ]
    },
    { id: 4, scene: "3-2", characterId: 1, affectionlevel: 4, image: chara1_60_2, voice: chara1_60_2_M,
        words: [
            "インフルエンサーとカラオケなんて一生分の運使ったんじゃないの？?",
            "来たからにはたくさん歌うよー！"
        ]
    },
    { id: 5, scene: "4-1", characterId: 1, affectionlevel: 5, image: chara1_80_1, voice: chara1_80_1_M,
        words: [
            "あーもう💢💕",
            "一度しか言わないからね！！",
            "「username」！！私の永遠の下僕になりなさい！！",
            "...........",
            "どうなの！驚いていないで、なんか返事しなさいよ"
        ]
    },
    { id: 6, scene: "4-2", characterId: 1, affectionlevel: 5, image: chara1_80_2, voice: chara1_80_2_M,
        words: [
            "一生私しか見れないようにしてあげるからね。",
        ]
    },
    { id: 7, scene: "5-1", characterId: 1, affectionlevel: 6, image: chara1_100_1, voice: chara1_100_1_M,
        words: [
            "ねぇ…ほんとにいいの？",
            "……あんた、責任取るんでしょ？",
            "ふふっ、冗談じゃないよ？",
            "…私、初めてなんだから…",
        ]
    },
    { id: 8, scene: "5-2", characterId: 1, affectionlevel: 6, image: chara1_100_2, voice: chara1_100_2_M,
        words: [
            "「username」 ふふ..離さないから💕。"
        ]
    },
  ];


  // ソフィア
  export const movieChara2: MovieChara[] = [
    { id: 1, scene: "1", characterId: 2, affectionlevel: 2, image: chara2_40, voice: chara2_20_M,
        words: [
            "まだまだ油断しちゃダメだよ。",
        ]
    },
    { id: 2, scene: "2", characterId: 2, affectionlevel: 3, image: chara2_40, voice: chara2_40_M,
        words: [
            "ふーん。もう終わったんだ。",
            "やるじゃん"
        ]
    },
    { id: 3, scene: "3-1", characterId: 2, affectionlevel: 4, image: chara2_60_1, voice: "",
        words: [
            "私、アイスココアでお願いします。",
            "今日は服装違う？　ふふ…　デートだからね。",
        ]
    },
    { id: 4, scene: "3-2", characterId: 2, affectionlevel: 4, image: chara2_60_2, voice: chara2_60_1_M,
        words: [
            "可愛い？！",
        ]
    },
    { id: 5, scene: "3-3", characterId: 2, affectionlevel: 4, image: chara2_60_2, voice: chara2_60_2_M,
        words: [
            "かっこいいは言われ慣れているけど可愛いは初めてだなー。",
        ]
    },
    { id: 6, scene: "3-4", characterId: 2, affectionlevel: 4, image: chara2_60_3, voice: "",
        words: [
            "「username」くんはコーヒー飲むのね…。",
            "一口頂戴…",
        ]
    },
    { id: 7, scene: "3-5", characterId: 2, affectionlevel: 4, image: chara2_60_3, voice: chara2_60_3_M,
        words: [
            "うっ..こんなの飲んでるの？"
        ]
    },
    { id: 8, scene: "4-1", characterId: 2, affectionlevel: 5, image: chara2_80_1, voice: chara2_80_1_M,
        words: [
            "君と過ごしていく中で気づいたことがあるの。",
            "好きとか、言葉にするの苦手だけど。「username」には、言いたい",
            "うまく言えないけど…",
            "ずっと、あんたのこと見てた。",
        ]
    },
    { id: 9, scene: "4-2", characterId: 2, affectionlevel: 5, image: chara2_80_2, voice: chara2_80_2_M,
        words: [
            "好きだよ。",
            "ふふ…これから、楽しみにしてなよ。私、わりと独占欲強いから"
        ]
    },
    { id: 10, scene: "5-1", characterId: 2, affectionlevel: 6, image: chara2_100_1, voice: "",
        words: [
            "…この距離も、あなたの温度も、全部…初めて。",
        ]
    },
    { id: 11, scene: "5-2", characterId: 2, affectionlevel: 6, image: chara2_100_2, voice: "",
        words: [
            "…怖いわけじゃない。",
            "ただ…ちゃんと、あなたに知ってほしいの。",
        ]
    },
    { id: 12, scene: "5-3", characterId: 2, affectionlevel: 6, image: chara2_100_3, voice: "",
        words: [
            "緊張するね...",
        ]
    },
    { id: 13, scene: "5-4", characterId: 2, affectionlevel: 6, image: chara2_100_4, voice: "",
        words: [
            "username。",
        ]
    },
    { id: 14, scene: "5-5", characterId: 2, affectionlevel: 6, image: chara2_100_5, voice: chara2_100_M,
        words: [
            "я тебя люблю(愛してる）",
        ]
    },
  ];

  export const movieChara3: MovieChara[] = [
    { id: 1, scene: "1", characterId: 3, affectionlevel: 2, image: chara3_40, voice: chara3_20_M,
        words: [
            "その調子その調子！！",
        ]
    },
    { id: 2, scene: "2", characterId: 3, affectionlevel: 3, image: chara3_40, voice: chara3_40_M,
        words: [
            "引き続き今日のTodo進めちゃおう！！",
        ]
    },
    { id: 3, scene: "3-1", characterId: 3, affectionlevel: 4, image: chara3_60_1, voice: "",
        words: [
            "どこでもいいと言ったけど、観覧車って💦",
            "私高いとこ苦手って知ってるよね…",
        ]
    },
    { id: 4, scene: "3-2", characterId: 3, affectionlevel: 4, image: chara3_60_2, voice: chara3_60_1_M,
        words: [
            "でも、喜んでくれるならいいか…笑",
            "今日はたくさん楽しも！！"
        ]
    },
    { id: 5, scene: "4-1", characterId: 3, affectionlevel: 5, image: chara3_80_1, voice: chara3_80_1_M,
        words: [
            "ふぅ..ふぅ… ",
            "言うぞ…",
        ]
    },
    { id: 6, scene: "4-2", characterId: 3, affectionlevel: 5, image: chara3_80_2, voice: "",
        words: [
            "いつも一緒にいてくれてありがとね！！",
            "でも、幼馴染のままなんて嫌だ！！",
            "私の彼氏になってください！！",
            "はぁ　言っちゃった…",
        ]
    },
    { id: 7, scene: "4-3", characterId: 3, affectionlevel: 5, image: chara3_80_3, voice: chara3_80_2_M,
        words: [
            "ほんとに嬉しい..! ",
            "これからもよろしくね💕"
        ]
    },
    { id: 8, scene: "5-1", characterId: 3, affectionlevel: 6, image: chara3_100_1, voice: "",
        words: [
            "……昔から、こうなる気がしてた。",
            "…でも、いざってなると…緊張する、ね。",
        ]
    },
    { id: 9, scene: "5-2", characterId: 3, affectionlevel: 6, image: chara3_100_2, voice: "",
        words: [
            "…ねぇ、手、握ってて。…離さないで。",
        ]
    },
    { id: 10, scene: "5-3", characterId: 3, affectionlevel: 6, image: chara3_100_3, voice: "",
        words: [
            ""
        ]
    },
    { id: 11, scene: "5-4", characterId: 3, affectionlevel: 6, image: chara3_100_4, voice: chara3_100_M,
        words: [
            "「username」、好きだよ。"
        ]
    },
  ];