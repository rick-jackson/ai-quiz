import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        bg: {
          primary: { value: "#4d37a7" },
          primaryHover: { value: "#5f45ba" },
          secondary: { value: "#654bbf" },
          thirty: { value: "#e4229c" },
          primaryBlue: { value: "#3f30dd" },
        },
      },
    },
  },
  globalCss: {
    body: {
      minHeight: "100%",
      display: "flex",
      width: "100%",
    },
    "#root": { height: "100%", width: "100%" },
    button: {
      borderRadius: "14px",
    },
    html: {
      scrollBehavior: "smooth",
      width: "100%",
      display: "flex",
      minHeight: "100%",
      colorScheme: "light",
      color: "#f2f3f5",
    },
    a: {
      textDecoration: "none",
    },
  },
});

export const system = createSystem(defaultConfig, config);
