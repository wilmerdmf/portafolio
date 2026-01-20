import { useTranslation } from "react-i18next";
import { personalInfo } from "../../config";
import { FadeIn } from "../common";

const Footer = () => {
  const { t } = useTranslation("common");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <FadeIn>
        <button className="footer-home-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          {t("footer.backToTop")}
        </button>

        <p className="footer-cta">{t("footer.availability")}</p>

        <p className="footer-tech">{t("footer.builtWith")}</p>

        <p className="footer-id">{t("footer.rights", { year: currentYear, name: personalInfo.name })}</p>
      </FadeIn>
    </footer>
  );
};

export default Footer;
