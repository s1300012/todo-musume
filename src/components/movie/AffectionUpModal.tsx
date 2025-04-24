import MovieModal from "../common/MovieModal";
import { charactersCard, CharacterCard } from "../../utils/constants/characters";
import { MovieChara, movieChara1, movieChara2, movieChara3 } from "../../utils/constants/movie";
import { useEffect, useState } from "react";
import { auth, db } from "../../utils/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

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
  const [userName, setUserName] = useState("あなた");

  // キャラごとのmovie配列を取得
  let movies: MovieChara[] = [];
  if (characterId === 1) movies = movieChara1;
  if (characterId === 2) movies = movieChara2;
  if (characterId === 3) movies = movieChara3;

  // レベルに応じたmovieの配列（複数シーン対応）
  const matchingMovies = movies.filter(mov => mov.affectionlevel === level);

  const [sceneIndex, setSceneIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);

  const currentScene = matchingMovies[sceneIndex];
  const currentLine = currentScene?.words[lineIndex]?.replace("username", `${userName}`) ?? "";

  // Firebaseからユーザー名を取得
  useEffect(() => {
    const fetchUserName = async () => {
      if (!auth.currentUser) return;
      const ref = doc(db, "users", auth.currentUser.uid);
      const snap = await getDoc(ref);
      const data = snap.data();
      if (data?.name) {
        setUserName(data.name);
      }
    };
    fetchUserName();
  }, []);

  const handleNext = () => {
    if (!currentScene) return;

    if (lineIndex < currentScene.words.length - 1) {
      setLineIndex(prev => prev + 1);
    } else if (sceneIndex < matchingMovies.length - 1) {
      setSceneIndex(prev => prev + 1);
      setLineIndex(0);
    } else {
      onClose(); // 最後のシーンの最後の行
      setSceneIndex(0);
      setLineIndex(0);
    }
  };

  if (!currentScene || !character) return null;

  return (
    <MovieModal
      image={currentScene.image}
      voice={currentScene.voice}
      isOpen={isOpen}
      onClose={handleNext}
    >
      <p className="text-lg">{currentLine}</p>
    </MovieModal>
  );
};

export default AffectionUpModal;
