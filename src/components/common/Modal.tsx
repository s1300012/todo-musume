// src/components/common/Modal.tsx
import { ReactNode, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  // ESCキーで閉じる
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal-wrapper"
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* 背景 */}
          <motion.div
            className="absolute inset-0 bg-[rgba(0,0,0,0.4)]"
            onClick={onClose} // 背景クリックでも閉じる
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* モーダル本体 */}
          <motion.div
            className="relative bg-white rounded-lg p-6 w-full max-w-220 z-50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()} // モーダル内クリックでは閉じない
          >
            <button
              onClick={onClose}
              className={`absolute -top-3 -right-3 bg-gray-300 border border-black rounded-full w-13 h-13 
                flex items-center justify-center text-sm cursor-pointer transition-all duration-300 
                hover:border-blue-500 hover:shadow-lg hover:scale-105`}
            >
              ✕
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
