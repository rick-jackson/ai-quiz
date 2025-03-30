import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        bg: {
          primary: { value: "#4d37a7" },
          secondary: { value: "#654bbf" },
          thirty: { value: "#e4229c" },
        },
      },
    },
  },
  globalCss: {
    "#root": { height: "100vh" },
    button: {
      borderRadius: "14px !important",
    },
    html: {
      colorScheme: "light",
      color: "#f2f3f5",
    },
  },
});

export const system = createSystem(defaultConfig, config);
