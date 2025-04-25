// src/components/modal/OpenAffectionUpModal.tsx
import Modal from "../common/Modal";
import { playSE } from "../../utils/music/soundPlayer";
import { clickSound } from "../../utils/music/musicContents";

export type OpenAffectionUpModalProps = {
  isOpen: boolean;
  onConfirm: () => void;
  characterId: number;
  affectionLevel: number;
};

const OpenAffectionDownModal = ({
  isOpen,
  onConfirm,
  characterId,
  affectionLevel,
}: OpenAffectionUpModalProps) => {
  let characterName;
  if(characterId === 1) characterName = "御影心愛";
  if(characterId === 2) characterName = "白鷺ソフィア";
  if(characterId === 3) characterName = "東雲懐季";
  return (
    <Modal isOpen={isOpen} >
      <div className="flex flex-col items-center justify-center p-6 space-y-6">
        <h2 className="text-2xl font-bold text-center">
          {characterName}からの好感度レベルが{affectionLevel}に下がりました...
        </h2>
        <p className="text-lg text-center">
          {characterName}が驚いてこちらを見ています。
        </p>

        <button
          onClick={() => {
            playSE(clickSound);
            onConfirm();
          }}
          className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105"
        >
          はい
        </button>
      </div>
    </Modal>
  );
};

export default OpenAffectionDownModal;
