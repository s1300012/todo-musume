import BigModal from "../common/BigModal";
import CharacterDetailModal from "./CharacterDetailModal";
import CharacterConfirmModal from "./CharacterConfirmModal";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../utils/firebase/firebase";
import { characters, Character } from "../../utils/constants/characters";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CharacterSelectModal = ({ isOpen, onClose }: Props) => {
  const [selectedDetailChar, setSelectedDetailChar] = useState<Character | null>(null);
  const [confirmingChar, setConfirmingChar] = useState<Character | null>(null);

  const handleConfirmSelect = (char: Character) => {
    setConfirmingChar(char);
  };

  const handleFinalSelect = async () => {
    if (confirmingChar && auth.currentUser) {
      try {
        const ref = doc(db, "users", auth.currentUser.uid);
        await updateDoc(ref, {
          characterId: confirmingChar.id,
          affectionLevel: 1,
        });
        console.log("キャラクター選択完了:", confirmingChar.name);
      } catch (err) {
        console.error("キャラクターの保存に失敗しました", err);
      }
      setConfirmingChar(null);
      setSelectedDetailChar(null);
      onClose();
    }
  };

  return (
    <>
      <BigModal isOpen={isOpen} onClose={onClose}>
        <div className="p-6 bg-white rounded-xl shadow-lg w-full h-full">
          <h2 className="text-xl font-bold text-center mb-6">キャラ選択</h2>
          <div className="flex justify-around items-end gap-4">
          {characters.map((char) => (
            <div key={char.id} className="flex flex-col items-center">
                <img
                  src={char.image}
                  alt={char.name}
                  className="w-60 h-90 object-contain rounded shadow"
                />
                <div className="text-lg font-semibold mb-2">{char.name}</div>
                <div className="mt-2 space-x-2">
                <button
                  onClick={() => handleConfirmSelect(char)}
                  className="border border-black bg-white text-black px-3 py-1 rounded hover:bg-gray-100 text-sm"
                >
                  選択
                </button>
                <button
                  onClick={() => setSelectedDetailChar(char)}
                  className="border border-gray-400 bg-white text-gray-700 px-3 py-1 rounded hover:bg-gray-100 text-sm"
                >
                  詳細
                </button>
              </div>
            </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={onClose}
              className="border border-black bg-white text-black px-4 py-2 rounded hover:bg-gray-100"
            >
              戻る
            </button>
          </div>
        </div>
      </BigModal>

      {/* キャラ詳細モーダル */}
      <CharacterDetailModal
        character={selectedDetailChar}
        onClose={() => setSelectedDetailChar(null)}
      />

      {/* キャラ選択確認モーダル */}
      <CharacterConfirmModal
        character={confirmingChar}
        onConfirm={handleFinalSelect}
        onCancel={() => setConfirmingChar(null)}
      />
    </>
  );
};

export default CharacterSelectModal;
