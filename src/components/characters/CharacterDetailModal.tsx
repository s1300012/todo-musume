import Modal from "../common/Modal";

type Character = {
  id: number;
  name: string;
  image: string;
  description: string;
};

type Props = {
  character: Character | null;
  onClose: () => void;
};

const CharacterDetailModal = ({ character, onClose }: Props) => {
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
              <button
                onClick={onClose}
                className="border border-black bg-white text-black px-4 py-2 rounded hover:bg-gray-100"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default CharacterDetailModal;
