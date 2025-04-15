import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import QuizPage from "./pages/quiz";
import PageNotFound from "./components/404";
import { Box } from "@chakra-ui/react";
import Category from "./pages/category";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<Category />} />
        <Route
          path="/quiz"
          element={
            <Box display="flex" h="100%" w="100%" bg="#584db9">
              <QuizPage />
            </Box>
          }
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
