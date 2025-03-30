// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";
import { system } from "./components/ui/theme.ts";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <ChakraProvider value={system}>
    <App />
  </ChakraProvider>
  // </StrictMode>
);
