import { motion } from 'framer-motion';
import background from '../assets/backgound/background.jpg';

const StartScreen = ({ onStart }: { onStart: () => void }) => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* ロゴ */}

      {/* スタートボタン */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="px-10 py-5 bg-pink-400 text-white text-2xl font-bold rounded-full shadow-lg hover:bg-pink-500 transition duration-300"
      >
        🌟 TODO娘をプレイ!
      </motion.button>
    </div>
  );
};

export default StartScreen;
