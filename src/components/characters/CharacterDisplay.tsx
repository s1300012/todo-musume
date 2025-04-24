import { charactersStand } from "../../utils/constants/characters";
import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../utils/firebase/firebase";
import CharacterSelectModal from "./CharacterSelectModal";
import { affectionImages } from "../../utils/constants/affections";
import CharacterDetailModal from "./CharacterDetailModal";
import { playSE } from "../../utils/music/soundPlayer";
import { clickSound, closeButton, selectSound } from "../../utils/music/musicContents";

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
    playSE(closeButton);
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
    <div className="fixed right-0 top-12 h-full w-1/2 flex flex-col  z-20">
      {/* キャラとメーター */}
      <div className="relative flex justify-center items-center w-full pt-[50px]">
        {characterId &&
        <>
          <img
            src={characterImage!}
            alt={`キャラ${characterId}`}
            className="max-h-[70vh] object-contain drop-shadow-xl cursor-pointer transition-all duration-300
                    rounded-lg hover:scale-105"
            onClick={() => {playSE(clickSound); setSelectedDetailId(characterId)}}
            onMouseEnter={() => playSE(selectSound)}
          />
          <div className="fixed bg-black/30 left-195 text-white p-6 top-150 rounded-xl text-lg w-100  text-center backdrop-blur-sm">
            <div>{message}</div>
          </div>
        </>
        }
        {/* メーターとボタン */}
        <div className="flex flex-col items-center relative">
          {/* キャラ選択ボタン */}
          <button
            onClick={() => {
              playSE(clickSound);
              handleSelectCharacter();
            }}
            className="px-8 py-4 rounded-full bg-pink-400 text-white font-semibold text-lg tracking-wide shadow-md
                      hover:bg-pink-500 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out
                      border-2 border-white/60 backdrop-blur-md"
          >
            💖 キャラ選択 💖
          </button>
        {/* 好感度メーター */}
        {affectionLevel && <img
          src={affectionMeterImage!}
          alt={`好感度: ${affectionLevel}`}
          className="w-30 h-full object-contain"
        />}
                </div>
      </div>
      <CharacterSelectModal
        isOpen={isSelectModalOpen}
        onClose={handleModalClose}
      />
      {/* キャラ詳細モーダル */}
      <CharacterDetailModal
        isOpen={selectedDetailId !== null}
        characterId={selectedDetailId!}
        onClose={() => {playSE(closeButton); setSelectedDetailId(null)}}
      />
    </div>
  );
});

export default CharacterDisplay;
