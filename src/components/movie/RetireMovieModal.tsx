import MovieModal from "../common/MovieModal";
import { movieRetireChara, MovieRetireChara } from "../../utils/constants/movieRetire";

type Props = {
  isOpen: boolean;
  characterId: number;
  onClose: () => void;
};


const RetireMovieModal = ({ isOpen, characterId, onClose }: Props) => {

    const matchingMovie: MovieRetireChara | undefined = movieRetireChara.find(
        (mov) => mov.characterId === characterId
    );

    // movie または character が見つからなかったら表示しない
    if (!matchingMovie || !characterId) return null;

    return (
    <MovieModal image={matchingMovie.image} isOpen={isOpen} onClose={onClose}>
        {matchingMovie.words.map((word, index) => (
        <p className="text-lg" key={index}>
            {word}
        </p>
        ))}
    </MovieModal>
    );
    
};

export default RetireMovieModal;