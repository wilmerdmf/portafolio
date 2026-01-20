import { lazy, Suspense } from "react";
import Header from "./components/Header/Header";
import { PageLoader, LanguageSwitcher } from "./components/common";

const HeroPage = lazy(() => import("./components/HeroPage/HeroPage"));
const ProjectPage = lazy(() => import("./components/ProjectPage/ProjectPage"));
const AboutPage = lazy(() => import("./components/AboutPage/AboutPage"));
const SkillsPage = lazy(() => import("./components/SkillsPage/SkillsPage"));
const ContactPage = lazy(() => import("./components/ContactPage/ContactPage"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  return (
    <>
      <Header />
      <LanguageSwitcher />
      <Suspense fallback={<PageLoader />}>
        <HeroPage />
        <ProjectPage />
        <AboutPage />
        <SkillsPage />
        <ContactPage />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
