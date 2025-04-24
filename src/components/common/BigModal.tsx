// src/components/common/Modal.tsx
import { ReactNode, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import background from "../../assets/backgound/modal2.png";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const BigModal = ({ isOpen, onClose, children }: ModalProps) => {
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
          className="fixed inset-0 flex items-center justify-center pt-6 z-40"
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
            className="relative bg-white rounded-lg  w-full max-w-350 h-190 z-50 bg-contain bg-center bg-no-repeat z-40"
            style={{ backgroundImage: `url(${background})` , backgroundSize: "100%"}} // 🔸ここを追加
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()} // モーダル内クリックでは閉じない
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BigModal;
