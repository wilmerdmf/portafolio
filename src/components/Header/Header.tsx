import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { images } from "@/assets";
import { useNav } from "../../hooks";
import { navItems, personalInfo, uiConfig } from "../../config";

const Header = () => {
  const { isMenuOpen, toggleMenu, handleNavClick } = useNav();

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
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X color={uiConfig.colors.primary} size={uiConfig.icons.sizes.xlarge} strokeWidth={2.5} />
            ) : (
              <Menu color={uiConfig.colors.primary} size={uiConfig.icons.sizes.xlarge} strokeWidth={2} />
            )}
          </button>

          <motion.ul
            className={`nav-list ${isMenuOpen ? "open" : ""}`}
            initial={false}
            animate={isMenuOpen ? "open" : "closed"}
            variants={{
              open: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.07,
                  delayChildren: 0.2,
                },
              },
              closed: {
                opacity: 0,
                y: -20,
                transition: {
                  staggerChildren: 0.05,
                  staggerDirection: -1,
                },
              },
            }}
          >
            {navItems.map((item) => (
              <motion.li
                key={item}
                onClick={() => handleNavClick(item)}
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -10 },
                }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
