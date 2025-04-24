import Modal from "../common/Modal";
import { CharacterCard, charactersCard } from "../../utils/constants/characters";
import { playSE } from "../../utils/music/soundPlayer";
import { completeSound } from "../../utils/music/musicContents";
// キャラクターIDからキャラ情報を取得する関数
const getCharacterCardById = (id: number): CharacterCard | undefined => {
  return charactersCard.find((char) => char.id === id);
};

type Props = {
  characterId: number;
  onConfirm: () => void;
  onCancel: () => void;
};

const CharacterConfirmModal = ({ characterId, onConfirm, onCancel }: Props) => {
  const character = getCharacterCardById(characterId);
  return (
    <Modal isOpen={!!character} onClose={onCancel}>
      {character && (
        <div className="p-6 rounded-xl max-w-full mx-auto text-center space-y-4">
          <img
            src={character.image}
            alt={character.name}
            className="w-70 h-auto mx-auto rounded"
          />
          <h2 className="text-lg font-bold mt-2">
            このキャラクターを選択しますか？
          </h2>
          <p className="text-sm font-bold text-red-500">
            ※キャラクターを変更すると、友好度メーターがリセットされます
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => {playSE(completeSound); onConfirm()}}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 hover:scale-105 duration-300"
            >
              はい
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default CharacterConfirmModal;
