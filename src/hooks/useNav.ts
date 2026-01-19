import { useState } from "react";
import type { NavItem } from "../types";
import { sectionMap } from "../config";

export const useNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => setIsMenuOpen((prev) => !prev);
  const closeMenu = (): void => setIsMenuOpen(false);

  const handleNavClick = (item: NavItem): void => {
    const id = sectionMap[item];
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  };

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu,
    handleNavClick,
  };
};
