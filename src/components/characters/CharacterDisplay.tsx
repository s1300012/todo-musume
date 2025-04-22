import { characters } from "../../utils/constants/characters";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../utils/firebase/firebase";
import CharacterSelectModal from "./CharacterSelectModal";
import { affectionImages } from "../../utils/constants/affections";

const CharacterDisplay = () => {
  const [characterId, setCharacterId] = useState<number | null>(null);
  const [affectionLevel, setAffectionLevel] = useState<number>(1);
  const [isSelectModalOpen, setIsSelectModalOpen] = useState(false);

  const fetchCharacterData = async () => {
    if (!auth.currentUser) return;
    const ref = doc(db, "users", auth.currentUser.uid);
    const snap = await getDoc(ref);
    if (snap.exists()) {
      const data = snap.data();
      setCharacterId(data.characterId || 1);
      setAffectionLevel(data.affectionLevel || 1);
    }
  };

  useEffect(() => {
    fetchCharacterData();
  }, []);

  const handleSelectCharacter = () => {
    setIsSelectModalOpen(true);
  };

  const handleModalClose = async () => {
    setIsSelectModalOpen(false);
    await fetchCharacterData(); // モーダルを閉じた後、最新のキャラと好感度を反映
  };

  const character = characters.find((c) => c.id === characterId);
  const affection = affectionImages.find((a) => a.id === affectionLevel);
  const characterImage = character ? character.image : characters[1].image;
  const affectionMeterImage = affection ? affection.image : affectionImages[1].image;
  const message = character ? character.message : "おにいちゃん、がんばってね！";

  return (
    <div className="fixed right-0 top-0 h-full w-1/2 bg-gradient-to-br from-pink-50 to-blue-50 flex flex-col items-center justify-center p-4 shadow-inner">
      {/* キャラとメーター */}
      <div className="relative flex justify-center items-end gap-10 w-full pt-[50px]">
        {/* キャラとボタン */}
        <div className="flex flex-col items-center relative">
          <img
            src={characterImage}
            alt={`キャラ${characterId}`}
            className="max-h-[70vh] object-contain drop-shadow-xl"
          />

          {/* 吹き出し（キャラの腰あたり） */}
          <div className="absolute bottom-[300px] bg-white border border-gray-300 rounded-xl px-4 py-2 text-sm text-gray-700 shadow-md z-20">
            <div className="absolute -top-2 left-10 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white" />
            <div>{message}</div>
          </div>

          {/* キャラ選択ボタン */}
          <button
            onClick={handleSelectCharacter}
            className="mt-4 border border-black bg-white text-black px-4 py-2 rounded hover:bg-gray-100"
          >
            キャラ選択
          </button>
        </div>

        {/* 好感度メーター */}
        <img
          src={affectionMeterImage}
          alt={`好感度: ${affectionLevel}`}
          className="w-24 h-full object-contain"
        />
      </div>

      <CharacterSelectModal
        isOpen={isSelectModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default CharacterDisplay;
