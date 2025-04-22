import Modal from "../common/Modal";
import { CharacterCard, charactersCard } from "../../utils/constants/characters";

// キャラクターIDからキャラ情報を取得する関数
const getCharacterCardById = (id: number): CharacterCard | undefined => {
  return charactersCard.find((char) => char.id === id);
};

type Props = {
  characterId: number;
  onClose: () => void;
};

const CharacterDetailModal = ({ characterId, onClose }: Props) => {
  const character = getCharacterCardById(characterId);

  return (
    <Modal isOpen={!!character} onClose={onClose}>
      {character && (
        <div className="flex flex-col sm:flex-row p-6 bg-white rounded-xl shadow-lg max-w-full mx-auto">
          <img
            src={character.image}
            alt={character.name}
            className="w-1/2 h-auto object-contain rounded-lg"
          />
          <div className="w-full sm:w-1/2 p-4">
            <h3 className="text-2xl font-bold mb-4">{character.name}</h3>
            <p className="text-gray-700 mb-6">{character.description}</p>
            <div className="flex justify-end">
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default CharacterDetailModal;