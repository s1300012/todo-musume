// src/utils/constants/characters.ts
import character1 from "../../assets/characters/character_1.png";
import character2 from "../../assets/characters/character_2.png";
import character3 from "../../assets/characters/character_3.png";

export type Character = {
  id: number;
  name: string;
  image: string;
  description: string;
  message: string;
};

export const characters: Character[] = [
  { id: 1, name: "キャラ1", image: character1, description: "明るく元気な女の子。", message: "おにいちゃん、がんばってね！"},
  { id: 2, name: "キャラ2", image: character2, description: "クールで知的な性格。", message: ""},
  { id: 3, name: "キャラ3", image: character3, description: "おっとりした癒し系。", message: ""},
];
