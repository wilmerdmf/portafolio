import { useState, useCallback } from "react";
import type { UseImageModalReturn } from "../types";

export const useImageModal = (initialState = false): UseImageModalReturn => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const openModal = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  }, []);

  const toggleModal = useCallback(() => {
    setIsOpen((prev) => {
      const newState = !prev;
      document.body.style.overflow = newState ? "hidden" : "unset";
      return newState;
    });
  }, []);

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
  };
};
