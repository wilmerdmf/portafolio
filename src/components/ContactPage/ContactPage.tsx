import { Mail, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { contactInfo, sections, uiConfig } from "../../config";
import { FadeIn, ScaleIn } from "../common";

const ContactPage = () => {
  const { t } = useTranslation("contact");

  return (
    <section id={sections.contact} className="contact-container">
      <div className="contact-content-container max-width-container">
        <FadeIn>
          <h2 className="contact-title">{t("title")}</h2>
          <p className="contact-text">{t("description")}</p>
        </FadeIn>

        <div className="contact-grid">
          <ScaleIn delay={0.2}>
            <a
              href={`mailto:${contactInfo.email}`}
              className="contact-card"
              target={uiConfig.targets.blank}
              rel={uiConfig.rel.noopener}
            >
              <div>
                <Mail size={uiConfig.icons.sizes.medium} />
                <span>{t("email.label")}</span>
              </div>
              <span>{contactInfo.email}</span>
            </a>
          </ScaleIn>

          <ScaleIn delay={0.3}>
            <a
              href={contactInfo.whatsappLink}
              className="contact-card"
              target={uiConfig.targets.blank}
              rel={uiConfig.rel.noopener}
            >
              <div>
                <MessageCircle size={uiConfig.icons.sizes.medium} />
                <span>{t("whatsapp.label")}</span>
              </div>
              <span>{contactInfo.phone}</span>
            </a>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
