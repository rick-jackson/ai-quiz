import { Box } from "@chakra-ui/react";
import Banner from "../components/Banner";
import HowItWorks from "../components/HowItWorks";
import Categories from "../components/Categories";
import Form from "../components/Form";
import { useEffect } from "react";

const HomePage: React.FC = () => {
  useEffect(() => {
    localStorage.removeItem("category");
    localStorage.removeItem("difficulty");
    localStorage.removeItem("answerCount");
    localStorage.removeItem("questionCount");
  }, []);
  return (
    <Box>
      <Banner />
      <Box bg="linear-gradient(186deg, rgba(113,89,228,1) 0%, rgba(102,79,224,1) 100%)">
        <HowItWorks />
        <Categories />
        <Form />
      </Box>
    </Box>
  );
};

export default HomePage;
