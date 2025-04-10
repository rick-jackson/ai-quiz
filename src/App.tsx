import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import QuizPage from "./pages/quiz";
import Error from "./components/Error";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/quiz"
          element={
            <Box display="flex" h="100%" w="100%" bg="#584db9">
              <QuizPage />
            </Box>
          }
        />
        <Route
          path="/*"
          element={
            <Box display="flex" h="100%" w="100%" bg="#584db9">
              <Error status={404} error="Ooops... page not found" />
            </Box>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
