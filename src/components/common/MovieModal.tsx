import { ReactNode, useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type MovieModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  image?: string;
};

const MovieModal = ({ isOpen, onClose, children, image }: MovieModalProps) => {
  const [currentLine, setCurrentLine] = useState(0);

  const allLines = Array.isArray(children) ? children : [children];
  const isLastLine = currentLine + 1 >= allLines.length;

  const advanceText = useCallback(() => {
    if (isLastLine) {
      onClose();
      setCurrentLine(0);
    } else {
      setCurrentLine((prev) => prev + 1);
    }
  }, [isLastLine, onClose]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
      setCurrentLine(0);
    }
  }, [advanceText, onClose]);
  
  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);
  

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal-wrapper"
          className="fixed inset-0 flex items-center justify-center pt-6 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-[rgba(0,0,0,0.7)] z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          <motion.div
            className="relative w-full max-w-350 h-180  bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center z-50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={advanceText}
          >
            {/* 画像 */}
            {image && <img src={image} alt="キャラ" className="h-180 w-auto mb-6" />}

            {/* 吹き出し */}
            <div className="fixed bg-black/50 text-white p-6 top-160 rounded-xl text-lg w-130  text-center backdrop-blur-sm">
            {Array.isArray(children) ? (
            children.map((line, index) => (
                <p
                    key={index}
                    className={`dialogue-line transition-opacity duration-500 ${
                        index === currentLine ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
                    }`}
                    >
                    {line}
                </p>
            ))
            ) : children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MovieModal;
