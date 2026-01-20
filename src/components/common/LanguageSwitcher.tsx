import { memo } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="language-switcher"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Change language to ${i18n.language === "es" ? "English" : "Español"}`}
    >
      <Globe size={20} />
      <span>{i18n.language === "es" ? "ES" : "EN"}</span>
    </motion.button>
  );
};

export default memo(LanguageSwitcher);
