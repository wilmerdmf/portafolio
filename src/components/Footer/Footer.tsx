import { footerConfig, personalInfo } from "../../config";
import { FadeIn } from "../common";

const Footer = () => {
  const currentYear = footerConfig.getCurrentYear();

  return (
    <footer className="footer-container">
      <FadeIn>
        <button className="footer-home-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          {footerConfig.backToTopText}
        </button>

        <p className="footer-cta">{footerConfig.availability}</p>

        <p className="footer-tech">{footerConfig.builtWith}</p>

        <p className="footer-id">
          © {currentYear} — {personalInfo.name}
        </p>
      </FadeIn>
    </footer>
  );
};

export default Footer;
