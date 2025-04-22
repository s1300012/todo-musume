import BigModal from "../common/BigModal";
import CharacterDetailModal from "./CharacterDetailModal";
import CharacterConfirmModal from "./CharacterConfirmModal";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../utils/firebase/firebase";
import { charactersTop  } from "../../utils/constants/characters";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CharacterSelectModal = ({ isOpen, onClose }: Props) => {
  const [selectedDetailId, setSelectedDetailId] = useState<number | null>(null);
  const [confirmingCharId, setConfirmingCharId] = useState<number | null>(null);

  const handleConfirmSelect = (id: number) => {
    setConfirmingCharId(id);
  };

  const handleFinalSelect = async () => {
    if (confirmingCharId && auth.currentUser) {
      try {
        const ref = doc(db, "users", auth.currentUser.uid);
        await updateDoc(ref, {
          characterId: confirmingCharId,
          affectionLevel: 1,
        });
        console.log("キャラクター選択完了:", confirmingCharId);
      } catch (err) {
        console.error("キャラクターの保存に失敗しました", err);
      }
      setConfirmingCharId(null);
      setSelectedDetailId(null);
      onClose();
    }
  };

  return (
    <>
      <BigModal isOpen={isOpen} onClose={onClose}>
        <div
          className="p-2 rounded-xl shadow-lg w-full h-full">
          <h1 className="text-x3l font-bold text-center mb-4">キャラ選択してね</h1>
          <div className="flex justify-around items-end gap-4">
            {charactersTop.map((char) => (
              <div key={char.id} className="flex flex-col items-center">
                <div className="relative">
                  <img
                    src={char.image}
                    alt={char.name}
                    onClick={() => handleConfirmSelect(char.id)}
                    className={`w-80 h-120 object-contain cursor-pointer transition-all duration-300
                      border-4 rounded-lg hover:border-blue-500 hover:shadow-lg hover:scale-105`}
                  />
                  {/* 各画像ごとの右上にアイコンボタン */}
                  <button
                    onClick={() => setSelectedDetailId(char.id)}
                    className={`absolute -top-3 -right-3 bg-white border border-black rounded-full w-13 h-13 
                      flex items-center justify-center text-sm cursor-pointer transition-all duration-300 
                      hover:border-blue-500 hover:shadow-lg hover:scale-105`}
                    title="詳細"
                  >
                    ⋮
                  </button>
                </div>
                <div className="text-2xl font-semibold mt-5">{char.name}</div>
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
      {selectedDetailId !== null && (
        <CharacterDetailModal
          characterId={selectedDetailId}
          onClose={() => setSelectedDetailId(null)}
        />
      )}

      {/* キャラ選択確認モーダル */}
      {confirmingCharId !== null && (
        <CharacterConfirmModal
          characterId={confirmingCharId}
          onConfirm={handleFinalSelect}
          onCancel={() => setConfirmingCharId(null)}
        />
      )}
    </>
  );
};

export default CharacterSelectModal;