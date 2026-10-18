"use client";

import { AnimatePresence, motion, useDragControls } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  label: string;
  children: React.ReactNode;
}

/** Painel que sobe da parte de baixo da tela — arraste para baixo para fechar. */
export function BottomSheet({ open, onClose, label, children }: Props) {
  const dragControls = useDragControls();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center" role="dialog" aria-modal aria-label={label}>
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="relative max-h-[92dvh] w-full max-w-md overflow-y-auto rounded-t-3xl bg-surface pb-[env(safe-area-inset-bottom)] ring-1 ring-line"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 320 }}
            drag="y"
            dragListener={false}
            dragControls={dragControls}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.6 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 120 || info.velocity.y > 600) onClose();
            }}
          >
            <div
              className="sticky top-0 z-10 flex touch-none cursor-grab justify-center bg-surface pt-3 pb-2"
              onPointerDown={(e) => dragControls.start(e)}
            >
              <span className="h-1.5 w-10 rounded-full bg-line" />
            </div>
            <button
              onClick={onClose}
              aria-label="Fechar"
              className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur active:scale-90"
            >
              <X size={18} />
            </button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
