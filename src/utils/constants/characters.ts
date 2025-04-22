// src/utils/constants/characters.ts
import character1 from "../../assets/characters/stand-image/御影心愛-character1.png";
import character2 from "../../assets/characters/stand-image/ソフィア-character2.png";
import character3 from "../../assets/characters/stand-image/東雲懐季-character3.png";
import character1Card from "../../assets/characters/card-image/character_1.png";
import character2Card from "../../assets/characters/card-image/character_2.png";
import character3Card from "../../assets/characters/card-image/character_3.png";
import character1Top from "../../assets/characters/top-body-image/御影心愛-上半身.png";
import character2Top from "../../assets/characters/top-body-image/ソフィア-上半身.png";
import character3Top from "../../assets/characters/top-body-image/東雲懐季-上半身.png";
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
  { id: 1, name: "御影心愛", image: character1, message: "死になさい！"},
  { id: 2, name: "ソフィア", image: character2, message: "見るなバカ"},
  { id: 3, name: "東雲懐季", image: character3, message: "おにいちゃん、がんばってね！"},
];

export type CharacterCard = {
  id: number;
  name: string;
  image: string;
  description: string;
};

export const charactersCard: CharacterCard[] = [
  { id: 1, name: "御影心愛", image: character1Card, description: "ちょっぴり意地悪な少女"},
  { id: 2, name: "ソフィア", image: character2Card, description: "ちょっぴり人見知りな少女。"},
  { id: 3, name: "東雲懐季", image: character3Card, description: "いつも元気で明るい少女"},
];

export type CharacterTop = {
  id: number;
  name: string;
  image: string;
};

export const charactersTop: CharacterTop[] = [
  { id: 1, name: "御影心愛", image: character1Top},
  { id: 2, name: "ソフィア", image: character2Top},
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