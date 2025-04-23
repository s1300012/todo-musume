import { charactersStand } from "../../utils/constants/characters";
import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../utils/firebase/firebase";
import CharacterSelectModal from "./CharacterSelectModal";
import { affectionImages } from "../../utils/constants/affections";
import CharacterDetailModal from "./CharacterDetailModal";

type Props = {
  onCharacterSelected?: () => void;
};

const CharacterDisplay = forwardRef<{ refreshCharacterData: () => void }, Props>(
  ({ onCharacterSelected }, ref) => {
  const [characterId, setCharacterId] = useState<number | null>(null);
  const [affectionLevel, setAffectionLevel] = useState<number>();
  const [isSelectModalOpen, setIsSelectModalOpen] = useState(false);
  const [selectedDetailId, setSelectedDetailId] = useState<number | null>(null);

  const fetchCharacterData = async () => {
    if (!auth.currentUser) return;
    const ref = doc(db, "users", auth.currentUser.uid);
    const snap = await getDoc(ref);
    if (snap.exists()) {
      const data = snap.data();
      setCharacterId(data.characterId || null);
      setAffectionLevel(data.affectionLevel || null);
    }
  };

  useImperativeHandle(ref, () => ({
    refreshCharacterData: fetchCharacterData,
  }));

  useEffect(() => {
    fetchCharacterData();
  }, []);

  const handleSelectCharacter = () => {
    setIsSelectModalOpen(true);
  };

  const handleModalClose = async () => {
    setIsSelectModalOpen(false);
    await fetchCharacterData(); // モーダルを閉じた後、最新のキャラと好感度を反映
    onCharacterSelected?.();
  };

  const character = charactersStand.find((c) => c.id === characterId);
  const affection = affectionImages.find((a) => a.id === affectionLevel);
  const characterImage = character ? character.image : null;
  const affectionMeterImage = affection ? affection.image : null;
  const message = character ? character.message : "おにいちゃん、がんばってね！";

  return (
    <div className="fixed right-0 top-0 h-full w-1/2 bg-gradient-to-br to-blue-50 flex flex-col items-center justify-center p-4 shadow-inner z-10">
      {/* キャラとメーター */}
      <div className="relative flex justify-center items-end gap-10 w-full pt-[50px]">
        {/* キャラとボタン */}
        <div className="flex flex-col items-center relative">
          {characterId &&
          <>
            <img
              src={characterImage!}
              alt={`キャラ${characterId}`}
              className="max-h-[70vh] object-contain drop-shadow-xl cursor-pointer transition-all duration-300
                      rounded-lg hover: hover:scale-105"
              onClick={() => setSelectedDetailId(characterId)}
            />
            <div className="absolute bottom-[300px] bg-white border border-gray-300 rounded-xl px-4 py-2 text-sm text-gray-700 shadow-md ">
              <div className="absolute -top-2 left-10 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white" />
              <div>{message}</div>
            </div>
          </>
          }
          {/* キャラ選択ボタン */}
          <button
            onClick={handleSelectCharacter}
            className="mt-4 border border-black bg-white text-black px-4 py-2 rounded hover:bg-gray-100"
          >
            キャラ選択
          </button>
        </div>

        {/* 好感度メーター */}
        {affectionLevel && <img
          src={affectionMeterImage!}
          alt={`好感度: ${affectionLevel}`}
          className="w-24 h-full object-contain"
        />}
      </div>
      <CharacterSelectModal
        isOpen={isSelectModalOpen}
        onClose={handleModalClose}
      />
      {/* キャラ詳細モーダル */}
      <CharacterDetailModal
        isOpen={selectedDetailId !== null}
        characterId={selectedDetailId!}
        onClose={() => setSelectedDetailId(null)}
      />
    </div>
  );
});

export default CharacterDisplay;
