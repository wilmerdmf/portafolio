import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { images } from "../../assets";
import { useNav } from "../../hooks";
import { navKeys, personalInfo, uiConfig } from "../../config";
import type { NavKey } from "../../types";

const Header = () => {
  const { isMenuOpen, toggleMenu, handleNavClick } = useNav();
  const { t } = useTranslation("common");

  return (
    <motion.header
      className="section-color"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="header-container">
        <div className="header-card">
          <img
            src={images.profile}
            alt={`${personalInfo.name} - Profile picture`}
            loading="eager"
            decoding="async"
            width="48"
            height="48"
          />
          <div className="header-card-text">
            <h3>{personalInfo.name}</h3>
            <p>{personalInfo.tagline}</p>
          </div>
        </div>

        <div className="header-list">
          <button
            onClick={toggleMenu}
            className="menu-toggle"
            aria-label={isMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X color={uiConfig.colors.primary} size={uiConfig.icons.sizes.xlarge} strokeWidth={2.5} />
            ) : (
              <Menu color={uiConfig.colors.primary} size={uiConfig.icons.sizes.xlarge} strokeWidth={2} />
            )}
          </button>

          <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
            {navKeys.map((key: NavKey) => (
              <li key={key} onClick={() => handleNavClick(key)}>
                {t(`nav.${key}`)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
