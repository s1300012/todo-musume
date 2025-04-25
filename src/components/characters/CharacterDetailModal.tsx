import Modal from "../common/Modal";
import { CharacterCard, charactersCard } from "../../utils/constants/characters";

// キャラクターIDからキャラ情報を取得する関数
const getCharacterCardById = (id: number): CharacterCard | undefined => {
  return charactersCard.find((char) => char.id === id);
};

type Props = {
  isOpen: boolean;
  characterId: number;
  onClose: () => void;
};

const CharacterDetailModal = ({ isOpen, characterId, onClose }: Props) => {
  const character = getCharacterCardById(characterId);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {character && (
        <div className="flex flex-col sm:flex-row p-6 rounded-xl max-w-full mx-auto">
          <img
            src={character.image}
            alt={character.name}
            className="w-1/2 h-auto object-contain rounded-lg"
          />
          <div className="w-full sm:w-1/2 p-4">
            <h3 className="text-2xl font-bold mb-4">{character.name}</h3>
            <p className="text-gray-700 mb-1">{character.description.full_name}</p>
            <p className="text-gray-700 mb-1">{character.description.name_kana}</p>
            <p className="text-gray-700 mb-1">{character.description.age}</p>
            <p className="text-gray-700 mb-1">{character.description.grade}</p>
            <p className="text-gray-700 mb-1">{character.description.height}</p>
            <p className="text-gray-700 mb-1">{character.description.from}</p>
            <p className="text-gray-700 mb-1">{character.description.birth}</p>
            <p className="text-gray-700 mb-1">{character.description.star}</p>
            <p className="text-gray-700 mb-1">{character.description.blood}</p>
            <p className="text-gray-700 mb-1">{character.description.hobby}</p>
            <p className="text-gray-700 mb-1">{character.description.like}</p>
            <p className="text-gray-700 mb-1">{character.description.unlike}</p>
            <p className="text-gray-700 mb-1">{character.description.three_size}</p>
            <p className="text-gray-700 mt-1 whitespace-pre-line">
  {character.description.coment}
</p>
          </div>

        </div>
      )}
    </Modal>
  );
};

export default CharacterDetailModal;