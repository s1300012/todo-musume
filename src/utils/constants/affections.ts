import affection1 from "../../assets/affections/affection_0.png";
import affection2 from "../../assets/affections/affection_1.png";
import affection3 from "../../assets/affections/affection_2.png";
import affection4 from "../../assets/affections/affection_3.png";
import affection5 from "../../assets/affections/affection_4.png";
import affection6 from "../../assets/affections/affection_5.png";

export type Affection = {
    id: number;
    image: string;
};

export const affectionImages: Affection[] = [
    { id: 1, image: affection1},
    { id: 2, image: affection2},
    { id: 3, image: affection3},
    { id: 4, image: affection4},
    { id: 5, image: affection5},
    { id: 6, image: affection6},
];