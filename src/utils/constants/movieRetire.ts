import chara1_1 from "../../assets/charamovies/retire/御影心愛-リタイア-驚き.png"
import chara1_2 from "../../assets/charamovies/retire/御影心愛-リタイア-罵倒.png"
import chara2_1 from "../../assets/charamovies/retire/ソフィア-リタイア-驚き.png"
import chara2_2 from "../../assets/charamovies/retire/ソフィア-リタイア-罵倒.png"
import chara3_1 from "../../assets/charamovies/retire/東雲懐季-リタイア-驚き.png"
import chara3_2 from "../../assets/charamovies/retire/東雲懐季-リタイア-応援.png"

export type MovieChara = {
    id: number;
    scene: string;
    characterId: number;
    image: string;
    voice: string;
    words: string[];
};

export const movieChara1: MovieChara[] = [
  { id: 1, scene: "1",characterId: 1, image: chara1_1, voice: chara1_1,
    words: [
        "た...すくできなかった？！",
        "ふーーん、、"
    ]
    },
    { id: 2, scene: "2", characterId: 1, image: chara1_2, voice: chara1_2,
        words: [
            "まあ、おにいさんにはできないと思ったわよ....",
            "じゃあ次こそ、ちゃんと楽しませてよね？！",
        ]
    },
]

export const movieChara2: MovieChara[] = [
{ id: 1, scene: "1",characterId: 2, image: chara2_1, voice: chara1_1,
    words: [
        "… リタイア？！",
    ]
    },
    { id: 2, scene: "2", characterId: 2, image: chara2_2, voice: chara1_2,
        words: [
            "... 期待した私がバカだったみたい。",
            "……次は負けないでよね。",
        ]
    },
]

export const movieChara3: MovieChara[] = [
{ id: 1, scene: "1",characterId: 3, image: chara3_1, voice: chara1_1,
    words: [
        "へー君がリタイアするなんて珍しい...",
    ]
    },
    { id: 2, scene: "2", characterId: 3, image: chara3_2, voice: chara1_2,
        words: [
            "でも、私は君が頑張ってることを知ってるから...！！",
            "次は絶対いっしょにゴールしよ！"
        ]
    },
]