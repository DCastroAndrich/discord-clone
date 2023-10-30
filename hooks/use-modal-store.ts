import { create } from "zustand";

export type ModalType = "createServer";

interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  onOpen: (type: ModalType) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((ser) => ({
  type: null,
  isOpen: false,
  onOpen: (type) => ser({ isOpen: true, type }),
  onClose: () => ser({ type: null, isOpen: false }),
}));
