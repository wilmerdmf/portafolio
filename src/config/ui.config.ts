export const uiConfig = {
  icons: {
    sizes: {
      small: 16,
      medium: 18,
      large: 24,
      xlarge: 28,
    },
  },
  colors: {
    primary: "#c1c6d9",
    accent: "#61dafb",
  },
  cursor: {
    pointer: "pointer" as const,
    zoomIn: "zoom-in" as const,
  },
  targets: {
    blank: "_blank" as const,
  },
  rel: {
    noopener: "noopener noreferrer" as const,
  },
} as const;
