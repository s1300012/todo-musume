import chara1 from "../../assets/charamovies/characterSelect/御影心愛-キャラ選択.png"
import chara2 from "../../assets/charamovies/characterSelect/ソフィア-キャラ選択.png"
import chara3 from "../../assets/charamovies/characterSelect/東雲懐季-キャラ選択.png"

export type MovieSelectChara = {
    id: number;
    characterId: number;
    image: string;
    words: string[];
  };


export const movieSelectCharas: MovieSelectChara[] = [
    { id: 1 ,characterId: 1, image: chara1,
        words: [
            "わ、おにーさん！はじめま･･････ぷぷ。",
            "沢山、イジめてあげるねー？"
        ]
    },
    { id: 2 ,characterId: 2, image: chara2,
        words: [
            "ワタシ ソフィア。 ヨロシクネ",
        ]
    },
    { id: 2 ,characterId: 3, image: chara3,
        words: [
            "今日もこれからも応援するね！",
        ]
    },
  ];