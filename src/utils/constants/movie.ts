import chara1_40 from "../../assets/charamovies/character1/chara1_20_40.jpg"
import chara1_60_1 from "../../assets/charamovies/character1/chara1_60_1.jpg"
import chara1_60_2 from "../../assets/charamovies/character1/chara1_60_2.jpg"
import chara1_80_1 from "../../assets/charamovies/character1/chara1_80_1.jpg"
import chara1_80_2 from "../../assets/charamovies/character1/chara1_80_2.jpg"
import chara1_100_1 from "../../assets/charamovies/character1/chara1_100_1.jpg"
import chara1_100_2 from "../../assets/charamovies/character1/chara1_100_2.jpg"

import chara2_40 from "../../assets/charamovies/character2/chara2_20_40.jpg"
import chara2_60_1 from "../../assets/charamovies/character2/chara2_60_1.jpg"
import chara2_60_2 from "../../assets/charamovies/character2/chara2_60_2.jpg"
import chara2_60_3 from "../../assets/charamovies/character2/chara2_60_3.jpg"
import chara2_60_4 from "../../assets/charamovies/character2/chara2_60_4.jpg"
import chara2_80_1 from "../../assets/charamovies/character2/chara2_80_1.jpg"
import chara2_80_2 from "../../assets/charamovies/character2/chara2_80_2.jpg"
import chara2_100_1 from "../../assets/charamovies/character2/chara2_100_1.jpg"
import chara2_100_2 from "../../assets/charamovies/character2/chara2_100_2.jpg"
import chara2_100_3 from "../../assets/charamovies/character2/chara2_100_3.jpg"
import chara2_100_4 from "../../assets/charamovies/character2/chara2_100_4.jpg"
import chara2_100_5 from "../../assets/charamovies/character2/chara2_100_5.jpg"

import chara3_40 from "../../assets/charamovies/character3/chara3_20_40.jpg"
import chara3_60_1 from "../../assets/charamovies/character3/chara3_60_1.jpg"
import chara3_60_2 from "../../assets/charamovies/character3/chara3_60_2.jpg"
import chara3_80_1 from "../../assets/charamovies/character3/chara3_80_1.jpg"
import chara3_80_2 from "../../assets/charamovies/character3/chara3_80_2.jpg"
import chara3_80_3 from "../../assets/charamovies/character3/chara3_80_3.jpg"
import chara3_100_1 from "../../assets/charamovies/character3/chara3_100_1.jpg"
import chara3_100_2 from "../../assets/charamovies/character3/chara3_100_2.jpg"
import chara3_100_3 from "../../assets/charamovies/character3/chara3_100_3.jpg"
import chara3_100_4 from "../../assets/charamovies/character3/chara3_100_4.jpg"

import chara1_20_M from "../../assets/music/chara1/chara1_hun.mp3"
import chara1_40_M from "../../assets/music/chara1/chara1_yarujan.mp3"
import chara1_60_1_M from "../../assets/music/chara1/chara1_koueini.mp3"
import chara1_60_2_M from "../../assets/music/chara1/chara1_mezase.mp3"
import chara1_80_1_M from "../../assets/music/chara1/chara1_mou.mp3"
import chara1_80_2_M from "../../assets/music/chara1/chara1_geboku.mp3"
import chara1_80_3_M from "../../assets/music/chara1/chara1_happy.mp3"
import chara1_100_1_M from "../../assets/music/chara1/chara1_nee.mp3"
import chara1_100_2_M from "../../assets/music/chara1/chara1_huhu.mp3"

import chara2_20_M from "../../assets/music/chara2/chara2_korakora.mp3"
import chara2_40_M from "../../assets/music/chara2/chara2_hayaine.mp3"
import chara2_60_1_M from "../../assets/music/chara2/chara2_fa.mp3"
import chara2_60_2_M from "../../assets/music/chara2/chara2_arigatou.mp3"
import chara2_60_3_M from "../../assets/music/chara2/chara2_nigatedawa.mp3"
import chara2_80_1_M from "../../assets/music/chara2/chara2_anone.mp3"
import chara2_80_2_M from "../../assets/music/chara2/chara2_sukidayo.mp3"
import chara2_100_M from "../../assets/music/chara2/chcara2_yafitio.mp3"

import chara3_20_M from "../../assets/music/chara3/chara3_iine.mp3"
import chara3_40_M from "../../assets/music/chara3/chara3_ouenn.mp3"
import chara3_60_1_M from "../../assets/music/chara3/chara3_yoosi.mp3"
import chara3_80_1_M from "../../assets/music/chara3/chara3_kintyou.mp3"
import chara3_80_2_M from "../../assets/music/chara3/chara3_yumemitai.mp3"
import chara3_100_M from "../../assets/music/chara3/chara3_sukidayo.mp3"


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
            "初デートがカラオケとか、おにーさんセンスなーい（笑）",
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
            "あんたに言いたい事があるの。",
            "す、す..........っ",
            "あーもう💢💕",
            "一度しか言わないからね！！",
        ]
    },
    { id: 6, scene: "4-2", characterId: 1, affectionlevel: 5, image: chara1_80_1, voice: chara1_80_2_M,
        words: [
            "「username」！！私の永遠の下僕になりなさい！！",
            "...........",
            "どうなの！驚いていないで、なんか返事しなさいよ"
        ]
    },
    { id: 7, scene: "4-3", characterId: 1, affectionlevel: 5, image: chara1_80_2, voice: chara1_80_3_M,
        words: [
            "一生私しか見れないようにしてあげるからね。",
        ]
    },
    { id: 8, scene: "5-1", characterId: 1, affectionlevel: 6, image: chara1_100_1, voice: chara1_100_1_M,
        words: [
            "ねぇ…ほんとにいいの？",
            "……あんた、責任取るんでしょ？",
            "ふふっ、冗談じゃないよ？",
            "…私、初めてなんだから…",
        ]
    },
    { id: 9, scene: "5-2", characterId: 1, affectionlevel: 6, image: chara1_100_2, voice: chara1_100_2_M,
        words: [
            "「username」",
            "ふふ..離さないから💕。"
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
            "誘ってくれてありがと。でも、私なんかとデートしてたのしい？",
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
    { id: 7, scene: "3-5", characterId: 2, affectionlevel: 4, image: chara2_60_4, voice: chara2_60_3_M,
        words: [
            "うっ..こんなの飲んでるの？"
        ]
    },
    { id: 8, scene: "4-1", characterId: 2, affectionlevel: 5, image: chara2_80_1, voice: chara2_80_1_M,
        words: [
            "急に呼び出してごめんなさい。",
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
            "「username」。",
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
            "どこでもいいと言ったけど、初デートが遊園地...",
            "しかも観覧車に乗りたいって...💦",
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
            "急に呼びだしてごめん！！",
            "と、と、突然だけど、いつも一緒にいてくれてありがとね！！",
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
            "「username」。"
        ]
    },
    { id: 11, scene: "5-4", characterId: 3, affectionlevel: 6, image: chara3_100_4, voice: chara3_100_M,
        words: [
            "好きだよ。"
        ]
    },
  ];