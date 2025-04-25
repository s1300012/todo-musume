import chara1 from "../../assets/charamovies/characterSelect/chara1.jpg"
import chara2 from "../../assets/charamovies/characterSelect/chara2.jpg"
import chara3 from "../../assets/charamovies/characterSelect/chara3.jpg"

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