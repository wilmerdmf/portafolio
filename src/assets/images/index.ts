// Profile images
import profileImage from "./profile/profile.jpeg";

// Project images
import calculadoraImage from "./projects/calculadora.png";

// Brand images
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
