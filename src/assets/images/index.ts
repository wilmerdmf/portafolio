import profileImage from "./profile/profile.jpeg";

import calculadoraImage from "./projects/calculadora.png";

import portfolioImage from "../images/icons/portfolio.png";

export const images = {
  profile: profileImage,
  projects: {
    calculadora: calculadoraImage,
  },
  brand: {
    portfolio: portfolioImage,
  },
} as const;
