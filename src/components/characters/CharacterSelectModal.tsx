import BigModal from "../common/BigModal";
import CharacterDetailModal from "./CharacterDetailModal";
import CharacterConfirmModal from "./CharacterConfirmModal";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../utils/firebase/firebase";
import { charactersTop, selectIcons  } from "../../utils/constants/characters";
import CharacterSelectMovieModal from "../movie/CharacterSelectMovieModal";
import { playSE } from "../../utils/music/soundPlayer";
import { selectSound, clickSound, closeButton } from "../../utils/music/musicContents";
import { greets } from "../../utils/music/charaSE";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CharacterSelectModal = ({ isOpen, onClose }: Props) => {
  const [selectedDetailId, setSelectedDetailId] = useState<number | null>(null);
  const [confirmingCharId, setConfirmingCharId] = useState<number | null>(null);
  const [showMovieModal, setshowMovieModal] = useState(false);
  
  const handleFinalSelect = async () => {
    if (!auth.currentUser || !confirmingCharId) return;
  
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
    setshowMovieModal(true);
  };
  
  

  return (
    <>
      <BigModal isOpen={isOpen} onClose={onClose}>
        <div className="rounded shadow-lg w-full h-full">
          <h1 className="text-5xl font-bold text-center mt-5 mb-10">３人の中からキャラクターを選んでね</h1>
          <div className="flex justify-around items-end gap-4">
          {charactersTop.map((char) => {
              const icon = selectIcons.find((icon) => icon.id === char.id);
              return (
                <div key={char.id} className="flex flex-col items-center relative">
                  <img
                    src={char.image}
                    alt={char.name}
                    onClick={() => {playSE(clickSound); setConfirmingCharId(char.id)}}
                    onMouseEnter={() => playSE(selectSound)}
                    className={`
                      w-80 h-120 object-contain cursor-pointer transition-all duration-300
                      border-4 rounded-lg hover:border-red-500 hover:shadow-lg hover:scale-105
                    `}
                  />
                  {icon && (
                    <button
                      onClick={() => {playSE(clickSound); setSelectedDetailId(char.id)}}
                      onMouseEnter={() => playSE(selectSound)}
                      className="absolute -top-7 -right-7 border-gray-300  rounded-full border border-transparentborder 
                          hover:scale-120 hover:border-red-500 hover:border-[3px]"
                    >
                      <img src={icon.image} alt="詳細" className="w-20 h-20" />
                    </button>
                  )}
                  <div className="text-3xl mb-2 mt-2">{char.name}</div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={onClose}
              className="border border-black bg-white text-black px-4 py-2 rounded hover:bg-gray-100 hover:scale-105 duration-300"
            >
              戻る
            </button>
          </div>
        </div>
      </BigModal>

      {/* キャラ詳細モーダル */}
      <CharacterDetailModal
        characterId={selectedDetailId!}
        isOpen={!!selectedDetailId}
        onClose={() =>  {playSE(closeButton); setSelectedDetailId(null)}}
      />
      {/* キャラ選択確認モーダル */}
      <CharacterConfirmModal
        characterId={confirmingCharId!}
        onConfirm={() => {
          handleFinalSelect();
          const greet = greets.find((g) => g.id ===confirmingCharId);
          playSE(greet?.music);
        }}
        onCancel={() => {playSE(closeButton); setConfirmingCharId(null);}}
      />
      {/* キャラクター紹介映像モーダル */}
      {showMovieModal && (
      <CharacterSelectMovieModal
        isOpen={showMovieModal}
        onClose={() => {
          setshowMovieModal(false);
          setConfirmingCharId(null);
          onClose();
        }}
        characterId={confirmingCharId!}
      />
      )}
    </>
  );
};

export default CharacterSelectModal;