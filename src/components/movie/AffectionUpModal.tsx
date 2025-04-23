import MovieModal from "../common/MovieModal";
import { charactersCard, CharacterCard } from "../../utils/constants/characters";
import { MovieChara, movieChara1, movieChara2, movieChara3 } from "../../utils/constants/movie";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  level: number;
  characterId: number;
  onClose: () => void;
};

const getCharacterCardById = (id: number): CharacterCard | undefined => {
  return charactersCard.find((char) => char.id === id);
};

const AffectionUpModal = ({ isOpen, level, characterId, onClose }: Props) => {
  const character = getCharacterCardById(characterId);

  // キャラごとのmovie配列を取得
  let movies: MovieChara[] = [];
  if (characterId === 1) movies = movieChara1;
  if (characterId === 2) movies = movieChara2;
  if (characterId === 3) movies = movieChara3;

  const matchingMovies = movies.filter(mov => mov.affectionlevel === level);

  const [sceneIndex, setSceneIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);

  const currentScene = matchingMovies[sceneIndex];
  const currentLine = currentScene?.words[lineIndex] ?? "";

  const handleNext = () => {

  if (lineIndex < currentScene.words.length - 1) {
    setLineIndex(lineIndex + 1);
  } else if (sceneIndex < matchingMovies.length - 1) {
    setSceneIndex(sceneIndex + 1);
    setLineIndex(0);
  } else {
    onClose(); // 最後のシーンの最後の行
    setSceneIndex(0);
    setLineIndex(0);
  }
  };

  // 対象レベルのムービーを取得
  const movie = movies.find((mov) => mov.affectionlevel === level);

  // movie または character が見つからなかったら表示しない
  if (!movie || !character) return null;

  return (
<MovieModal image={currentScene?.image} isOpen={isOpen} onClose={handleNext}>
  <p className="text-lg">{currentLine}</p>
</MovieModal>

  );
};

export default AffectionUpModal;
